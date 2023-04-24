// 有两个一样的水晶球，检查它摔碎的高度, 最优的做法是什么
// y = (x² + n)/x;
// x = math.square(n); y有最小值 ? 为什么
function two_crystal_ball(breaks: boolean[]) {
  const jump_amount = Math.floor(Math.sqrt(breaks.length));

  let i = jump_amount;

  for (; i < breaks.length; i += jump_amount) {
    if (breaks[i]) {
      break;
    }
  }

  i -= jump_amount;
  for (let j = 0; j < jump_amount && i + j < breaks.length; ++j) {
    const cur = i + j;
    if (breaks[cur]) {
      return cur;
    }
  }

  return -1;
}
