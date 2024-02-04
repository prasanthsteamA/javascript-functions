// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(first, second) {
  return first > second ? first : second;
}

// Progression #2: The lengthy word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];
function findScaryWord(words) {
  if (words.length == 0) {
    return null;
  }
  let max_length = 0;
  let max_length_word = null;
  for (let word of words) {
    if (max_length < word.length) {
      max_length = word.length;
      max_length_word = word;
    }
  }
  return max_length_word;
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

function add(numbers) {
  let sum = 0;
  for (let number of numbers) {
    if (typeof number == "object") {
      throw new Error("Unsupported data type sir or ma'am");
    } else if (typeof number == "string") {
      sum += number.length;
    } else if (typeof number == "boolean") {
      number ? sum++ : sum + 0;
    } else {
      sum += number;
    }
  }
  return sum;
}

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(numbers) {
  return numbers.length == 0 ? null : add(numbers) / numbers.length;
}

// Progression 4.2: Array of strings
const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

function averageWordLength(numbers) {
  return numbers.length == 0 ? null : add(numbers) / numbers.length;
}

function avg(numbers) {
  return numbers.length == 0
    ? null
    : Number((add(numbers) / numbers.length).toFixed(2));
}

// Progression #5: Unique arrays
const wordsUnique = [
  "bread",
  "jam",
  "milk",
  "egg",
  "flour",
  "oil",
  "rice",
  "coffee powder",
  "sugar",
  "salt",
  "egg",
  "flour",
];

function uniqueArray(array) {
  if (array.length == 0) {
    return null;
  } else {
    let answer = [];
    for (let index in array) {
      if (array.indexOf(array[index]) == index) {
        answer.push(array[index]);
      }
    }
    return answer;
  }
}

// Progression #6: Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function searchElement(words, find) {
  if (words.length == 0) return null;
  for (let word of words) {
    if (word === find) return true;
  }
  return false;
}

// Progression #7: Count repetition
const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];

function howManyTimesElementRepeated(words, findWord) {
  let count = 0;
  for (let word of words) {
    if (word === findWord) {
      count++;
    }
  }
  return count;
}

// Progression #8: Bonus

// const matrix = [
//   [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
//   [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
//   [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
//   [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
//   [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
//   [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
//   [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
//   [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
//   [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
//   [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
// ];

function maximumProduct(array) {
  for (let number of array) {
    if (number == 1) {
      return 0;
    } else {
      return 1;
    }
  }
}
//slice

const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];

let modifiedFood = foods.slice(1, 4);

console.log(modifiedFood);

//splice

modifiedFood = foods.splice(2);

console.log(modifiedFood);

//
