const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];

let modifiedFood = foods.slice(1,4);

console.log(modifiedFood)

modifiedFood = foods
modifiedFood.splice(2,0,'noodles', 'icecream');

console.log(modifiedFood)

const numberArray = [12,324,213,4,2,3,45,4234];
function isEven(numberArray) {
    const result = numberArray.filter((num)=>{
        return num%2==0;
    })
    return result;
}

console.log(isEven(numberArray))

function isPrime(numberArray) {
    const result = numberArray.filter((num)=>{
        for(let i=2;i<num;i++) {
            if((num%i)==0)
                return false
        }
        return true;
    })
    return result;
}

console.log(isPrime(numberArray))

function nonPrime(numberArray) {
    const result = numberArray.filter((num)=>{
        for(let i=2;i<num;i++) {
            if((num%i)==0)
                return true
        }
        return false;
    })
    return result;
}

console.log(nonPrime(numberArray))

isEven=(n)=>{return n%2==0}

console.log(isEven(5))

const myArray = [11, 34, 20, 5, 53, 16];

function findSquareOfNumbers(myArray) {
    return myArray.map((val)=>val*val)
}

console.log(findSquareOfNumbers(myArray))

const myNewArray = [2, 3, 5, 10];
function multiply(myNewArray) {
    return myNewArray.reduce((a,b)=>a*b)
}

console.log(multiply(myNewArray))