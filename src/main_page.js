import restaurant from '../assets/restaurant.jpg'

export function mainPage(content) {
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

// export {mainPage};