class Stack {
  top;
  items;
  peek;
  bottom;
  length;

  constructor() {
    this.top = -1;
    this.items = {};
    [this.peek, this.bottom] = [null, null];
    this.length = 0;
  }

  push(item) {
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

describe("My Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("is created empty", () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it("can push to the top", () => {
    stack.push("🌵");

    expect(stack.top).toBe(0);
    expect(stack.peek).toBe("🌵");
    expect(stack.items[0]).toEqual("🌵");
  });

  it("can push multiple items", () => {
    for (let i of [1, 2, 3, 4, 5]) stack.push(+Math.random() * 10);

    expect(stack.length).toBe(5);
    expect(stack.peek).toBeDefined();
    expect(typeof stack.items[4]).toBe("number");
    expect(stack.items[5]).toBeUndefined();
  });

  it("can pop off", () => {
    const fruits = ["🍐", "🍎", "🍉", "🍌"];
    for (let fruit of fruits) stack.push(fruit);

    expect(stack.peek).toBe("🍌");
    expect(stack.top).toBe(3);

    stack.pop();

    expect(stack.peek).toBe("🍉");
    expect(stack.top).toBe(2);
    expect(stack.length).toBe(3);

    stack.pop();
    stack.pop();
    stack.pop();

    expect(stack.peek).toBe(null);
    expect(stack.bottom).toBe(null);
    expect(stack.length).toBe(0);
    expect(stack.top).toBe(-1);
  });
});
