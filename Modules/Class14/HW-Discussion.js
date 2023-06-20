/*
    Suppose you are building a blog application and 
    you want to display a list of all the blog posts. 
    You have an array of blog post objects, 
        where each object has properties 
        such as title, author, date, and content.
    
    Find out if date field is empty on any object

*/


const objectArray = [
    {
        title: "Blog-1",
        author: "AB",
        date: "June 19 2023",
        content: "JS"
    }, 
    {
        title: "Blog-2",
        author: "CD",
        date: "Jan 10 2022",
        content: "Python"
    },
    {
        title: "Blog-3",
        author: "EF",
        date: "June 01 2023",
        content: "Java"
    },
    {
        title: "Blog-4",
        author: "GH",
        date: "May 10 2023",
        content: "Blah Blah"
    }
];

const emptyDateObject = [];

for (let blogObject of objectArray) {
    if (blogObject.date === "") {
        emptyDateObject.push(blogObject);
    }
}

console.log(emptyDateObject);












