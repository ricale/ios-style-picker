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
};

export default templates;
