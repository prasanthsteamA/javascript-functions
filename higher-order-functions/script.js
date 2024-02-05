//slice

const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];

let modifiedFood = foods.slice(1, 4);

console.log('modifiedFood',modifiedFood);

//splice

modifiedFood.splice(2,0,'noodles', 'icecream');

console.log('modifiedFood',modifiedFood);

//filter

const numberArray = [12,324,213,4,2,3,45,4234];

let evenArray=numberArray.filter((number)=>{
    if(number%2==0)
    {
        return number;
    }
}); 

console.log('evenArray',evenArray);

//prime

let primeArray=numberArray.filter((number)=>{
    for(let i=2;i<number;i++)
    {
        if(number%i==0)
        {
            return;
        }
    }
    return number;
});

console.log('primeArray',primeArray);

//non-prime

let nonPrimeArray=numberArray.filter((number)=>{
    for(let i=2;i<number;i++)
    {
        if(number%i==0)
        {
            return number;
        }
    }
    return;
});

console.log('nonPrimeArray',nonPrimeArray);

//lambda

const isEven=(number)=>{return number%2==0};

console.log('isEven',isEven(2));

//Map

const myArray = [11, 34, 20, 5, 53, 16];

let squareArray = myArray.map((number)=>{
    return number**2;
});

console.log('squareArray',squareArray);

//reduce

const multiplyArray=[2, 3, 5, 10];

let multiply=multiplyArray.reduce((number1,number2)=>{
    return number1*number2;
})

console.log('multiply',multiply);