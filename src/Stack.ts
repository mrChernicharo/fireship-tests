export default class Stack {
  top: number;
  items: any;
  peek: any;
  bottom: any;
  length: number;

  constructor() {
    this.top = -1;
    this.items = {};
    [this.peek, this.bottom] = [null, null];
    this.length = 0;
  }

  push(item: any) {
    this.top += 1;
    this.length += 1;
    this.peek = item;
    this.items[this.top] = item;
    this.bottom = this.items[0];
    return item;
  }
  pop() {
    const popped = this.items[this.top];
    delete this.items[this.top];

    this.top -= 1;
    this.length -= 1;
    this.peek = this.length > 1 ? this.items[this.top] : null;
    this.bottom = this.length > 1 ? this.bottom : null;
    return popped;
  }
}
