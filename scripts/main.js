let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/tsukki1.png');
    } else {
        myImage.setAttribute('src','images/firefox-icon.png');
      }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = ' You are cool, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = "You are cool, " + storedName;
}

myButton.onclick = function() {
    setUserName();
}













//const myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hi there !'

/* 
this is a comment 
*/

//this is also a comment

/*
let iceCream = 'chocolate';
if(iceCream === 'chocolate'){
    alert('Yay, I love chocolate ice cream!');
} else {
    alert('Awww, but chocolate is my favourite...');
}
*/

//document.querySelector('html').onclick = function () {
//    alert('Wheee~please touch me!');
//}