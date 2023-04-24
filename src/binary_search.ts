// 二分查找，list必须是递增排序的，原理是每次找最中间的元素来对比，
// 如果不是就二分list重新查找 他的running time是 log(n)
function binary_search(list: number[], target: number) {
  let lo = 0;
  let hi = list.length;

  while (lo < hi) {
    const m = Math.floor(lo + (hi - lo) / 2);
    console.log(`test:>lo=${lo},hi=${hi},m=${m}`);
    let v = list[m];
    if (v === target) {
      return true;
    }
    if (target < v) {
      hi = m;
      continue;
    }
    if (target > v) {
      lo = m;
      continue;
    }
  }

  return false;
}

console.log(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -1));
