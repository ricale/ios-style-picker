import getRange from './getRange';
import { IosStylePickerSourceItem } from './IosStylePicker';

const classNames = {
  wrapper: 'select-wrap',
  optionList: 'select-options',
  optionItem: 'select-option',
  highlight: 'highlight',
  highlightList: 'highlight-list',
  highlightItem: 'highlight-item',
};

type GetOptionItemOptions = {
  top: number;
  height: number;
  rotateX: number;
  radius: number;
  index: number;
  text: string;
};

type GetHighlightItemOptions = {
  height: number;
  text: string;
};

type GetOptionItemsOptions = {
  isInfinite: boolean;
  wheelCount: number;
  source: { text: string }[];
  itemAngle: number;
  itemHeight: number;
  radius: number;
};

type GetHighlightItemsOptions = {
  isInfinite: boolean;
  source: { text: string }[];
  itemHeight: number;
};

const templates = {
  cn: { ...classNames },
  getBase: (radius: number, itemHeight: number) => `
<div class="${classNames.wrapper}">
  <ul
    class="${classNames.optionList}"
    style="transform: translate3d(0, 0, ${radius}px) rotateX(0deg);"
  >
    {{optionListHtml}}
  </ul>
  <div
    class="${classNames.highlight}"
    style="height: ${itemHeight}px; line-height: ${itemHeight}px;"
  >
    <ul class="${classNames.highlightList}">
      {{highListHtml}}
    </ul>
  </div>
</div>`,

  getOptionItem: ({ top, height, rotateX, radius, index, text }: GetOptionItemOptions) => `
<li
  class="${classNames.optionItem}"
  style="
    top: ${top}px;
    height: ${height}px;
    line-height: ${height}px;
    transform: rotateX(${rotateX}deg) translate3d(0, 0, ${radius}px);
  "
  data-index="${index}"
>
  ${text}
</li>`,

  getHighlightItem: ({ height, text }: GetHighlightItemOptions) => `
<li
  class="${classNames.highlightItem}"
  style="height: ${height}px;"
>
  ${text}
</li>`,

  getOptionItems: ({
    isInfinite,
    wheelCount,
    source,
    itemAngle,
    itemHeight,
    radius,
  }: GetOptionItemsOptions) => {
    const optionIndices = isInfinite
      ? getRange(-wheelCount / 4, source.length + wheelCount / 4)
      : getRange(0, source.length);

    const optionListItems = optionIndices.map(i => ({
      rotateX: -itemAngle * i,
      index: i,
      text: source[(i + source.length) % source.length].text,
    }));

    return optionListItems.reduce(
      (acc, item) =>
        `${acc}${templates.getOptionItem({
          top: itemHeight * -0.5,
          height: itemHeight,
          rotateX: item.rotateX,
          radius: radius,
          index: item.index,
          text: item.text,
        })}`,
      ''
    );
  },

  getHighlightItems: ({ isInfinite, source, itemHeight }: GetHighlightItemsOptions) => {
    const indices = isInfinite ? getRange(-1, source.length + 1) : getRange(0, source.length);

    const items = indices.map(i => ({
      text: source[(i + source.length) % source.length].text,
    }));

    return items.reduce(
      (acc, item) =>
        `${acc}${templates.getHighlightItem({
          height: itemHeight,
          text: item.text,
        })}`,
      ''
    );
  },
};

export default templates;
