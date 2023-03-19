function lastStoneWeightII(stones) {
  let sum = stones.reduce((s, n) => s + n);
  let target = Math.floor(sum / 2);
  let dp = new Array(target + 1).fill(0);
  for (let i = 0; i < stones.length; i++) {
    for (j = target; j >= stones[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
    }
  }
  return sum - dp[target] - dp[target];
}
