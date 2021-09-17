function contactPage() {
  const mainContactDiv = document.createElement('section');
  mainContactDiv.classList = 'main-contact-div';
  const contacttDiv = document.createElement('div');
  contacttDiv.classList = 'main-contact';
  const contactTitle = document.createElement('h2');
  contactTitle.classList = 'contact-title';
  contactTitle.innerHTML = 'About US';

  const contactDesc = document.createElement('p');
  contactDesc.classList = 'contact-desc';
  contactDesc.innerText = 'Feel free to reach out to us via our Phone no which is 0720183849. You can also get to us via any of our social media pages.';
  const socialLinksContainer = document.createElement('div');
  socialLinksContainer.classList = 'social-links-container';
  const facebookLink = document.createElement('i');
  facebookLink.classList = 'fab fa-facebook get-social';
  const instagramLink = document.createElement('i');
  instagramLink.classList = 'fab fa-instagram get-social';
  const twitterLink = document.createElement('i');
  twitterLink.classList = 'fab fa-twitter get-social';

  socialLinksContainer.append(facebookLink, instagramLink, twitterLink);
  contacttDiv.append(contactTitle, contactDesc, socialLinksContainer);
  mainContactDiv.appendChild(contacttDiv);

  return mainContactDiv;
}

export default contactPage