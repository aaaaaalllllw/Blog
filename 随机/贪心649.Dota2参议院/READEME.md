## Dota2 参议院

示例输入:'RRDDD'，执行过程应该是什么样的?

- 第一轮:senate[0]的 R 消灭 senate[2]的 D，senate[1]的 R 消灭 senate[3]的 D，senate[4]的
  D 消灭 senate[0]的 D,此时只剩'RD'
- 第二轮:senate[0]的 R 消失 senate[1]的 D，第二轮结束
- 第三轮：只有 R 了，R 胜利

## 思路

**那么每一轮消除的策略是什么**

**所以消灭的策略是，尽量消灭自己后面的对手，因为前面的对手已经使用过权利了，而后序的对手依然
可以使用权利消灭自己的同伴**

## 回顾贪心

贪心算法一般分为如下四步

- 将问题分解为若干问题
- 找出合适的贪心策略
- 求解每个子问题的最优解
- 将局部最优解堆叠成全局最优

局部最优:有一次权利机会，就消灭自己后面的对手。全局最优:为自己的阵营赢得最大的利益

flag++说明前面有 R
flag--说明前面有 L

senate[i]=0,赋值为 0，表示此位议员已经丧失战斗了

```js
var predictPartyVictory = function (senateStr) {
	// R = true表示本轮循环结束后，字符串里依然有R;D同理。
	let R = true,
		D = true;
	// 当flag大于0时，R在D前出现，R可以消灭D。当flag小于0时，D在R前出现，D可以消灭R
	let flag = 0;
	let senate = senateStr.split("");
	while (R && D) {
		// 一旦R或者D为false，就结束循环，说明本轮结束后只剩下R或者D了
		R = false;
		D = false;
		for (let i = 0; i < senate.length; i++) {
			if (senate[i] === "R") {
				if (flag < 0) senate[i] = 0; // 消灭R，R此时为false
				else R = true; // 如果没被消灭，本轮循环结束有R
				flag++;
			}
			if (senate[i] === "D") {
				if (flag > 0) senate[i] = 0;
				else D = true;
				flag--;
			}
		}
	}
	// 循环结束之后，R和D只能有一个为true
	return R ? "Radiant" : "Dire";
};
```
