import steak from '../assets/steak.jpeg';

export function menuPage() {
    const menuContainer = document.createElement('div')
    menuContainer.classList = "menu-container"

    const menuHeading = document.createElement('h2')
    menuHeading.classList = "our-menu"
    menuHeading.innerHTML = "Our Menu"
//div to close two items
    const firstDiv = document.createElement('div')
    firstDiv.classList = "first-container"
// start of div
    const menuItem = document.createElement('div')
    menuItem.classList = "menu-class"
    const imgItem = document.createElement('img')
    imgItem.classList = "menu-image"
    imgItem.src= steak;
    menuItem.appendChild(imgItem)

    const menuItemHeading = document.createElement('h3')
    menuItemHeading.innerHTML = "Grilled Steak"

    const menuItemDesc = document.createElement('p')
    menuItemDesc.innerText = "Grilled Steak marinated in BBQ sauce, garlic, rosemary and Basil. Slow cooked under low heat till soft."

    const itemPrice = document.createElement('p')
    itemPrice.classList = "price"
    itemPrice.innerText = "KES 1290"
    menuItem.append(menuItemHeading, menuItemDesc, itemPrice)
    //end of div
    // start of div
    const menuItemTwo = document.createElement('div')
    menuItemTwo.classList = "menu-class"
    const imgItemTwo = document.createElement('img')
    imgItemTwo.classList = "menu-image"
    imgItemTwo.src= steak;
    menuItemTwo.appendChild(imgItemTwo)

    const menuItemHeadingTwo = document.createElement('h3')
    menuItemHeadingTwo.innerHTML = "Grilled Steak"

    const menuItemDescTwo = document.createElement('p')
    menuItemDescTwo.innerText = "Grilled Steak marinated in BBQ sauce, garlic, rosemary and Basil. Slow cooked under low heat till soft."

    const itemPriceTwo = document.createElement('p')
    itemPriceTwo.classList = "price"
    itemPriceTwo.innerText = "KES 1290"
    menuItemTwo.append(menuItemHeadingTwo, menuItemDescTwo, itemPriceTwo)
//end of div
//div to close two items
const secondDiv = document.createElement('div')
secondDiv.classList = "first-container second-cont"
// start of div
const menuItemThree = document.createElement('div')
menuItemThree.classList = "menu-class"
const imgItemThree = document.createElement('img')
imgItemThree.classList = "menu-image"
imgItemThree.src= steak;
menuItemThree.appendChild(imgItemThree)

const menuItemHeadingThree = document.createElement('h3')
menuItemHeadingThree.innerHTML = "Grilled Steak"

const menuItemDescThree = document.createElement('p')
menuItemDescThree.innerText = "Grilled Steak marinated in BBQ sauce, garlic, rosemary and Basil. Slow cooked under low heat till soft."

const itemPriceThree = document.createElement('p')
itemPriceThree.classList = "price"
itemPriceThree.innerText = "KES 1290"
menuItemThree.append(menuItemHeadingThree, menuItemDescThree, itemPriceThree)

//start of div
const menuItemFour = document.createElement('div')
menuItemFour.classList = "menu-class"
const imgItemFour = document.createElement('img')
imgItemFour.classList = "menu-image"
imgItemFour.src= steak;
menuItemFour.appendChild(imgItemFour)

const menuItemHeadingFour = document.createElement('h3')
menuItemHeadingFour.innerHTML = "Grilled Steak"

const menuItemDescFour = document.createElement('p')
menuItemDescFour.innerText = "Grilled Steak marinated in BBQ sauce, garlic, rosemary and Basil. Slow cooked under low heat till soft."

const itemPriceFour = document.createElement('p')
itemPriceFour.classList = "price"
itemPriceFour.innerText = "KES 1290"
menuItemFour.append(menuItemHeadingFour, menuItemDescFour, itemPriceFour)

firstDiv.append(menuItem, menuItemTwo)
secondDiv.append(menuItemThree, menuItemFour)
menuContainer.append(menuHeading, firstDiv, secondDiv)

    return menuContainer;


}