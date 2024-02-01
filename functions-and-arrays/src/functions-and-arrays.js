// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(a,b){
  return a > b? a:b; 
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words){
  if(words.length==0){
    return null;
  }
  let max = '';
  words.forEach(n=>{
    if(n.length>max.length){
      max=n;
    }
    else if(n.length==max.length){
    }
  });
 
  return max
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers){
  if(numbers.length==0){
    return 0;
  }
  else if(numbers.length==1){
    return numbers[0];
  }
  let sum =numbers.reduce((acc,num)=>{
    return acc+num},0);
    return sum;
}

// Progression #4: Calculate the average
function add(mixedArr){
  if (mixedArr.length==0){
    return 0;
  }
  if(mixedArr.length==1){
    return mixedArr[0];
  }
  let sum = mixedArr.reduce((acc,num)=>{
    return acc+num},0);
    return sum;
}
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(numbersAvg){
  if(numbersAvg.length==0){
    return null;
  }
  let sum = numbersAvg.reduce((acc,num)=>{
    return acc+num;
  },0);
  return sum/numbersAvg.length;
   
}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordsArr){
  if(wordsArr.length==0){
    return null;
  }
  let sum=0;
  wordsArr.forEach(word=>{
    sum+=word.length;
  });
  return sum/wordsArr.length;
}
// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
function uniquifyArray(wordsUnique){
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(wordsFind, wordToSearch){
  if(wordsFind.length==0){
    return null;
  }
  return wordsFind.includes(wordToSearch);
}
// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function howManyTimesElementRepeated(wordsCount, findWord){
  let count=0;
  wordsCount.forEach(word=>{
    if(findWord === word){
      count++;
    }
  });
  return count;
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
function maximumProduct(matrix){
   
}