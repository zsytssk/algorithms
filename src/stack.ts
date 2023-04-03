type Node<T> = {
  value: T;
  prev?: Node<T>;
};

export default class Stack<T> {
  public length: number;
  private head?: Node<T>;
  constructor() {
    this.head = undefined;
    this.length = 0;
  }
  push(item: T) {
    this.length++;
    const node = {
      value: item,
    } as Node<T>;
    if (!this.head) {
      this.head = node;
      return;
    }
    node.prev = this.head;
    this.head = node;
  }
  pop(): T | undefined {
    if (!this.head) {
      return;
    }
    const head = this.head;
    this.head = head.prev;
    head.prev = undefined;
    return head.value;
  }
  peek(): T | undefined {
    return this.head?.value;
  }
}
