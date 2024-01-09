// Function expression 
// Must be declared before calling function
const speak = function(name = 'luigi', time = 'night')
{
    console.log(`Good ${time}, ${name}!`);
}

speak('mario', 'morning');
speak('mario', 'morning');
speak();

greet();
greet();
greet();

// Function declaration 
// Function is hoisted to the top
//  therefore, can have function at the bottom of page
function greet()
{
    console.log('Hello there');
}

// const calcArea = function(radius)
// {
//     let area = 3.14 * radius**2;
//     return area;
// }

// const calcArea = (radius) =>
// {
//     return 3.14 * radius**2;
// };

const calcArea = (radius) => 3.14 * radius**2;

const area = calcArea(5);
console.log(area);

const bill = (products, tax) =>
{
    let total = 0;

    for(let i = 0; i < products.length; i++)
    {
        total += products[i] + products[i] * tax;
    }

    return total;
};

console.log(bill([10, 15, 30], 0.2));

const myFunc = (callbackFunc) =>
{
    let value = 50;
    callbackFunc(value);
}

myFunc(
    value =>
    {
        console.log(value);
    }
);

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// people.forEach((person, index) => {
//     console.log(person, index);
// });

const logPerson = (person, index) =>
{
    console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);

const ul = document.querySelector('.people');

let html = ``;

people.forEach(person => {
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;


