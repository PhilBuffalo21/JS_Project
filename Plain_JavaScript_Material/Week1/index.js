/*
Lesson one: intro
*/
// to print in console

//console.log('hello') 

//window pop up alert 

// window.alert('alert')

// document

//document.getElementById('myHead1').textContent = 'Joe';

// variable declaration 
// same for all types 
let x = 10; 

// arithematics 
// students = 10
//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;

//exponentiation
// students = students ** 2;

//let extraStudents = students % 3;
//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;
//students **= 2;
//students %= 2;
//students++;


// user input
// easy way = use window prompt 
// pro way = HTML textbox

// let username = window.prompt('What's your username?');

/*
The pro way is we use 
<input> in the html file 
then we can call a document method 
to get the input from the html file. 
*/

let username; 
document.getElementById('myButton1').onclick = function() {
    username = document.getElementById('myInput1').value; 
    document.getElementById('myHead1').textContent = `Hello, ${username}`;
    console.log(username);
}
