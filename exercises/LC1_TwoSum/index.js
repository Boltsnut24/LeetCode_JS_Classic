// Given an array of integers, return an array of indices of the two numbers
// that add up to the target.
// You may assume that each input would have exactly one solution, and
// you may not use the same element twice.
// --- Examples
// twoSum([2,7,11,15], 9) --> [0,1]
// twoSum([3,5,4], 9) --> [1,2]

function twoSum(arr, target) {
  let visitedTable = {}; //object because lookup is O(1), array would be O(n)
                        //{2: 0, 7:1}
  let res = []; //this will store our answer

  for (let i = 0; i < arr.length; i++){
    let num = arr[i]
    const complement = target - num;

    if(visitedTable[complement] !== undefined){ //compare to undefined as 0 would fail if statement
      return [i, visitedTable[complement]]
    }

    visitedTable[num] = i; //add in key-value pair to hash table for each entry
  }

  //We know there is exactly 1 solution so conditional return if no solution is not required.
}

module.exports = twoSum;
