const person = {
    firstName : 'Dave',
    lastName : 'Smith',
    age : 30,
    hobbies : ['music', 'movies', 'sports'],
    address : {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
console.log(person);
console.log(person.firstName);
console.log(person.hobbies[1]);
console.log(person.address.street);

const todos = [
    {
        id:1,
        text: "Take out Trash",
        isComplete: true
    },
    {
        id: 2,
        text: "Complete one Module",
        isComplete: false
    },
    {
        id: 3,
        text: "Make Food",
        isComplete: false
    }
];
console.log(todos[1].text);

// Convert the array of object to JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);