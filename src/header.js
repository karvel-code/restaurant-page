export function header() {
    const container = document.createElement('div')
    const homeLink = document.createElement('a')
    homeLink.innerText = "Home"
    homeLink.id = "home"
    const menuLink = document.createElement('a')
    menuLink.innerText = "Menu"
    menuLink.id = "Menu"
    const aboutLink = document.createElement('a')
    aboutLink.innerText = "AboutUs"
    aboutLink.id = "AboutUs"
    container.append(homeLink, menuLink, aboutLink)

    return container;

}