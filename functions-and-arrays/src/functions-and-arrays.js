// Progression #1: Greatest of the two numbers
const a=5;
const b=7;
function greatestOfTwoNumbers(a,b) {
  return a>b?a:b;
}
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findScaryWord(words) {
  if(words.length===0) return null;
  if(words.length===1) return words[0];
  let longest = words.reduce( function(a,b) {
      return b.length>a.length?b:a;
    } 
  )
  return longest
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(numbers) {
  if(numbers.length===0) return 0;
  if(numbers.length===1) return numbers[0];
  let sum = numbers.reduce( function(a,b) {
      return a+b;
    } 
  )
  return sum;
}

function add(numbers) {
  if(numbers.length===0) return 0;
  if(numbers.length===1) return numbers[0];
  let len=0;
  numbers.forEach((a)=>{
      if(typeof(a)==='string') {
        len+=a.length
      } else if(typeof(a)==='number') {
        len+=a
      }
      else if(typeof(a)==='boolean') {
        if(a==true){
        len+=1}
      }
      else if(typeof(a)==='object' || Array.isArray(a)){
        throw new Error("Unsupported data type sir or ma'am")
      }
    } 
  )
  return len;
}

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(numbersAvg) {
  if(numbersAvg.length===0) return null;
  if(numbersAvg.length===1) return numbersAvg[0];
  let sum = numbersAvg.reduce( function(a,b) {
      return a+b;
    } 
  )
  return sum/numbersAvg.length;
}
// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr) {
  if(wordsArr.length===0) return null;
  if(wordsArr.length===1) return wordsArr[0];
  let sum = wordsArr.reduce( function(a,b) {
      return a+b.length;
    },0
  )
  return sum/wordsArr.length;
}
const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];

function avg(mixedArr) {
  if(mixedArr.length===0) return null;
  if(mixedArr.length===1) return wordsArr[0];
  let len=0;
  mixedArr.forEach((a)=>{
      if(typeof(a)==='string') {
        len+=a.length
      } else if(typeof(a)==='number') {
        len+=a
      }
      else if(typeof(a)==='boolean') {
        if(a==true){
        len+=1}
      }
      else if(typeof(a)==='object' || Array.isArray(a)){
        throw new Error("Unsupported data type sir or ma'am")
      }
    } 
  )
  return Number((len/mixedArr.length).toFixed(2));
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

function uniqueArray(wordsUnique) {
  if(wordsUnique.length===0) return null;
  let newArr = [];
  wordsUnique.forEach((val)=>{
    newArr.includes(val)?false:newArr.push(val)
  })
  return newArr
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
const wordtoFind = 'machine';
function searchElement(wordsFind,wordtoFind) {
  if(wordsFind.length===0) return null;
  return wordsFind.includes(wordtoFind)
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
const word = 'matter';

function howManyTimesElementRepeated(wordsCount,word) {
  if(wordsCount.length===0) return 0;
  let count = 0
  wordsCount.forEach((val)=>{
    (word===val)?count++:count;
  })

  return count
}
// Progression #8: Bonus

const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45]
];

function maximumProduct(matrix) {
  let max=0;
  for(let i=0;i<matrix.length-4;i++) {
    for(let j=0;j<matrix[0].length-4;j++) {
      if((matrix[i][j]*matrix[i][j+1]*matrix[i][j+2]*matrix[i][j+3])>max) {
        max=(matrix[i][j]*matrix[i][j+1]*matrix[i][j+2]*matrix[i][j+3])
      }
      else if(matrix[i][j]*matrix[i+1][j]*matrix[i+2][j]*matrix[i+3][j]) {
          max=(matrix[i][j]*matrix[i+1][j]*matrix[i+2][j]*matrix[i+3][j]);
      }
      
    }
  }
 return max;
}

function maximumProductOfDiagonals(matrix) {
  let max=0;
  let lenRow=matrix[0].length
  for(let i=0;i<matrix.length-4;i++) {
    for(let j=0;j<lenRow-4;j++) {
      if((matrix[i][j]*matrix[i+1][j+1]*matrix[i+2][j+2]*matrix[i+3][j+3])>max) {
        max=(matrix[i][j]*matrix[i+1][j+1]*matrix[i+2][j+2]*matrix[i+3][j+3])
      }
      else if(matrix[i][lenRow]*matrix[i+1][lenRow-1]*matrix[i+2][lenRow-2]*matrix[i+3][lenRow-3]) {
          max=(matrix[i][j]*matrix[i+1][j]*matrix[i+2][j]*matrix[i+3][j])
      }
      
    }
  }
 return max;
}