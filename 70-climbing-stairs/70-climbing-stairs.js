/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    if (n <= 1) {
        return n;
    }
    
    const cnt = Array(n+1);
    
    cnt[0] = 1;
    cnt[1] = 1;    
    
    for (let i=2; i < n+1; i++) {
        cnt[i] = cnt[i-1] + cnt[i-2];
    }
    
    return cnt[n];
    
};