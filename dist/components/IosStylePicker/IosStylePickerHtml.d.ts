declare type IosStylePickerHtmlOptions = {
    container: HTMLElement;
    isInfinite: boolean;
    wheelCount: number;
    source: {
        text: string;
    }[];
    itemAngle: number;
    itemHeight: number;
    radius: number;
};
declare class IosStylePickerHtml {
    private _container;
    private _optionList;
    private _optionItems;
    private _highlightList;
    private _source;
    private _isInfinite;
    private wheelCount;
    private itemAngle;
    private itemHeight;
    private radius;
    constructor({ container, source, isInfinite, wheelCount, itemAngle, itemHeight, radius, }: IosStylePickerHtmlOptions);
    _getOptionItems(): string;
    _getHighlightItems(): string;
    scroll(scrollCount: number): void;
    addEventListener(eventName: 'touchstart' | 'touchmove' | 'touchend', listener: (evt: TouchEvent) => any): void;
    removeEventListener(eventName: 'touchstart' | 'touchmove' | 'touchend', listener: (evt: TouchEvent) => any): void;
    equalOrContains(target: EventTarget | null): boolean;
    clear(): void;
    get container(): HTMLElement;
}
export default IosStylePickerHtml;
