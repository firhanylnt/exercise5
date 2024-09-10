// exercise 1
function arrWithSort(arr: number[]) {

    arr.sort((a, b) => a - b);

    const lowest = arr[0];
    const highest = arr[arr.length - 1];
    const average = arr.reduce((acc, num) => acc + num, 0) / arr.length;

    return {
        lowest: lowest,
        highest: highest,
        average: average.toFixed(2)
    };
}

function arrWithoutSort(arr: number[]) {
    if (!arr.length) return null;

    let lowest = arr[0];
    let highest = arr[0];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < lowest) lowest = arr[i];
        if (arr[i] > highest) highest = arr[i];
        sum += arr[i];
    }

    const average = sum / arr.length;

    return {
        lowest: lowest,
        highest: highest,
        average: average.toFixed(2)
    };
}
const inputArray = [12, 5, 23, 18, 4, 45, 32];
console.log(arrWithSort(inputArray));
console.log(arrWithoutSort(inputArray));


// exercise 2
function concatenateWords(words: string[]) {
    return words.slice(0, -1).join(', ') + ', and ' + words[words.length - 1];
}
const array = ["apple", "banana", "cherry", "date"];
const result = concatenateWords(array);
console.log(result);

// exercise 3
function getSecondSmallest(arr: number[]) {
    arr.sort((a, b) => a - b);
    console.log(arr[1]);
    return arr[1];
}
const inputArray2: number[] = [5,3,1,7,2,6];
console.log(getSecondSmallest(inputArray2));

// exercise 4
function calculateTwoArrays(arr1: number[], arr2: number[]) {
    let resArray: number[] = []
    for (let i = 0; i < arr1.length; i++) {
        const plus = arr1[i] + arr2[i];
        resArray.push(plus)    
    }
    return resArray;
}
const arr1: number[] = [1,2,3];
const arr2: number[] = [3,2,1];
console.log(calculateTwoArrays(arr1, arr2));

// exercise 5
function addEndOfArray(arr: number[], num: number) {
    console.log(arr);
    const search = arr.find((a) => a === num)
    if(!search){
        arr.push(num)
    }
    return arr;
}
const inputArray3: number[] = [1,2,3,4];
console.log(addEndOfArray(inputArray3, 7))

// exercise 6
function sumAllNumber(arr: any[]) {
    let res = 0
    arr.map((input) => {
        if(typeof input === 'number'){
            res += input
        }
    })
    return res;
}

const mixedArray = ["3", 1, "string", null, false, undefined, 2];
console.log(sumAllNumber(mixedArray));


// exercise 7
function maxSizeArray(...num: number[]){
    const max = 5;
    let arr: number[] = [];
    for (let i = 0; i < num.length; i++) {
        if(arr.length < max){
            arr.push(num[i])
        }
    }
    return arr;

}
console.log(maxSizeArray(5, 10, 24, 3, 6, 7, 8));

// exercise 8
function combineArray(arr1: number[], arr2: number[]){
    return [...arr1,...arr2]
}
const combine1 = [1,2,3];
const combine2 = [4,5,6];
console.log(combineArray(combine1, combine2));

// exercise 9
function findDuplicate(arr: number[]): number[] {
    return arr.filter((v, i) => arr.indexOf(v) !== i).filter((v, i, existingArray) => existingArray.indexOf(v) === i);
}
let arrDup: number[] = [1, 2, 2, 2, 3, 3, 4, 5, 5];
console.log(findDuplicate(arrDup));

// exercise 10
function findDiff(arr1: number[], arr2: number[]) {
    const diff1 = arr1.filter(v => !arr2.includes(v));
    const diff2 = arr2.filter(v => !arr1.includes(v));
    return [...diff1, ...diff2];
}
let diff1: number[] = [1, 2, 3, 4, 5];
let diff2: number[] = [3, 4, 5, 6, 7];
console.log(findDiff(diff1,diff2));

// exercise 11
function findPrimitives(arr: any[]){
    return arr.filter(item => {
        return (
            typeof item === 'string' ||
            typeof item === 'number' ||
            typeof item === 'boolean' ||
            typeof item === 'undefined' ||
            item === null
        );
    });
}

let arr = [1, [], undefined, {}, "string", {}, []];
console.log(findPrimitives(arr)); 

// exercise 12
function sumOfDuplicates(arr: number[]): number {
    return arr.reduce((number, current) => {
        if (arr.filter(num => num === current).length > 1) {
            return number + current;
        }
        return number
    })
}

let inputArray4 = [10, 20, 40, 10, 50, 30, 10, 60, 10];
console.log(sumOfDuplicates(inputArray4));


// exercise 13
function rockPaperScissors(player: string) {
    const choices = ['rock', 'paper', 'scissors'];
    let res: string = '';
    
    const comp = choices[Math.floor(Math.random() * 3)];
    console.log(`Computer : ${comp}`);

    if (player === comp) {
        res = 'Draw';
    } else{
        (player === 'rock' && comp === 'scissors') ||(player === 'scissors' && comp === 'paper') || (player === 'paper' && comp === 'rock') ? res = 'Win' : res = 'Lose'; 
    }

    return res
}

console.log(rockPaperScissors('rock')); // Output will vary
