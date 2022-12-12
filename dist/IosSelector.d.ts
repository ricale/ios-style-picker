import easing from './easing';
declare type IosSelctorVariant = 'infinite' | 'normal';
export interface IosSelectorSourceItem {
    value: number;
    text: string;
}
export interface IosSelectorOptions {
    variant?: IosSelctorVariant;
    source: IosSelectorSourceItem[];
    onChange?: (selected: IosSelectorSourceItem) => void;
    count?: number;
    sensitivity?: number;
    value?: number;
}
declare class IosSelector {
    private variant;
    private source;
    private selected;
    private onChange?;
    private sensitivity;
    private wheelCount;
    private exceedA;
    private moveT;
    private moving;
    private el;
    private events;
    private itemHeight;
    private itemAngle;
    private radius;
    private scroll;
    private touchData;
    constructor(targetSelector: string, options: IosSelectorOptions);
    private _createEventListener;
    private _touchstart;
    private _touchmove;
    private _getInitV;
    private _touchend;
    private _create;
    private _moveTo;
    _animateMoveByInitV(initV: number): Promise<void>;
    _animateToScroll(initScroll: number, finalScroll: number, t: number, easingName?: keyof typeof easing): Promise<void> | undefined;
    private _stop;
    private _selectByScroll;
    updateSource(source: IosSelectorSourceItem[]): void;
    select(value: number): Promise<void>;
    destroy(): void;
}
export default IosSelector;
