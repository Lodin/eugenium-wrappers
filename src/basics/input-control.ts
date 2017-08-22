import {FormControl, IFormControl} from './form-control';

export type SelectionDirection = 'forward' | 'backward' | 'none';

export interface IInputControl extends IFormControl {
  maxLength: number;
  minLength: number;
  placeholder: string;
  readOnly: boolean;
  required: boolean;
  selectionDirection: SelectionDirection;
  selectionEnd: number;
  selectionStart: number;
  readonly type: string;
  select(): void;
  setSelectionRange(start?: number, end?: number, direction?: string): void;
}

export abstract class InputControl<T extends IInputControl> extends FormControl<T> implements IInputControl {
  /**
   * The maximum number of characters (Unicode code points) that the user can enter. If this value isn't specified, the user can enter an
   * unlimited number of characters.
   * @type {number}
   */
  public get maxLength(): number {
    return this._nativeElement.maxLength;
  }

  public set maxLength(value: number) {
    this.setAttribute('maxLength', value.toString());
    this._nativeElement.maxLength = value;
  }

  /**
   * The minimum number of characters (Unicode code points) required that the user should enter.
   * @type {number}
   */
  public get minLength(): number {
    return this._nativeElement.minLength;
  }

  public set minLength(value: number) {
    this.setAttribute('minLength', value.toString());
    this._nativeElement.minLength = value;
  }

  /**
   * A hint to the user of what can be entered in the control. Carriage returns or line-feeds within the placeholder text must be treated
   * as line breaks when rendering the hint.
   * @type {string}
   */
  public get placeholder(): string {
    return this.getAttribute('placeholder') || '';
  }

  public set placeholder(value: string) {
    this.setAttribute('placeholder', value);
    this._nativeElement.placeholder = value;
  }

  /**
   * Indicates that the user cannot modify the value of the control. Unlike the disabled attribute, the readonly attribute does not prevent
   * the user from clicking or selecting in the control. The value of a read-only control is still submitted with the form.
   * @type {boolean}
   */
  public get readOnly(): boolean {
    return this.hasAttribute('readonly');
  }

  public set readOnly(value: boolean) {
    this.setBooleanAttribute('readonly', value);
    this._nativeElement.readOnly = value;
  }

  /**
   * Specifies that the user must fill in a value before submitting a form.
   * @type {boolean}
   */
  public get required(): boolean {
    return this.hasAttribute('required');
  }

  public set required(value: boolean) {
    this.setBooleanAttribute('required', value);
    this._nativeElement.required = value;
  }

  public get selectionDirection(): SelectionDirection {
    return (this._nativeElement as any).selectionDirection;
  }

  public set selectionDirection(value: SelectionDirection) {
    (this._nativeElement as any).selectionDirection = value;
  }

  /**
   * The index to the last character in the current selection. If there's no selection, the value is the index of the character following
   * the position of the text entry cursor.
   * @type {number}
   */
  public get selectionEnd(): number {
    return this._nativeElement.selectionEnd;
  }

  public set selectionEnd(value: number) {
    this._nativeElement.selectionEnd = value;
  }

  /**
   * The index to the first character in the current selection. If there's no selection, this value is the index of the character following
   * the position of the text entry cursor.
   * @type {number}
   */
  public get selectionStart(): number {
    return this._nativeElement.selectionStart;
  }

  public set selectionStart(value: number) {
    this._nativeElement.selectionStart = value;
  }

  /**
   * Retrieves the type of control.
   * @type {string}
   */
  public get type(): string {
    return this._nativeElement.type;
  }

  /**
   * Highlights the input area of a form element.
   */
  public select(): void {
    this._nativeElement.select();
  }

  /**
   * Selects a range of text, and sets selectionStart and selectionEnd. If either argument is greater than the length of the value, it is
   * treated as pointing to the end of the value. If end is less than start, then both are treated as the value of end.
   * @param start The offset into the text field for the start of the selection.
   * @param end The offset into the text field for the end of the selection.
   * @param direction
   */
  public setSelectionRange(start?: number, end?: number, direction?: SelectionDirection): void {
    this._nativeElement.setSelectionRange(start, end, direction);
  }
}
