// import _ from 'lodash'



// function component() {
//     const element = document.createElement('div');
  
//      // Lodash, now imported by this script
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
//     return element;
//   }
const content = document.getElementById('content');
// document.body.appendChild(component());
import {mainPage} from './main_page'
mainPage(content);
import {menuPage} from './menu'
const menu = menuPage(content);


const viewTab = (tab) => {
    content.innerHTML = '';
    content.append(navSection, tab);
  };
viewTab(menu)
// content.appendChild(mainPage());
// const content = document.getElementById('content');

// const div1 = document.createElement('p');
// div1.innerText = "Hello";

// content.appendChild('div1');





// alert("Hello")

