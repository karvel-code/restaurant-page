function header() {
  const container = document.createElement('div');
  container.classList = 'navigation';
  const homeLink = document.createElement('a');
  homeLink.innerText = 'Home';
  homeLink.id = 'home';
  const menuLink = document.createElement('a');
  menuLink.innerText = 'Menu';
  menuLink.id = 'menu';
  const aboutLink = document.createElement('a');
  aboutLink.innerText = 'AboutUs';
  aboutLink.id = 'about';
  container.append(homeLink, menuLink, aboutLink);

  return container;
}

export default header;