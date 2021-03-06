import {IInputControl, InputControl} from './basics/InputControl';

export type WrapType =
  'hard'
  |'soft'
  |'off';

export interface ITextArea<T> extends IInputControl, HTMLTextAreaElement {
  setSelectionRange(start?: number, end?: number, direction?: string): void;

  addEventListener<K extends keyof HTMLElementEventMap>(
    type: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => any,
    useCapture?: boolean,
  ): void;

  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    useCapture?: boolean,
  ): void;
}

export abstract class TextArea extends InputControl<ITextArea<HTMLTextAreaElement>> implements ITextArea<TextArea> {
  protected _nativeElement: ITextArea<HTMLTextAreaElement>;
  private _observer: MutationObserver;

  public constructor() {
    super();
    this._nativeElement = document.createElement('textarea') as ITextArea<HTMLTextAreaElement>;
    this.shadowRoot!.appendChild(this._nativeElement);

    this._observer = new MutationObserver(([mutation]) => {
      this._nativeElement.textContent = mutation.target.textContent;
    });
  }

  /**
   * The visible width of the text control, in average character widths. If it is specified, it must be a positive integer. If it is not
   * specified, the default value is 20.
   * @type {number}
   */
  public get cols(): number {
    return this._nativeElement.cols;
  }

  public set cols(value: number) {
    this.setAttribute('cols', value.toString());
    this._nativeElement.cols = value;
  }

  /**
   * Returns / Sets the control's default value, which behaves like the Node.textContent property.
   * @type {string}
   */
  public get defaultValue(): string {
    return this._nativeElement.defaultValue;
  }

  public set defaultValue(value: string) {
    this._nativeElement.defaultValue = value;
  }

  /**
   * The number of visible text lines for the control.
   * @type {number}
   */
  public get rows(): number {
    return this._nativeElement.rows;
  }

  public set rows(value: number) {
    this.setAttribute('rows', value.toString());
    this._nativeElement.rows = value;
  }

  /**
   * Indicates how the control wraps text. Possible values are:
   *   * `hard`: The browser automatically inserts line breaks (CR+LF) so that each line has no more than the width of the control; the cols
   *             attribute must be specified.
   *   * `soft`: The browser ensures that all line breaks in the value consist of a CR+LF pair, but does not insert any additional line
   *             breaks.
   *   * `off`:  Like soft but changes appearance to white-space: pre so line segments exceeding cols are not wrapped and area becomes
   *             horizontally scrollable.
   * @type {string}
   */
  public get wrap(): WrapType {
    return (this._nativeElement.wrap as WrapType);
  }

  public set wrap(value: WrapType) {
    this.setAttribute('wrap', value);
    this._nativeElement.wrap = value;
  }

  public connectedCallback(): void {
    this._nativeElement.textContent = this.textContent;
    this._observer.observe(this, {childList: true});
  }
}
