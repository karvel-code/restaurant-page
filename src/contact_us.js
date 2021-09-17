export function contactPage() {
    const contacttDiv = document.createElement("div")
    contacttDiv.classList = "main-contact"
    const contactTitle = document.createElement("h2")
    contactTitle.innerHTML = "About US"

    
    const contactDesc = document.createElement("p")
    contactDesc.innerText = "Feel free to reach out to us via our Phone no which is 0720183849. You can also get to us via any of our social media pages."
    const socialLinksContainer = document.createElement("div")
    const facebookLink = document.createElement("i")
    facebookLink.classList = "fab fa-facebook"
    const instagramLink = document.createElement("i")
    instagramLink.classList = "fab fa-instagram"
    const twitterLink = document.createElement("i")
    twitterLink.classList = "fab fa-twitter"

    socialLinksContainer.append(facebookLink, instagramLink, twitterLink)
    contacttDiv.append(contactTitle, contactDesc, socialLinksContainer)

    return contacttDiv
}