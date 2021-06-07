import Stack from "../src/Stack";

describe("My Stack", () => {
  let stack: Stack;

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
    for (let _i of [1, 2, 3, 4, 5]) stack.push(+Math.random() * 10);

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
