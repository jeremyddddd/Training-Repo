let age = 25;
let year = 2019;

age = 30;
year = 2020;

console.log(age, year);

const points = 300;

console.log(points);

var score = 75;

console.log(score);

console.log('hello, world');

let email = 'jeremydomingo@gmail.om';
console.log(email);

let firstName = 'Jerm';
let lastName = 'Dom';

let fullName = firstName + ' ' + lastName;

console.log(fullName[2]);

console.log(fullName.length);

console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);

result = email.lastIndexOf('n');
console.log(result);

result = email.slice(0, 5);
console.log(result);

result = email.substring(0, 10);
console.log(result);

result = email.replace('m', 'w');
console.log(result);

result = 5 * (10-3)**2; // '**' is exponent 
console.log(result);

let likes = 10;
likes++;
console.log(likes);

likes += 10;
console.log(likes);

likes /= 3; // mulplication can be represented by *=
console.log(likes);

console.log(5 / 'hello'); // NaN - "Not a Number"

result = 'The blog has ' + likes + ' likes';
console.log(result);

const title = 'Best reads of 2019';
const author = 'Mario';
likes = 30;

result = `The blog called ${title} by ${author} has ${likes}`;
console.log(result);

let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes </span>
`;
console.log(html);

let ninjas = ['shaun', 'ryu', 'chun-li'];
ninjas[1] = 'ken';
console.log(ninjas[1]);

let ages = [20, 25, 30, 23];
console.log(ages[2]);

let random = ['shaun', 'crystal', 30, 20];
console.log(random);

console.log(ninjas.length);

// array methods

result = ninjas.join('-');
console.log(result);

result = ninjas.indexOf('chun-li');
console.log(result);

result = ninjas.concat(['ken', 'crystal']);
console.log(result);

result = ninjas.push('ken');
console.log(result);

result = ninjas.pop();
console.log(result);