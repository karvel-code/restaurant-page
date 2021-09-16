// import _ from 'lodash'
import {mainPage} from './main_page'
import {menuPage} from './menu'
import {header} from './header'

const heading = header();
const myMenu = menuPage();
const myMainPage = mainPage();

// const menu = menuPage(content);

const content = document.querySelector('#content');
content.append(heading)

  const viewTab = (tab) => {
    content.innerHTML = '';
    content.append(heading, tab);
  };
  
  const homeLink = document.getElementById('home')
  
  homeLink.addEventListener('click', () => { viewTab(myMainPage); });
  // menuLink.addEventListener('click', () => { viewTab(myMenu); });
  // homeLink.addEventListener('click', () => { viewTab(myMainPage); });
  viewTab(myMainPage);
  
  

  // content.appendChild(mainPage());
  // const content = document.getElementById('content');

  // const div1 = document.createElement('p');
// div1.innerText = "Hello";

// content.appendChild('div1');