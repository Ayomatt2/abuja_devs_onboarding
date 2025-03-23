exports.reverseString = function(s) {
    // function reverseString(s) {
    let reversedString = "";
    for (let i = 0; i < s.length; i++) {
        reversedString = s[i] + reversedString;
    }
    return reversedString;

  };
  
  exports.isPalindrome = function(s) {
    // function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Skip non-alphanumeric characters
        while (left < right && !isAlphanumeric(s[left])) {
            left++;
        }
        while (left < right && !isAlphanumeric(s[right])) {
            right--;
        }

        // Compare characters
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }
    return true;
}

function isAlphanumeric(char) {
    return /^[a-z0-9]+$/i.test(char);

  };
  
  exports.fibonacci = function(n) {
    // function fibonacci(n) {
    if (n < 0) {
        return null;
    } else if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b;

  };
  
  exports.factorial = function(n) {
    // function factorial(n) {
    if (n < 0) {
        return null; // Return null for negative inputs
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;

  };
  
  exports.sumArray = function(arr) {
    // function sumArray(arr) {
    // Return 0 for empty arrays
    if (arr.length === 0) {
        return 0;
    }

    let sum = 0;

    // Loop through the array and sum the elements
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;

  };
  
  exports.maxArray = function(arr) {
    //function findMax(arr) {
    if (arr.length === 0) {
        return undefined; // Return undefined for empty arrays
    }
    
    let max = arr[0]; // Initialize max with the first element

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Update max if current element is greater
        }
    }

    return max; // Return the maximum value found

  };
  
  exports.mergeSortedArrays = function(arr1, arr2) {
    // def merge_sorted_arrays(arr1, arr2):
    merged_array = []
    i, j = 0, 0
    
    # Traverse both arrays
    while i < len(arr1) and j < len(arr2):
        if arr1[i] < arr2[j]:
            merged_array.append(arr1[i])
            i += 1
        else:
            merged_array.append(arr2[j])
            j += 1
            
    # If there are remaining elements in arr1
    while i < len(arr1):
        merged_array.append(arr1[i])
        i += 1
    
    # If there are remaining elements in arr2
    while j < len(arr2):
        merged_array.append(arr2[j])
        j += 1
    
    return merged_array
  };
  
  exports.uniqueArray = function(arr) {
    // function removeDuplicates(arr) {
    const uniqueArr = [];
    for (const item of arr) {
        if (!uniqueArr.includes(item)) {
            uniqueArr.push(item);
        }
    }
    return uniqueArr;


  };
  
  exports.countVowels = function(s) {
    // function countVowels(s) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let char of s) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;

  };
  
  exports.evenOrOdd = function(n) {
    //function checkEvenOdd(n) {
    return n % 2 === 0 ? "even" : "odd";

  };