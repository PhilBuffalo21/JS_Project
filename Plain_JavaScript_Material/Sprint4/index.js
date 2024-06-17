/*

`if` statements 

*/

let count = 10;

if(count >= 5) {
    console.log('Count is equal or more than 5');
}
// else if (){}
else {
    console.log('Count is less than');
}

/*

.checked

Description: 

Property that determines the checked state of an HTML
checkbox or radio button element

*/

let visa = document.getElementById('visaCheckbox');
let masterclass = document.getElementById('MCCheckbox');
let submit = document.getElementById('submit');
let result = document.getElementById('result');

submit.onclick = function() {
    if(!(visa.checked && masterclass.checked)){
    if(visa.checked){
        console.log('You have selected Visa');
        result.textContent = 'You have selected Visa';
    }
    else if(masterclass.checked){
        console.log('You have selected MasterClass');
        result.textContent = 'You have selected MasterClass';
    }
    else{
        console.log('Please a payment option');
    }
}
else{
    console.log('Please select only one payment option');
    result.textContent = 'Please select only one payment option';

}
};

/*
Ternary Operator
*/


let age = document.getElementById('age');
let response = document.getElementById('response');  
Number(age);
age >= 18 ? response = 'Here\'s a beer bro!': response = 'Would you like an apple juice?'

/*

Switch Statement

*/

let day = 2; 

switch(day){
    case 1: 
        console.log('It is Monday');
        break; 
    case 2: 
        console.log('It is Tuesday');
        break; 
    case 3: 
        console.log('It is Wednesday');
        break; 
}

/* 
If there is no 'break' 

In this example, since day is 2:

    The output will be:
        It is Tuesday
        It is Wednesday

After printing "It is Tuesday" for case 2, 
the code execution falls through to case 3 
and prints "It is Wednesday" even though day is not 3. 
This is not the intended behaviour.

*/
