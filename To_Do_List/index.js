const myHeading1 = document.querySelector('h1');
myHeading1.textContent = 'To-do List';

const myToDobutton = document.getElementById('toDo');
const myList = document.querySelector('ul');
myToDobutton.onclick = () => {
    item = prompt('What is to be done?');
    if(item != null){
            const li = document.createElement('li');
            li.textContent = item; 
            myList.appendChild(li);
            console.log('Added successfully.');
    }
    else{
        console.log('The input field is empty.');
    }
}