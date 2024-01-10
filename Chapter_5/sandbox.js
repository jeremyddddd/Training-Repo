// const blogs = [
//     { title: 'why mac & cheese rules', likes: 30 },
//     { title: '10 things to make with marmite', likes: 50 }
// ];

let user = {
    name: 'Crystal',
    age: 30,
    email:'crystal@thenetninija.co.uk',
    location: 'berlin',
    blogs: [
        { title: 'why mac & cheese rules', likes: 30 },
        { title: '10 things to make with marmite', likes: 50 }
    ],
    // login: function(){
    //     console.log('The user has logged in');
    // },
    // logout: function(){
    //     console.log('The user has logged out');
    // },
    // logBlogs: function(){
    //    // console.log(this.blogs);
    //    console.log('This user has written the follow blogs:');
    //    this.blogs.forEach(blog => {
    //     console.log(blog);
    //    })
    // }
    login(){
        console.log('The user has logged in');
    },
    logout(){
        console.log('The user has logged out');
    },
    logBlogs(){
       // console.log(this.blogs);
       console.log('This user has written the follow blogs:');
       this.blogs.forEach(blog => {
        console.log(blog.title, blog.likes);
       })
    }
};

console.log(user);
console.log(user.name);

user.age = 35;
console.log(user.age);

console.log(user['email']);

user['name'] = 'chung-li';
console.log(user['name']);

//checks type
console.log(typeof user);

user.login();

user.logout();

user.logBlogs();

// Math objects

console.log(Math); // shows all math objects
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area));

console.log(Math.floor(area));

// Primitive values

let scoreOne = 50;
let scoreTwo = scoreOne

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// Stack and heap, reference types

const userOne = { name: 'ryu', age: 30 };
const userTwo = userOne;

console.log(userOne, userTwo);

user.age = 40;
console.log(userOne, userTwo);