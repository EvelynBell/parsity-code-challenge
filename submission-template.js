const findSum = function(array) {
    var sum = array.reduce(function (sum, number) {
        return sum + number;
    });
    return sum;
};
  
const findFrequency = function(array) {
    var occurrences = [];
    var frequency = [];

    array.forEach(function (str) {
        var hasOccurred = false;

        for(let i = 0; i < occurrences.length; i++) {
            if(occurrences[i] === str) {
                frequency[i]++;
                hasOccurred = true;
            }
        }
        if(hasOccurred === false) {
            occurrences.push(str);
            frequency.push(1);
        }
    })

    var max = frequency[0];
    var min = frequency[0];

    for(let i = 1; i < frequency.length; i++) {
        if(frequency[i] > max) {
            max = frequency[i];
        } else if(frequency[i] < min) {
            min = frequency[i];
        }
    }

    var output = {most: occurrences[frequency.indexOf(max)], least: occurrences[frequency.indexOf(min)]};
    return output;
};

  
const isPalindrome = function(str) {
    var minIndex = 0;
    var maxIndex = str.length - 1;
    var strLower = str.toLowerCase();

    while(minIndex < maxIndex) {
        if(strLower.charAt(minIndex) !== strLower.charAt(maxIndex)) {
            return false;
        } else {
            minIndex++;
            maxIndex--;
        }
    }
    return true;
};
  
const largestPair = function(array) {
    var largestProduct = 0;

    for(let i = 0; i < array.length; i++) {
        var currentProduct = array[i] * array[i + 1];
        if(currentProduct > largestProduct) {
            largestProduct = currentProduct;
        }
    }
    return largestProduct;
};
  
const removeParenth = function(str) {
    var firstHalf = str.slice(0, str.indexOf('('));
    var secondHalf = str.slice(str.indexOf(')') + 1);

    return firstHalf.concat('', secondHalf);
};
  
const scoreScrabble = function(str) {
    var strLower = str.toLowerCase();
    var score = 0;
    var scrabbleValues = [
        ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
        ['d', 'g'],
        ['b', 'c', 'm', 'p'],
        ['f', 'h', 'v', 'w', 'y'],
        ['k'],
        ['j', 'x'],
        ['q', 'z']
    ];

    for(let i = 0; i < strLower.length; i++) {
        for(let j = 0; j < scrabbleValues.length; j++) {
            if(scrabbleValues[j].includes(strLower.charAt(i))) {
                if(j <= 4) {
                    score += j + 1;
                } else if(j === 5) {
                    score += j + 3;
                } else if(j === 6) {
                    score += j + 4;
                }
            }
        }
    }

    return score;
};
