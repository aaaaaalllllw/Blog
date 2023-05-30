//动态规划确定五部曲

/***
 * 1.确定dp数组以及下标含义，dp[i][j]，旧数组变成新数组步骤
 * 2.确定递推公式，如果当前pre[i-1]==now[i-1],dp[i][j]==dp[i-1][j-1]
 *                如果pre[i-1]!=now[i-1],要不是插入（dp[i][j-1] + 1），删除(dp[i-1][j] + 1)，修改dp[i-1][j-1]+1
 * 3.dp初始化，now多长，pre=0就需要操作多少次；now=0，pre多长就要删除多长 
 * 4.方向从左到右，从上到下
 * 5.举例子
*/


//在这个函数中，我们根据 dp 数组的值，逆推出从 pre 转换成 now 的具体操作。如果 dp[i][j] 的值是由 dp[i-1][j] 转移而来，那么说明我们需要删除字符 pre[i-1]，以使得 pre 的前缀变为 now 的前缀。因此，我们在返回字符串中加入 删除pre[i-1] 的操作
function compareStrings(pre, now) {
    let m = pre.length, n = now.length
    let dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0))
    for (let i = 0; i <= m; i++){
        dp[i][0]=i
    }
    for (let j = 0; j <= n; j++){
        dp[0][j]=j
    }

    for (let i = 1; i <= m; i++){
        for (let j = 1; j <= n; j++){
            if (pre[i - 1] === now[j - 1]) {
                dp[i][j]=dp[i-1][j-1]
            } else {
                dp[i][j]=Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1])+1
            }

        }
    }

    //需要从后往前推导
    let i = m, j = n,diff=''
    while (i > 0 || j > 0) {
        if (i >= 0 && dp[i][j] === dp[i - 1][j] + 1) {
            diff = `删除 ${pre[i - 1]},${diff}`
            i--
        } else if (dp[i][j] === dp[i][j - 1] + 1) {
            diff = `添加${now[j - 1]},${diff}`
            j--
        } else if (dp[i][j] == dp[i - 1][j - 1] + 1) {
            diff = `修改${pre[i - 1]}为${now[j - 1]},${diff}`
            i--
            j--
        }
        else {
            i--
            j--
        }
    }
     return diff
   
}
   

const pre = '11123'
const now = '11241'
console.log(compareStrings(pre,now))