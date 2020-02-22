//Two Sum

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length - 1; i++) {
  	if (target >= numbers[i]) {
  		let sumNum = target - numbers[i];
  		let arrRest = numbers.filter((num, ii) => {if (ii > i) return num});
  		let idx = arrRest.indexOf(sumNum) 
  		if (idx !== -1) return [i, idx + i + 1];
  	}
  }
}

//console.log(twoSum([1,2,3], 4));

console.log(twoSum([141, 394, 746, 202, 139, 112, 722, 268, 787, 518], 861));

// Another Solution

function twoSum(numbers, target) {
    for (var i = 0; i < numbers.length-1; i++) {
        for (var j = i+1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}
