import restaurant from '../assets/restaurant.jpg';

function mainPage() {
  const info = document.createElement('div');
  const head = document.createElement('h1');
  head.classList = 'rest-heading';
  head.innerHTML = 'The Restaurant';

  const container = document.createElement('div');
  container.classList = 'rest-cont';

  const img = document.createElement('img');
  img.src = restaurant;
  container.appendChild(img);

  const text = document.createElement('p');
  text.classList = 'img-text';
  text.innerText = 'The Restaurant is a high class Restaurant located in the leafy surburbs of Lavington, Nairobi - Kenya. The Restaurant offers affordable meals and drinks at an affordable price while still maintaining high quality standards of food as well as services. Be sure to visit us!';
  container.appendChild(text);
  info.append(head, container);

  return info;
}

export default mainPage;