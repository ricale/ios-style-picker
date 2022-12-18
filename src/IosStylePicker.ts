import easing from './easing';
import normalize from './normalize';
import IosStylePickerHtml from './IosStylePickerHtml';

type IosStylePickerVariant = 'infinite' | 'normal';
export interface IosStylePickerSourceItem {
  value: number;
  text: string;
}

interface IosStylePickerTouchData {
  startY: number;
  yArr: [number, number][];
  touchScroll: number;
}
type IosStylePickerUserEvent = MouseEvent | TouchEvent;

export interface IosStylePickerOptions {
  variant?: IosStylePickerVariant;
  source: IosStylePickerSourceItem[];
  onChange?: (selected: IosStylePickerSourceItem) => void;
  count?: number;
  sensitivity?: number;
  value?: number;
}

class IosStylePicker {
  private variant: IosStylePickerVariant;
  private source: IosStylePickerSourceItem[];
  private selected: { value: number; text: string };

  private onChange?: (selected: IosStylePickerSourceItem) => void;

  private sensitivity: number;
  private wheelCount: number;
  private exceedA: number;
  private moveT: number;
  private moving: boolean;

  private targetElement: HTMLElement;
  private html: IosStylePickerHtml | undefined;

  private events: {
    touchstart: (evt: IosStylePickerUserEvent) => void;
    touchmove: (evt: IosStylePickerUserEvent) => void;
    touchend: (evt: IosStylePickerUserEvent) => void;
  };

  private itemHeight: number;
  private itemAngle: number;
  private radius: number;
  private scroll: number;

  private touchData: IosStylePickerTouchData = {
    startY: 0,
    yArr: [],
    touchScroll: 0,
  };

  constructor(targetElement: HTMLElement, options: IosStylePickerOptions) {
    this.variant = options.variant ?? 'infinite';
    this.source = options.source;
    this.selected = this.source[0];
    this.onChange = options.onChange;

    const count = options.count ?? 20;
    this.wheelCount = count - (count % 4); // 4의 배수여야 함
    this.sensitivity = options.sensitivity ?? 8;

    this.exceedA = 10;
    this.moveT = 0;
    this.moving = false;

    this.targetElement = targetElement;
    if (!this.targetElement) {
      throw new Error(`targetElement does not exists.`);
    }

    this.itemHeight = (this.targetElement.offsetHeight * 3) / count;
    this.itemAngle = 360 / count; // 아이템 간 각도 차이
    this.radius = this.itemHeight / Math.tan((this.itemAngle * Math.PI) / 180); // 반지름

    this.scroll = 0;
    this._create(this.source);

    this.events = {
      touchstart: this._createEventListener('touchstart'),
      touchmove: this._createEventListener('touchmove'),
      touchend: this._createEventListener('touchend'),
    };

    this.html?.addEventListener('touchstart', this.events.touchstart);
    document.addEventListener('mousedown', this.events.touchstart);
    this.html?.addEventListener('touchend', this.events.touchend);
    document.addEventListener('mouseup', this.events.touchend);

    if (this.source.length) {
      this.select(this.selected.value);
    }
  }

  // TODO: kangseongofdk
  // IosStylePickerHtml should be in charge of this method.
  private _createEventListener(eventName: 'touchstart' | 'touchmove' | 'touchend') {
    return (evt: IosStylePickerUserEvent) => {
      if (!this.html?.equalOrContains(evt.target)) {
        return;
      }
      if (this.source.length === 0) {
        return;
      }
      evt.preventDefault();
      this[`_${eventName}`](evt);
    };
  }

  private _touchstart(evt: IosStylePickerUserEvent) {
    if (!this.html) {
      throw new Error('this.html does not exists');
    }

    this.html.addEventListener('touchmove', this.events.touchmove);
    document.addEventListener('mousemove', this.events.touchmove);

    // const eventY = isMouseEvent(evt) ? evt.clientY : evt.touches[0].clientY;
    const eventY = (evt as MouseEvent).clientY ?? (evt as TouchEvent).touches[0].clientY;
    this.touchData.startY = eventY;
    this.touchData.yArr = [[eventY, new Date().getTime()]];
    this.touchData.touchScroll = this.scroll;
    this._stop();
  }

  private _touchmove(evt: IosStylePickerUserEvent) {
    // const eventY = isMouseEvent(evt) ? evt.clientY : evt.touches[0].clientY;
    const eventY = (evt as MouseEvent).clientY ?? (evt as TouchEvent).touches[0].clientY;
    this.touchData.yArr.push([eventY, new Date().getTime()]);
    if (this.touchData.yArr.length > 5) {
      this.touchData.yArr.unshift();
    }

    const scrollAdd = (this.touchData.startY - eventY) / this.itemHeight;
    const baseMoveToControl = scrollAdd + this.scroll;
    const moveToScroll =
      this.variant === 'infinite'
        ? normalize(baseMoveToControl, this.source.length)
        : baseMoveToControl < 0
        ? baseMoveToControl * 0.3 // 무한 스크롤이 아니면 스크롤이 좀 덜 되게 조정
        : baseMoveToControl > this.source.length
        ? this.source.length + (baseMoveToControl - this.source.length) * 0.3 // 무한 스크롤이 아니면 스크롤이 좀 덜 되게 조정
        : baseMoveToControl;

    this.touchData.touchScroll = this._moveTo(moveToScroll);
  }

  private _getInitV() {
    if (this.touchData.yArr.length === 1) {
      return 0;
    }

    const startTime = this.touchData.yArr[this.touchData.yArr.length - 2][1];
    const endTime = this.touchData.yArr[this.touchData.yArr.length - 1][1];
    const startY = this.touchData.yArr[this.touchData.yArr.length - 2][0];
    const endY = this.touchData.yArr[this.touchData.yArr.length - 1][0];

    const v = (((startY - endY) / this.itemHeight) * 1000) / (endTime - startTime);
    const sign = v > 0 ? 1 : -1;

    return Math.abs(v) > 30 ? 30 * sign : v;
  }

  private _touchend(_evt: IosStylePickerUserEvent) {
    if (!this.html) {
      throw new Error('this.html does not exists.');
    }

    this.html.removeEventListener('touchmove', this.events.touchmove);
    document.removeEventListener('mousemove', this.events.touchmove);

    const v = this._getInitV(/*touchData*/);

    this.scroll = this.touchData.touchScroll;
    this._animateMoveByInitV(v);
  }

  private _create(source: IosStylePickerSourceItem[]) {
    if (!source.length) {
      throw new Error('source does not exists.');
    }

    // 무한 스크롤을 위해 데이터 복제 처리
    // 링이 돌아갈 때 데이터가 끊임없이 보여야 한다.
    if (this.variant === 'infinite') {
      let concatSource: IosStylePickerSourceItem[] = [...source];
      // 링의 this.wheelCount / 2 보다 데이터 갯수가 적으면, 뒤에 그대로 붙인다.
      // 왜 반절이냐, 사용자에게는 반절밖에 안보이기 때문
      while (concatSource.length < this.wheelCount / 2) {
        concatSource = concatSource.concat(source);
      }
      source = concatSource;
    }
    this.source = source;

    this.html = new IosStylePickerHtml({
      container: this.targetElement,
      source: this.source,
      isInfinite: this.variant === 'infinite',
      wheelCount: this.wheelCount,
      itemAngle: this.itemAngle,
      itemHeight: this.itemHeight,
      radius: this.radius,
    });
  }

  private _moveTo(scroll: number) {
    if (!this.html) throw new Error('html does not exists');

    if (this.variant === 'infinite') {
      scroll = normalize(scroll, this.source.length);
    }

    this.html.scroll(scroll);

    return scroll;
  }

  async _animateMoveByInitV(initV: number) {
    if (this.variant === 'infinite') {
      const a = initV > 0 ? -this.sensitivity : this.sensitivity;
      const t = Math.abs(initV / a);
      const totalScrollLen = initV * t + (a * t * t) / 2;
      const finalScroll = Math.round(this.scroll + totalScrollLen);

      await this._animateToScroll(this.scroll, finalScroll, t, 'easeOutQuart');
    } else if (this.scroll < 0 || this.scroll > this.source.length - 1) {
      const finalScroll = this.scroll < 0 ? 0 : this.source.length - 1;

      await this._animateToScroll(
        this.scroll,
        finalScroll,
        Math.sqrt(Math.abs((this.scroll - finalScroll) / this.exceedA))
      );
    } else {
      const a = initV > 0 ? -this.sensitivity : this.sensitivity;
      let t = Math.abs(initV / a);
      let totalScrollLen = initV * t + (a * t * t) / 2;
      let finalScroll = Math.round(this.scroll + totalScrollLen);
      finalScroll =
        finalScroll < 0
          ? 0
          : finalScroll > this.source.length - 1
          ? this.source.length - 1
          : finalScroll;

      totalScrollLen = finalScroll - this.scroll;
      t = Math.sqrt(Math.abs(totalScrollLen / a));
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

  private _stop() {
    this.moving = false;
    cancelAnimationFrame(this.moveT);
  }

  private _selectByScroll(scroll: number) {
    scroll = normalize(scroll, this.source.length) | 0;
    if (scroll > this.source.length - 1) {
      scroll = this.source.length - 1;
      this._moveTo(scroll);
    }
    this._moveTo(scroll);
    this.scroll = scroll;
    this.selected = this.source[scroll];
    this.onChange && this.onChange(this.selected);
  }

  updateSource(source: IosStylePickerSourceItem[]) {
    this._create(source);

    if (!this.moving) {
      this._selectByScroll(this.scroll);
    }
  }

  async select(value: number) {
    for (let i = 0; i < this.source.length; i++) {
      if (this.source[i].value === value) {
        window.cancelAnimationFrame(this.moveT);

        const initScroll = normalize(this.scroll, this.source.length);
        const finalScroll = i;
        const t = Math.sqrt(Math.abs((finalScroll - initScroll) / this.sensitivity));
        await this._animateToScroll(initScroll, finalScroll, t);
        this._selectByScroll(i);
        return;
      }
    }
    throw new Error(`can't find value: ${value}`);
  }

  destroy() {
    this._stop();

    this.html?.removeEventListener('touchstart', this.events.touchstart);
    this.html?.removeEventListener('touchmove', this.events.touchmove);
    this.html?.removeEventListener('touchend', this.events.touchend);
    document.removeEventListener('mousedown', this.events.touchstart);
    document.removeEventListener('mousemove', this.events.touchmove);
    document.removeEventListener('mouseup', this.events.touchend);

    this.html?.clear();
  }
}

export default IosStylePicker;
