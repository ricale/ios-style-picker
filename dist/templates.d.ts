declare type GetOptionItemOptions = {
    top: number;
    height: number;
    rotateX: number;
    radius: number;
    index: number;
    text: string;
};
declare type GetHighlightItemOptions = {
    height: number;
    text: string;
};
declare const templates: {
    cn: {
        wrapper: string;
        optionList: string;
        optionItem: string;
        highlight: string;
        highlightList: string;
        highlightItem: string;
    };
    getBase: (radius: number, itemHeight: number) => string;
    getOptionItem: ({ top, height, rotateX, radius, index, text }: GetOptionItemOptions) => string;
    getHighlightItem: ({ height, text }: GetHighlightItemOptions) => string;
};
export default templates;
