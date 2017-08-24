import {FormControl, IFormControl} from './basics/FormControl';
import {FormEncType} from './types/FormEnctype';
import {FormTarget} from './types/FormTarget';

export type ButtonType =
  'submit'
  | 'reset'
  | 'button'
  | 'menu';

export interface IButton<T> extends IFormControl, HTMLButtonElement {
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

export abstract class Button extends FormControl<IButton<HTMLButtonElement>> implements IButton<Button> {
  protected _nativeElement: HTMLButtonElement;

  public constructor() {
    super();

    const slot = document.createElement('slot');
    this._nativeElement = document.createElement('button');
    this._nativeElement.appendChild(slot);
    this.shadowRoot!.appendChild(this._nativeElement);
  }

  /**
   * The URI of a program that processes the information submitted by the button. If specified, it overrides the action attribute of the
   * button's form owner.
   * @type {string}
   */
  public get formAction(): string {
    return this._nativeElement.formAction;
  }

  public set formAction(value: string) {
    this.setAttribute('formaction', value);
    this._nativeElement.formAction = value;
  }

  /**
   * If the button is a submit button, this attribute specifies the type of content that is used to submit the form to the server.
   * Possible values are:
   *   * `application/x-www-form-urlencoded`: The default value if the attribute is not specified.
   *   * `multipart/form-data`: Use this value if you are using an <input> element with the type attribute set to file.
   *   * `text/plain`
   * If this attribute is specified, it overrides the `enctype` attribute of the button's form owner.
   * @type {string}
   */
  public get formEnctype(): FormEncType {
    return (this._nativeElement.formEnctype as FormEncType);
  }

  public set formEnctype(value: FormEncType) {
    this.setAttribute('formenctype', value);
    this._nativeElement.formEnctype = value;
  }

  /**
   * If the button is a submit button, this attribute specifies the HTTP method that the browser uses to submit the form. Possible values
   * are:
   *   * post: The data from the form is included in the body of the form and is sent to the server.
   *   * get: The data from the form are appended to the form attribute URI, with a '?' as a separator, and the resulting URI is sent
   *          to the server. Use this method when the form has no side-effects and contains only ASCII characters.
   * If specified, this attribute overrides the method attribute of the button's form owner.
   * @type {string}
   */
  public get formMethod(): string {
    return this._nativeElement.formMethod;
  }

  public set formMethod(value: string) {
    this.setAttribute('formmethod', value);
    this._nativeElement.formMethod = value;
  }

  /**
   * If the button is a submit button, this Boolean attribute specifies that the form is not to be validated when it is submitted. If this
   * attribute is specified, it overrides the novalidate attribute of the button's form owner.
   * @type {string}
   */
  public get formNoValidate(): string {
    return this._nativeElement.formNoValidate;
  }

  public set formNoValidate(value: string) {
    this.setAttribute('formnovalidate', value);
    this._nativeElement.formNoValidate = value;
  }

  /**
   * If the button is a submit button, this attribute is a name or keyword indicating where to display the response that is received
   * after submitting the form. This is a name of, or keyword for, a browsing context (for example, tab, window, or inline frame). If
   * this attribute is specified, it overrides the target attribute of the button's form owner. The following keywords have special
   * meanings:
   *   * `_self`:   Load the response into the same browsing context as the current one. This value is the default if the attribute is not
   *                specified.
   *   * `_blank`:  Load the response into a new unnamed browsing context.
   *   * `_parent`: Load the response into the parent browsing context of the current one. If there is no parent, this option behaves the
   *                same way as `_self`.
   *   * `_top`:    Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the
   *                current one, and has no parent). If there is no parent, this option behaves the same way as _self.
   * @type {string}
   */
  public get formTarget(): FormTarget {
    return (this._nativeElement.formTarget as FormTarget);
  }

  public set formTarget(value: FormTarget) {
    this.setAttribute('formtarget', value);
    this._nativeElement.formTarget = value;
  }

  /**
   * The type of the button. Possible values are:
   *   * `submit`: The button submits the form data to the server. This is the default if the attribute is not specified, or if the
   *               attribute is dynamically changed to an empty or invalid value.
   *   * `reset`:  The button resets all the controls to their initial values.
   *   * `button`: The button has no default behavior. It can have client-side scripts associated with the element's events, which are
   *               triggered when the events occur.
   *   * `menu`:   The button opens a popup menu defined via its designated <menu> element.
   * @type {string}
   */
  public get type(): ButtonType {
    return (this._nativeElement.type as ButtonType);
  }

  public set type(value: ButtonType) {
    this.setAttribute('type', value);
    this._nativeElement.type = value;
  }
}
