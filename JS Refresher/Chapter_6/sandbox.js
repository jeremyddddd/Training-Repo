//const para = document.querySelector('div.error');

// console.log(para);

// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');

// paras.forEach(para => {
//     console.log(para)
// });

// console.log(errors);

// get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);

// get element by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0].innerHTML);

//get elements by their tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1].innerHTML);

const para = document.querySelector('p');

// console.log(para.innerText);
// para.innerText = 'ninjas are awesome!';

const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new text'
// });

const content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML += '<h2>THIS IS A NEW H2</h2>';

const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});

// EXAMPLES FOR CLASS MODIFIERS

// const content = document.querySelector('.content');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

// const paras = document.querySelector('p');

// paras.forEach(p => {
//     if(p.textContent.includes('error')) // textContent checks the content inside tag (even the hidden content)
//     {
//         p.classList.add('error');
//     }
//     if(p.textContent.includes('success'))
//     {
//         p.classList.add('success');
//     }
// });

// const title = document.querySelector('.title');

// title.classList.toggle("test"); // adds test to class
// title.classList.toggle("test"); // removes