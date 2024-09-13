// alert('Welcome');

const myHeading = document.querySelector('h1');
myHeading.textContent = 'TopWeb';

const mySubHeading = document.querySelector('h3');
mySubHeading.textContent = 'Tonight...';

document.querySelector('#b1').addEventListener('click', function() {
    alert('Hello');
})


// we can use queryslector instead of getelementbyID, here's the explanation:
// https://x.com/i/grok/share/St6vks7CG1OFzeQvBzBa3kiWE

// ALternative way to declare anonymous func:  () => {
//   alert("Ouch! Stop poking me!"); }); 

const myImage = document.querySelector('img');
myImage.onclick = () =>{
    const mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Clarkson1.webp'){
        myImage.setAttribute('src', 'images/May1.jpg');
    }
    else if(mySrc === 'images/Hammand1.avif'){
        myImage.setAttribute('src','images/Clarkson1.webp');
    }
    else{
        myImage.setAttribute('src', 'images/Hammand1.avif');
    }
}

const myNameH = document.querySelector('h2');

function setUserName() {
    const myName = prompt("Please enter your name.");
    if(myName != null && myName.trim() !== ""){
        localStorage.setItem("name", myName);
        myNameH.textContent = `Logged in as ${myName}`;
    }
    else{
        console.log("User cancelled the prompt.");
        const storedName = localStorage.getItem('name');
        if(storedName != null){
            console.log("There is a name saved");
            myNameH.textContent = `Logged in as ${storedName}`;
        }
        else{
            console.log("You didn't enter a name.");
      // If an empty string was entered, you might want to keep the current name or set a default
             myNameH.textContent = "Logged in as Guest";
        }
    }
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myNameH.textContent = `Logged in as ${storedName}`;
  }
  
const myButton1 = document.querySelector("#b2");
myButton1.onclick = () => {
    setUserName();
};