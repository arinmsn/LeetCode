/*
    Given an array of integers, return indices of the two numbers such that they add up to a specific target.

    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    Example:

    Given nums = [2, 7, 11, 15], target = 9,

    Because nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1].

    var twoSum = function(nums, target){
        // Your code goes here.
    };

*/

/*  Scratch Paper

Given:  nums[int]
        target: [int]

Return: Array of indices (adding to target)

Inefficient Approach
O(n^2)

for Each num, index in nums
    for Each num2, inddex2 in nums
        if num + num2 = target
            return [index, index2]
        end
    end
end

If we can keep track of numbers we have already used,
maybe we can cut down on the for-loop and make our 
solution more efficient

previousValues = {}
for Each num, index in nums
    neededValue = target - nums
    // Have we encountered this number before?
    index 2 = previousValues[neededValue]
    if index !== null
        return [index, index]
    else 
        previousValues[nums] = index


*/

var twoSum = function(nums, target) {
  const previousValues = {};
  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    const neededValue = target - currentNumber;
    // Have we used this number before?
    const index2 = previousValues[neededValue];
    if (index2 != null) {
      return [index2, index];
    } else {
      previousValues[currentNumber] = i;
    }
  }
};
