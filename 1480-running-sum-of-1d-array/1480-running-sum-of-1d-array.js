/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  
    const ans = [nums[0]];

    for(let i=1, j=nums.length; i < j; i++) {
        ans.push(ans[i-1] + nums[i]);
    }
        
    return ans;
     
};