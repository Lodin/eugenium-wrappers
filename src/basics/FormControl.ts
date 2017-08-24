import {Base} from './Base';

export interface IFormControl extends HTMLElement {
  autofocus: boolean;
  disabled: boolean;
  readonly form: HTMLFormElement;
  status: any;
  value: string;
  readonly validationMessage: string;
  readonly validity: ValidityState;
  readonly willValidate: boolean;
  checkValidity(): boolean;
  setCustomValidity(error: string): void;
}

export abstract class FormControl<T extends IFormControl> extends Base<T> implements IFormControl {
  /**
   * Lets you specify that a form control should have input focus when the page loads, unless the user overrides it, for example by typing
   * in a different control. Only one form-associated element in a document can have this attribute specified.
   * @type {boolean}
   */
  public get autofocus(): boolean {
    return this.hasAttribute('autofocus');
  }

  public set autofocus(value: boolean) {
    this.setBooleanAttribute('autofocus', value);
    this._nativeElement.autofocus = value;
  }

  /**
   * Indicates that the user cannot interact with the control. (If this attribute is not specified, the control inherits its setting
   * from the containing element, for example <fieldset>; if there is no containing element with the disabled attribute set, then the
   * control is enabled.)
   * @type {boolean}
   */
  public get disabled(): boolean {
    return this.hasAttribute('disabled');
  }

  public set disabled(value: boolean) {
    this.setBooleanAttribute('disabled', value);
    this._nativeElement.disabled = value;
  }

  /**
   * Indicates that the user cannot interact with the control. (If this attribute is not specified, the control inherits its setting
   * from the containing element, for example `<fieldset>`; if there is no containing element with the disabled attribute set, then the
   * control is enabled.)
   * @type {HTMLFormElement}
   */
  public get form(): HTMLFormElement {
    return this._nativeElement.form;
  }

  /**
   * The name of the control.
   * @type {string}
   */
  public get name(): string {
    return this.getAttribute('name') || '';
  }

  public set name(value: string) {
    this.setAttribute('name', value);
  }

  /**
   * Sets or retrieves the value indicating whether the control is selected.
   * @type {any}
   */
  public get status(): any {
    return this._nativeElement.status;
  }

  public set status(value: any) {
    this._nativeElement.status = value;
  }

  /**
   * Retrieves or sets the text in the entry field of the textArea element.
   */
  public get value(): string {
    return this._nativeElement.value;
  }

  public set value(value: string) {
    this.setAttribute('value', value);
    this._nativeElement.value = value;
  }

  /**
   * Returns a localized message that describes the validation constraints that the control does not satisfy (if any). This is the empty
   * string if the control is not a candidate for constraint validation (willValidate is false), or it satisfies its constraints.
   * @type {string}
   */
  public get validationMessage(): string {
    return this._nativeElement.validationMessage;
  }

  /**
   * Returns the validity states that this element is in.
   * @types {ValidityState}
   */
  public get validity(): ValidityState {
    return this._nativeElement.validity;
  }

  /**
   * Returns whether an element will successfully validate based on forms validation rules and constraints.
   */
  public get willValidate(): boolean {
    return this._nativeElement.willValidate;
  }

  /**
   * Returns false if the button is a candidate for constraint validation, and it does not satisfy its constraints. In this case, it also
   * fires an invalid event at the control. It returns true if the control is not a candidate for constraint validation, or if it satisfies
   * its constraints.
   * @returns {boolean}
   */
  public checkValidity(): boolean {
    return this._nativeElement.checkValidity();
  }
  /**
   * Sets a custom validity message for the element. If this message is not the empty string, then the element is suffering from a custom
   * validity error, and does not validate.
   * @param error Sets a custom error message that is displayed when a form is submitted.
   */
  public setCustomValidity(error: string): void {
    this._nativeElement.setCustomValidity(error);
  }
}
