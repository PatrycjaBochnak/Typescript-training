// const userName = "Pat";
// // userName = 'Patrycja'
// let age = 25;

// age = 29;

// function add(a: number, b: number) {
//     let result;
//     result = a + b;
//     return result;
// }

// if (age > 20) {
//     let isOld = true;
// };

// console.log(isOld)

// const add = (a: number, b: number = 1) => a + b;

// console.log(add(2, 5));

// const printOutput: (a: number | string) => void = output =>  console.log(output)

// printOutput(add(5))

// const button = document.querySelector('button')

// if(button) { 
//     button.addEventListener('click', event => console.log(event))
// }

const hobbies = ['Sports', 'Cooking']
console.log(hobbies[0])
const activeHobbies = ['Hiking'];

// activeHobbies.push(hobbies[0], hobbies[1])

activeHobbies.push(...hobbies)

const person = {
    firstName: 'Pat',
    age: 25
}

const copiedPerson = {...person};

const add = (...numbers: number[]) => {
    let result = 0;
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue
    }, 0)
}

const addNumbers = add( 5, 10, 2, 4, 5)
console.log(addNumbers)

// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

const {firstName: userName, age} = person;

console.log(userName, age, person)