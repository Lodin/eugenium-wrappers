export abstract class Base extends HTMLElement {
  protected setBooleanAttribute(name: string, value: boolean): void {
    if (value) {
      this.setAttribute(name, '');
    } else {
      this.removeAttribute(name);
    }
  }
}
