// import _ from 'lodash'
import {mainPage} from './main_page'
import {menuPage} from './menu'
import {header} from './header'

const content = document.getElementById('content');
const heading = header();
content.append(heading);

mainPage(content);

const menu = menuPage(content);



// function component() {
//     const element = document.createElement('div');
  
//      // Lodash, now imported by this script
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
//     return element;
//   }

// document.body.appendChild(component());
const viewTab = (tab) => {
  content.innerHTML = '';
  content.append(heading, tab);
};
viewTab(menu)

const homeLink = document.getElementById('home')

homeLink.addEventListener('click', () => { viewTab(); });



// content.appendChild(mainPage());
// const content = document.getElementById('content');

// const div1 = document.createElement('p');
// div1.innerText = "Hello";

// content.appendChild('div1');





alert("Hello")

