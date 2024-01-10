// const person: {
//     name: string,
//     age: number
// } = {
//     const person: {
//         name: string,
//         age: number,
//         hobbies: string[],
//         role: [number, string]
//     } = {
//     name: 'Max',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [1, 'author']
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {ADMIN = 5, READ_ONLY, AUTHOR};

const person = {
name: 'Max',
age: 30,
hobbies: ['Sports', 'Cooking'],
role: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = 10; ! error ! 

let favoriteActivities: any[];
favoriteActivities = ['sports', 3];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toLocaleUpperCase);
    // console.log(hobby.map()); // ! ERROR ! Metoda map jest dostępna tylko na tablicach, a nie na łańcuchach, błąd mówi, ze nie istnieje na type string
}

if (person.role === Role.AUTHOR) {
    console.log('is author')
}