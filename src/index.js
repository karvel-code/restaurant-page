// import _ from 'lodash'

import restaurant from '../assets/restaurant.jpg'

// function component() {
//     const element = document.createElement('div');
  
//      // Lodash, now imported by this script
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
//     return element;
//   }
const content = document.getElementById('content');
// document.body.appendChild(component());
function mainPage() {
    const head = document.createElement('h1');
    head.innerText = "The Restaurant"
    content.appendChild(head)

    const img = document.createElement('img')
    img.src= restaurant
    content.appendChild(img)

    const text = document.createElement('p')
    text.innerText = "The Restaurant is a high class Restaurant located in the leafy surburbs of Lavington, Nairobi - Kenya. The Restaurant offers affordable meals and drinks at an affordable price while still maintaining high quality standards of food as well as services. Be sure to visit us!"
    content.appendChild(text)

}
mainPage();
// content.appendChild(mainPage());
// const content = document.getElementById('content');

// const div1 = document.createElement('p');
// div1.innerText = "Hello";

// content.appendChild('div1');





// alert("Hello")

