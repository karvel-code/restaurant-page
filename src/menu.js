import steak from '../assets/steak.jpeg';

export function menuPage() {
    const menuContainer = document.createElement('div')
    menuContainer.classList = "menu-container"

    const menuHeading = document.createElement('h4')
    menuHeading.innerHTML = "Our Menu"
//div to close two items
    const firstDiv = document.createElement('div')
    firstDiv.classList = "first-container"
// start of div
    const menuItem = document.createElement('div')
    const imgItem = document.createElement('img')
    imgItem.classList = "menu-image"
    imgItem.src= steak;
    menuItem.appendChild(imgItem)

    const menuItemHeading = document.createElement('h3')
    menuItemHeading.innerHTML = "Grilled Steak"

    const menuItemDesc = document.createElement('p')
    menuItemDesc.innerText = "Grilled Steak marinated in BBQ sauce, garlic, rosemary and Basil. Slow cooked under low heat till soft."

    const itemPrice = document.createElement('p')
    itemPrice.innerText = "KES 1290"
    menuItem.append(menuItemHeading, menuItemDesc, itemPrice)
    //end of div
    // start of div
    const menuItemTwo = document.createElement('div')
    const imgItemTwo = document.createElement('img')
    imgItemTwo.classList = "menu-image"
    imgItemTwo.src= steak;
    menuItemTwo.appendChild(imgItemTwo)

    const menuItemHeadingTwo = document.createElement('h3')
    menuItemHeadingTwo.innerHTML = "Grilled Steak"

    const menuItemDescTwo = document.createElement('p')
    menuItemDescTwo.innerText = "Grilled Steak marinated in BBQ sauce, garlic, rosemary and Basil. Slow cooked under low heat till soft."

    const itemPriceTwo = document.createElement('p')
    itemPriceTwo.innerText = "KES 1290"
    menuItemTwo.append(menuItemHeadingTwo, menuItemDescTwo, itemPriceTwo)
//end of div

    firstDiv.append(menuItem, menuItemTwo)
    menuContainer.append(menuHeading, firstDiv)

    return menuContainer;


}