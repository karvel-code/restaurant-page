import steak from '../assets/steak.jpeg';

export function menuPage() {
    const menuContainer = document.createElement('div')
    menuContainer.classList = "menu-container"

    const menuHeading = document.createElement('h4')
    menuHeading.innerHTML = "Our Menu"

    const menuItem = document.createElement('div')
    const imgItem = document.createElement('img')
    imgItem.src= steak;
    menuItem.appendChild(imgItem)

    const menuItemHeading = document.createElement('h5')
    menuItemHeading.innerHTML = "Grilled Steak"
    const menuItemDesc = document.createElement('p')
    menuItemDesc.innerText = "Grilled Steak marinated in BBQ sauce, garlic, rosemary and Basil. Slow cooked under low heat till soft."

}