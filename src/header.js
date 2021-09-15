export function header(content) {
    const container = document.createElement('div')
    const homeLink = document.createElement('a')
    homeLink.innerText = "Home"
    const menuLink = document.createElement('a')
    menuLink.innerText = "Menu"
    const aboutLink = document.createElement('a')
    aboutLink.innerText = "AboutUs"
    container.append(homeLink, menuLink, aboutLink)


}