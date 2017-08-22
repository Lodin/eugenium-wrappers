export abstract class Base<T extends HTMLElement> extends HTMLElement {
  protected abstract _nativeElement: T;

  protected setBooleanAttribute(name: string, value: boolean): void {
    if (value) {
      this.setAttribute(name, '');
    } else {
      this.removeAttribute(name);
    }
  }
}
