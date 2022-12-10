import easing from './easing';

type IosSelctorType = 'infinite' | 'normal';
interface IosSelectorSourceItem {
  value: number;
  text: string;
}
interface IosSelectorOptions {
  el: string;
  type: IosSelctorType;
  count: number;
  sensitivity: number;
  source: IosSelectorSourceItem[];
  value: null | number;
  onChange?: (selected: IosSelectorSourceItem) => void;
}
interface IosSelectorTouchData {
  startY: number;
  yArr: [number, number][];
  touchScroll: number;
}
type IosSelctorUserEvent = MouseEvent | TouchEvent;

interface IosSelectorInputOptions {
  el: IosSelectorOptions['el'];
  type?: IosSelectorOptions['type'];
  count?: IosSelectorOptions['count'];
  sensitivity?: IosSelectorOptions['sensitivity'];
  source: IosSelectorOptions['source'];
  value?: IosSelectorOptions['value'];
  onChange?: IosSelectorOptions['onChange'];
}

function isMouseEvent(evt: Event): evt is MouseEvent {
  return evt.hasOwnProperty('clientY');
}

class IosSelector {
  private options: IosSelectorOptions;

  private el: IosSelectorOptions['el'];
  private type: IosSelectorOptions['type'];
  private count: IosSelectorOptions['count'];
  private sensitivity: IosSelectorOptions['sensitivity'];
  private source: IosSelectorOptions['source'];
  private value: IosSelectorOptions['value'];
  private onChange: IosSelectorOptions['onChange'];

  private halfCount: number;
  private quarterCount: number;
  private alpha: number;
  private minV: number;

  private selected: { value: number; text: string };

  private exceedA: number;
  private moveT: number;
  private moving: boolean;

  private elems: {
    el: HTMLElement | null;
    circleList: HTMLElement | null;
    circleItems: NodeListOf<HTMLElement> | null;
    highlight: HTMLElement | null;
    highlightList: HTMLElement | null;
    highListItems: NodeListOf<HTMLElement> | null;
  };

  private events: {
    touchstart: (evt: IosSelctorUserEvent) => void;
    touchmove: (evt: IosSelctorUserEvent) => void;
    touchend: (evt: IosSelctorUserEvent) => void;
  };

  private itemHeight: number;
  private itemAngle: number;
  private radius: number;
  private scroll: number;

  constructor(options: IosSelectorInputOptions) {
    const defaults: IosSelectorOptions = {
      el: '',
      type: 'infinite',
      count: 20, // 4의 배수로 설정되어야 하는 링의 아이템 갯수
      sensitivity: 0.8,
      source: [],
      value: null,
    };

    // 옵션 기본값과 입력받은 옵션을 하나의 객체로 결합
    this.options = Object.assign({}, defaults, options);
    this.options.count = this.options.count - (this.options.count % 4);

    this.el = this.options.el;
    this.type = this.options.type;
    this.count = this.options.count;
    this.sensitivity = this.options.sensitivity;
    this.source = this.options.source;
    this.value = this.options.value;

    Object.assign(this, this.options);

    this.halfCount = this.options.count / 2;
    this.quarterCount = this.options.count / 4;
    this.alpha = this.options.sensitivity * 10;
    this.minV = Math.sqrt(1 / this.alpha);
    // 기본값은 입력받은 source 의 첫번째 값
    this.selected = this.source[0];

    this.exceedA = 10;
    this.moveT = 0;
    this.moving = false;

    const el = document.querySelector<HTMLElement>(this.options.el);
    if (!el) {
      throw new Error(`element ${this.options.el} not exists`);
    }
    this.elems = {
      el,
      circleList: null,
      circleItems: null,

      highlight: null,
      highlightList: null,
      highListItems: null,
    };

    this.itemHeight = (el.offsetHeight * 3) / this.options.count;
    this.itemAngle = 360 / this.options.count; // 아이템 간 각도 차이
    this.radius = this.itemHeight / Math.tan((this.itemAngle * Math.PI) / 180); // 반지름

    this.scroll = 0;
    this._create(this.options.source);

    const touchData: IosSelectorTouchData = {
      startY: 0,
      yArr: [],
      touchScroll: 0,
    };

    this.events = {
      touchstart: this._createEventListener('touchstart', touchData),
      touchmove: this._createEventListener('touchmove', touchData),
      touchend: this._createEventListener('touchend', touchData),
    };

    el.addEventListener('touchstart', this.events.touchstart);
    document.addEventListener('mousedown', this.events.touchstart);
    el.addEventListener('touchend', this.events.touchend);
    document.addEventListener('mouseup', this.events.touchend);
    if (this.source.length) {
      this.value = this.value !== null ? this.value : this.source[0].value;
      this.select(this.value);
    }
  }

  _createEventListener(
    eventName: 'touchstart' | 'touchmove' | 'touchend',
    touchData: IosSelectorTouchData
  ) {
    return (evt: IosSelctorUserEvent) => {
      if (!this.elems.el?.contains(evt.target as Node) && evt.target !== this.elems.el) {
        return;
      }
      if (this.source.length === 0) {
        return;
      }
      evt.preventDefault();
      this[`_${eventName}`](evt, touchData);
    };
  }

  _touchstart(evt: IosSelctorUserEvent, touchData: IosSelectorTouchData) {
    if (!this.elems.el) {
      return;
    }

    this.elems.el.addEventListener('touchmove', this.events.touchmove);
    document.addEventListener('mousemove', this.events.touchmove);

    // const eventY = isMouseEvent(evt) ? evt.clientY : evt.touches[0].clientY;
    const eventY = (evt as MouseEvent).clientY ?? (evt as TouchEvent).touches[0].clientY;
    touchData.startY = eventY;
    touchData.yArr = [[eventY, new Date().getTime()]];
    touchData.touchScroll = this.scroll;
    this._stop();
  }

  _touchmove(evt: IosSelctorUserEvent, touchData: IosSelectorTouchData) {
    // const eventY = isMouseEvent(evt) ? evt.clientY : evt.touches[0].clientY;
    const eventY = (evt as MouseEvent).clientY ?? (evt as TouchEvent).touches[0].clientY;
    touchData.yArr.push([eventY, new Date().getTime()]);
    if (touchData.yArr.length > 5) {
      touchData.yArr.unshift();
    }

    const scrollAdd = (touchData.startY - eventY) / this.itemHeight;
    // const moveToScroll = scrollAdd + this.scroll;
    const baseMoveToControl = scrollAdd + this.scroll;
    const moveToScroll =
      this.type === 'infinite'
        ? this._normalizeScroll(baseMoveToControl)
        : baseMoveToControl < 0
        ? baseMoveToControl * 0.3 // 무한 스크롤이 아니면 스크롤이 좀 덜 되게 조정
        : baseMoveToControl > this.source.length
        ? this.source.length + (baseMoveToControl - this.source.length) * 0.3 // 무한 스크롤이 아니면 스크롤이 좀 덜 되게 조정
        : baseMoveToControl;

    touchData.touchScroll = this._moveTo(moveToScroll);
  }

  _getInitV(touchData: IosSelectorTouchData) {
    if (touchData.yArr.length === 1) {
      return 0;
    }

    const startTime = touchData.yArr[touchData.yArr.length - 2][1];
    const endTime = touchData.yArr[touchData.yArr.length - 1][1];
    const startY = touchData.yArr[touchData.yArr.length - 2][0];
    const endY = touchData.yArr[touchData.yArr.length - 1][0];

    const v = (((startY - endY) / this.itemHeight) * 1000) / (endTime - startTime);
    const sign = v > 0 ? 1 : -1;

    return Math.abs(v) > 30 ? 30 * sign : v;
  }

  _touchend(_evt: IosSelctorUserEvent, touchData: IosSelectorTouchData) {
    if (!this.elems.el) {
      return;
    }

    this.elems.el.removeEventListener('touchmove', this.events.touchmove);
    document.removeEventListener('mousemove', this.events.touchmove);

    const v = this._getInitV(touchData);

    this.scroll = touchData.touchScroll;
    this._animateMoveByInitV(v);
  }

  _create(source: IosSelectorSourceItem[]) {
    if (!source.length || !this.elems.el) {
      return;
    }

    const template = `
      <div class="select-wrap">
        <ul
          class="select-options"
          style="transform: translate3d(0, 0, ${-this.radius}px) rotateX(0deg);"
        >
          {{circleListHtml}}
          <!-- <li class="select-option">a0</li> -->
        </ul>
        <div class="highlight">
          <ul class="highlight-list">
            <!-- <li class="highlight-item"></li> -->
            {{highListHtml}}
          </ul>
        </div>
      </div>`;

    // 무한 스크롤을 위해 데이터 복제 처리
    // 링이 돌아갈 때 데이터가 끊임없이 보여야 한다.
    if (this.options.type === 'infinite') {
      let concatSource: IosSelectorSourceItem[] = [...source];
      // 링의 halfCount 보다 데이터 갯수가 적으면, 뒤에 그대로 붙인다.
      // 왜 반절이냐, 사용자에게는 반절밖에 안보이기 때문
      while (concatSource.length < this.halfCount) {
        concatSource = concatSource.concat(source);
      }
      source = concatSource;
    }
    this.source = source;
    const sourceLength = source.length;

    let circleListHtml = '';
    for (let i = 0; i < source.length; i++) {
      circleListHtml += `<li
        class="select-option"
        style="
          top: ${this.itemHeight * -0.5}px;
          height: ${this.itemHeight}px;
          line-height: ${this.itemHeight}px;
          transform: rotateX(${-this.itemAngle * i}deg) translate3d(0, 0, ${this.radius}px);
        "
        data-index="${i}"
      >
        ${source[i].text}
      </li>`;
    }

    let highListHtml = '';
    for (let i = 0; i < source.length; i++) {
      highListHtml += `<li
        class="highlight-item"
        style="height: ${this.itemHeight}px;"
      >
        ${source[i].text}
      </li>`;
    }

    if (this.options.type === 'infinite') {
      for (let i = 0; i < this.quarterCount; i++) {
        circleListHtml =
          `<li
          class="select-option"
          style="
            top: ${this.itemHeight * -0.5}px;
            height: ${this.itemHeight}px;
            line-height: ${this.itemHeight}px;
            transform: rotateX(${this.itemAngle * (i + 1)}deg) translate3d(0, 0, ${
            this.radius
          }px);
          "
          data-index="${-i - 1}"
        >
          ${source[sourceLength - i - 1].text}
        </li>` + circleListHtml;

        circleListHtml += `<li
          class="select-option"
          style="
            top: ${this.itemHeight * -0.5}px;
            height: ${this.itemHeight}px;
            line-height: ${this.itemHeight}px;
            transform: rotateX(${-this.itemAngle * (i + sourceLength)}deg) translate3d(0, 0, ${
          this.radius
        }px);
          "
          data-index="${i + sourceLength}"
        >
          ${source[i].text}
        </li>`;
      }

      highListHtml =
        `<li
        class="highlight-item"
        style="height: ${this.itemHeight}px;"
      >
        ${source[sourceLength - 1].text}
      </li>` + highListHtml;
      highListHtml += `<li
        class="highlight-item"
        style="height: ${this.itemHeight}px;"
      >
        ${source[0].text}
      </li>`;
    }

    this.elems.el.innerHTML = template
      .replace('{{circleListHtml}}', circleListHtml)
      .replace('{{highListHtml}}', highListHtml);
    this.elems.circleList = this.elems.el.querySelector('.select-options');
    this.elems.circleItems = this.elems.el.querySelectorAll<HTMLElement>('.select-option');

    const highlight = this.elems.el.querySelector<HTMLElement>('.highlight');
    if (!highlight) {
      throw new Error('.highlight not exists');
    }
    const highlightList = this.elems.el.querySelector<HTMLElement>('.highlight-list');
    if (!highlightList) {
      throw new Error('.highlight-list not exists');
    }
    this.elems.highlight = highlight;
    this.elems.highlightList = highlightList;
    // this.elems.highListItems = this.elems.el.querySelectorAll<HTMLElement>('.highlight-item');

    if (this.type === 'infinite') {
      highlightList.style.top = -this.itemHeight + 'px';
    }

    highlight.style.height = this.itemHeight + 'px';
    highlight.style.lineHeight = this.itemHeight + 'px';
  }

  _normalizeScroll(scroll: number) {
    let normalizedScroll = scroll;
    while (normalizedScroll < 0) {
      normalizedScroll += this.source.length;
    }
    normalizedScroll = normalizedScroll % this.source.length;
    return normalizedScroll;
  }

  _moveTo(scroll: number) {
    if (!this.elems.circleList) throw new Error('circleList not exists');
    if (!this.elems.highlightList) throw new Error('highlightList not exists');
    if (!this.elems.circleItems) throw new Error('circleItems not exists');

    if (this.type === 'infinite') {
      scroll = this._normalizeScroll(scroll);
    }
    this.elems.circleList.style.transform = `translate3d(0, 0, ${-this.radius}px) rotateX(${
      this.itemAngle * scroll
    }deg)`;
    this.elems.highlightList.style.transform = `translate3d(0, ${
      -scroll * this.itemHeight
    }px, 0)`;

    [...this.elems.circleItems].forEach(itemElem => {
      if (itemElem.dataset.index === undefined) {
        throw new Error('itemElem.dataset.index not exists');
      }
      if (Math.abs(+itemElem.dataset.index - scroll) > this.quarterCount) {
        itemElem.style.visibility = 'hidden';
      } else {
        itemElem.style.visibility = 'visible';
      }
    });

    return scroll;
  }

  async _animateMoveByInitV(initV: number) {
    let initScroll;
    let finalScroll;
    // let finalV;
    let totalScrollLen;
    let a;
    let t;

    if (this.type === 'normal') {
      if (this.scroll < 0 || this.scroll > this.source.length - 1) {
        a = this.exceedA;
        initScroll = this.scroll;
        finalScroll = this.scroll < 0 ? 0 : this.source.length - 1;
        totalScrollLen = initScroll - finalScroll;

        t = Math.sqrt(Math.abs(totalScrollLen / a));
        // initV = a * t;
        // initV = this.scroll > 0 ? -initV : initV;
        // finalV = 0;
        await this._animateToScroll(initScroll, finalScroll, t);
      } else {
        initScroll = this.scroll;
        a = initV > 0 ? -this.alpha : this.alpha;
        t = Math.abs(initV / a);
        totalScrollLen = initV * t + (a * t * t) / 2;
        finalScroll = Math.round(this.scroll + totalScrollLen);
        finalScroll =
          finalScroll < 0
            ? 0
            : finalScroll > this.source.length - 1
            ? this.source.length - 1
            : finalScroll;

        totalScrollLen = finalScroll - initScroll;
        t = Math.sqrt(Math.abs(totalScrollLen / a));
        await this._animateToScroll(this.scroll, finalScroll, t, 'easeOutQuart');
      }
    } else {
      initScroll = this.scroll;

      a = initV > 0 ? -this.alpha : this.alpha;
      t = Math.abs(initV / a);
      totalScrollLen = initV * t + (a * t * t) / 2;
      finalScroll = Math.round(this.scroll + totalScrollLen);

      await this._animateToScroll(this.scroll, finalScroll, t, 'easeOutQuart');
    }

    this._selectByScroll(this.scroll);
  }

  _animateToScroll(
    initScroll: number,
    finalScroll: number,
    t: number,
    easingName: keyof typeof easing = 'easeOutQuart'
  ) {
    if (initScroll === finalScroll || t === 0) {
      this._moveTo(initScroll);
      return;
    }

    const start = new Date().getTime() / 1000;
    const totalScrollLen = finalScroll - initScroll;

    return new Promise<void>((resolve, reject) => {
      this.moving = true;
      const tick = () => {
        const pass = new Date().getTime() / 1000 - start;

        if (pass < t) {
          this.scroll = this._moveTo(
            initScroll + easing[easingName](pass / t) * totalScrollLen
          );
          this.moveT = requestAnimationFrame(tick);
        } else {
          resolve();
          this._stop();
          this.scroll = this._moveTo(initScroll + totalScrollLen);
        }
      };
      tick();
    });
  }

  _stop() {
    this.moving = false;
    cancelAnimationFrame(this.moveT);
  }

  _selectByScroll(scroll: number) {
    scroll = this._normalizeScroll(scroll) | 0;
    if (scroll > this.source.length - 1) {
      scroll = this.source.length - 1;
      this._moveTo(scroll);
    }
    this._moveTo(scroll);
    this.scroll = scroll;
    this.selected = this.source[scroll];
    this.value = this.selected.value;
    this.onChange && this.onChange(this.selected);
  }

  updateSource(source: IosSelectorSourceItem[]) {
    this._create(source);

    if (!this.moving) {
      this._selectByScroll(this.scroll);
    }
  }

  select(value: number) {
    for (let i = 0; i < this.source.length; i++) {
      if (this.source[i].value === value) {
        window.cancelAnimationFrame(this.moveT);

        const initScroll = this._normalizeScroll(this.scroll);
        const finalScroll = i;
        const t = Math.sqrt(Math.abs((finalScroll - initScroll) / this.alpha));
        this._animateToScroll(initScroll, finalScroll, t);
        setTimeout(() => this._selectByScroll(i));
        return;
      }
    }
    throw new Error(`can't find value: ${value}`);
  }

  destroy() {
    this._stop();

    this.elems.el?.removeEventListener('touchstart', this.events.touchstart);
    this.elems.el?.removeEventListener('touchmove', this.events.touchmove);
    this.elems.el?.removeEventListener('touchend', this.events.touchend);
    document.removeEventListener('mousedown', this.events.touchstart);
    document.removeEventListener('mousemove', this.events.touchmove);
    document.removeEventListener('mouseup', this.events.touchend);

    const el = this.elems.el;
    if (el) {
      el.innerHTML = '';
    }
    this.elems = {
      el: null,
      circleList: null,
      circleItems: null,

      highlight: null,
      highlightList: null,
      highListItems: null,
    };
  }
}

export default IosSelector;
