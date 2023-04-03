type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default class Queue<T> {
  public length: number;
  private tail?: Node<T>;
  private head?: Node<T>;
  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }
  enqueue(item: T) {
    this.length++;
    const node = {
      value: item,
    };
    if (!this.tail) {
      this.head = this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }
  deque(): T | undefined {
    if (!this.head) {
      return;
    }
    const head = this.head;
    this.head = head.next;
    head.next = undefined;
    return head.value;
  }
  peek(): T | undefined {
    return this.head?.value;
  }
}
