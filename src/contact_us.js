export function contactPage() {
    const contacttDiv = document.createElement("div")
    const contactTitle = document.createElement("h2")
    contactTitle.innerHTML = "About US"

    
    
    const socialLinksContainer = document.createElement("div")
    const facebookLink = document.createElement("i")
    facebookLink.classList = "fab fa-facebook"
    const instagramLink = document.createElement("i")
    instagramLink.classList = "fab fa-instagram"
    const twitterLink = document.createElement("i")
    twitterLink.classList = "fab fa-twitter"

    socialLinksContainer.append(facebookLink, instagramLink, twitterLink)
    contacttDiv.append(contactTitle, socialLinksContainer )

    return contacttDiv
}