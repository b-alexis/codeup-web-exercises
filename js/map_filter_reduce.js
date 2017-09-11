"use strict";
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];


//filtered list//
let languages = users.filter(function(item) {

    if(item.languages.length >= 3) {
        return item;
    }

});


// function some(languages) {
//     return users.languages.length >= 3;
// }
console.log(languages);


// let email = users.map(function(e){
//     if (e.email >=1){
//         return e;
//     }
// });
//array emails//
 let email = users.map(users => users.email);
console.log(email);


//new object//
let id = users.reduce((id,cat) => {id[cat.id]=cat.id;return id;}, {});

console.log(id);