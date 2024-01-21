//动态规划
//c int long char 
//变量有3种类型 var let const
var climbStairs = function (n) {
    let dp = new Array(n).fill(0);
    //dp[i]表示爬到i+1阶有几种方法；
    dp[0] = 1;
    dp[1] = 2;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n - 1];
};
//    _
//   _
//  _
// _ 
//你在这里
//[0,1,2,3,5]
// n-1 跳一层 和 n-2 跳两层
// f(n) = f(n-1) + f(n-2) //递推公式
// 初值？？n=0 f(n) = 0 ,f(1) = 1,f(2) = 2;

climbStairs(4)
//递归
//求阶层
var solveJC = function (n) {
   if(n==1){
     return 1;
   }
   return solveJC(n-1)*n;
}
console.log(solveJC(5));
//f(n) = f(n-1)*n
//f(1) = 1
var momo = new Map(); 
var climbStairs = function (n) {
    if(momo.has(n)){
        return momo.get(n);
    }
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    if(n==2){
        return 2;
    }
    var val = climbStairs(n-1)+climbStairs(n-2);
    momo.set(n,val)
    return val;
};
