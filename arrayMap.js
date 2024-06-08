function checkSubarray(arr, targetSum) {
    let currentSum = 0;
    let start = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];

        while (currentSum > targetSum && start <= end) {
            currentSum -= arr[start];
            start++;
        }

        if (currentSum === targetSum) {
            return true;
        }
    }

    return false;
}

const arr = [4, 2, 7, 1, 9, 5];
const targetSum = 14;
console.log(checkSubarray(arr, targetSum)); // Output: true
