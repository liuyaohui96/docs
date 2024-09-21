let person = {
  name: 'liu',
  hobbies: ['play football', 'read book']
};

let {
  name,
  hobbies: [firstHobby]
} = person;
console.log(name, firstHobby); // liu play football
