## 01 背包

有 n 件物品和一个最多能背重量为 w 的背包。第 i 件物品的重量 weight[i],
得到的价值是 value[i].每件物品只能用一次，
求解将哪些物品装入背包的物品价值总和最大。
![这是图片](./1.jpg)

## 二维 dp 数组 01 背包

1. 确定 dp 数组以及下标的含义

对于背包问题，有一种写法，是使用二维数组，即 dp[i][j]**表示从下标为[0-i]的物品里任意取，放进容易为 j 的背包，价值总和最大是多少?**
![这是图片](./2.png)

**要时刻记着这个 dp 数组的含义，下面的一些步骤都围绕这 dp 数组的含义进行的，如果哪里看懵了，就来回顾一下 i 代表什么，j 又代表什么。**

2. 确定递推公式

- 不放物品:由 dp[i-1][j]推出,即背包容量为 j，里面不放物品 i 的最大价值，此时 dp[i][j]就是 dp[i-1][j]
  (其实就是当物品的重量大于背包 j 的重量时，物品 i 无法放进背包中，所以背包内的价值依然和前面相同)

- 放物品:由 dp[i-1]j-weight[i]]推出，dp[i-1]j-weight[i]]为背包容易 j-weight[i]的时候不放物品 i 的最大价值，那么 dp[i-1]j-weight[i]]+value[i](物品i的价值)，就是背包物品 i 得到最大的价值

**这个 value[i],表示要添加第 i 个物品，能加入 dp[i-1]j-weight[i]]+value[i]，说明此时 j 能放入 i 和 i-1 之前的重量**
j-weight[i]就是说明要纳入 i，而且能有空间放 weight[i]

dp[i][j]=Math.max(dp[i-1][j],dp[i-1]j-weight[i]]+value[i])

3. dp 数组如何初始化

**关于初始化，一定要和 dp 数组定义吻合,否则递推公式就会越来越乱**

- j 重量为 0，所有 dp[i][0],初始化为 0;
  ![这是图片](./3.png)

- 状态转移方程 dp[i][j] = max(dp[i - 1][j], dp[i - 1]j - weight[i]] + value[i]);**可以看出 i 是由 i-1 推导出来，那么 i 为 0 的时候就一定要初始化。**
  dp[0][j]即:i 为 0，存放编号 0 的物品的时候，各个容量的背包能存放的最大价值

dp[0][j]，即：i 为 0，存放编号 0 的物品的时候，各个容量的背包所能存放的最大价值。

那么很明显当 j < weight[0]的时候，dp[0][j] 应该是 0，因为背包容量比编号 0 的物品重量还小。

当 j >= weight[0]时，dp[0][j] 应该是 value[0]，因为背包容量放足够放编号 0 物品。

```js
for (let i = 0; j < weight[0]; j++) {
  dp[0][j] = 0;
}
//正序遍历
for (let j = weight[0]; j <= bagweight; j++) {
  dp[0][j] = value[0];
}
```

![这是图片](./4.png)

剩余的全部初始化为 0
![这是图片](./5.jpg)

4. 遍历顺序

先遍历物品还是先遍历背包重量?
都可以

j<=bagweight 是背包能承受最大的重量，每次能承受的重量+1，遍历的终点就是背包最大能
承受的重量

每次遍历 j，都是看看能不能放下 i；i=0 这行已经被初始化了
如果没有到 i，
能放进去的大小不够放入 weight[i]就一直 dp[i][j]等于没有放入它的时候
能放入看看是，没有放入 i 的 i-1 大，还是丢弃 i-1，放入 i 的价值大，进行比较

## 代码

```js
function testWeightBagProblem(weight, value, size) {
  // 定义 dp 数组
  const len = weight.length,
    dp = Array(len)
      .fill()
      .map(() => Array(size + 1).fill(0));

  // 初始化
  for (let j = weight[0]; j <= size; j++) {
    dp[0][j] = value[0];
  }

  // weight 数组的长度len 就是物品个数
  for (let i = 1; i < len; i++) {
    // 遍历物品
    for (let j = 0; j <= size; j++) {
      // 遍历背包容量
      if (j < weight[i]) dp[i][j] = dp[i - 1][j];
      else
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
    }
  }

  console.table(dp);

  return dp[len - 1][size];
}

function test() {
  console.log(testWeightBagProblem([1, 3, 4], [15, 20, 30], 5));
}

test();
```

## 一维 dp 数组(滚动数组)

**其实可以发现如果把 dp[i-1]那一层拷贝到 dp[i]上，表达式完全是可以：dp[i][j]=max(dp[i][j],dp[i]j-weight[i]]+value[i])**

与其把 dp[i-1]这一层拷贝到 dp[i]，不如只用一个一维数组，只用 dp[j](一维数组，也可以理解是一个滚动数组)。
这就是滚动数组的由来，需要满足的条件是上一层可以重复利用，直接拷贝到当前层。

动规五部曲分析

1. 确定 dp 数组的定义
   在一维数组中，dp[j]表示:容量 j 的背包，所背的物品价值可以最大为 dp[j]
2. 一维数组 dp 的递推公式
   此时 dp[j]有两个选择，一个是取自己 dp[j]相当于二维 dp 数组中的 dp[i-1][j],即不放物品;一个是取 dp[j-weight[i]]+value[i],即放物品
   ```js
   dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
   ```
3. 一维数组 dp 数组如何初始化
   dp[j]表示:容量为 j 的背包，所背包的物品价值可以最大为 dp[j],那么 dp[0]=0

4. 遍历顺序，从背包重量最大能承受到 0
   倒序遍历是为了保证物品只被放入一次
   如果正序遍历

dp[1] = dp[1 - weight[0]] + value[0] = 15

dp[2] = dp[2 - weight[0]] + value[0] = 30

此时 dp[2]就已经是 30 了，意味着物品 0，被放入了两次，所以不能正序遍历。

为什么倒序遍历，就可以保证物品只放入一次呢？

倒序就是先算 dp[2]

dp[2] = dp[2 - weight[0]] + value[0] = 15 （dp 数组已经都初始化为 0）

dp[1] = dp[1 - weight[0]] + value[0] = 15

所以从后往前循环，每次取得状态不会和之前取得状态重合，这样每种物品就只取一次了。

那么问题又来了，为什么二维 dp 数组历的时候不用倒序呢？

因为对于二维 dp，dp[i][j]都是通过上一层即 dp[i - 1][j]计算而来，本层的 dp[i][j]并不会被覆盖！

（如何这里读不懂，大家就要动手试一试了，空想还是不靠谱的，实践出真知！）

再来看看两个嵌套 for 循环的顺序，代码中是先遍历物品嵌套遍历背包容量，那可不可以先遍历背包容量嵌套遍历物品呢？

不可以！

因为一维 dp 的写法，背包容量一定是要倒序遍历（原因上面已经讲了），如果遍历背包容量放在上一层，那么每个 dp[j]就只会放入一个物品，即：背包里只放入了一个物品。

倒序遍历的原因是，本质上还是一个对二维数组的遍历，并且右下角的值依赖上一层左上角的值，因此需要保证左边的值仍然是上一层的，从右向左覆盖。

```js
function testWeightBagProblem(wight, value, size) {
  const len = wight.length,
    dp = Array(size + 1).fill(0);
  for (let i = 1; i <= len; i++) {
    for (let j = size; j >= wight[i - 1]; j--) {
      dp[j] = Math.max(dp[j], value[i - 1] + dp[j - wight[i - 1]]);
    }
  }
  return dp[size];
}

function test() {
  console.log(testWeightBagProblem([1, 3, 4, 5], [15, 20, 30, 55], 6));
}

test();
```
