export default function about() {

    const aboutSelected = document.getElementById('about')
    aboutSelected.classList.add('menu-item-selected') 

    const content = document.getElementById('content')

    const aboutContainer = document.createElement('div')
    aboutContainer.classList.add('inner-content')

    const h1 = document.createElement('h1')
    h1.textContent = 'About us'
    aboutContainer.appendChild(h1)
            
    const aboutText = document.createElement("p")
    aboutText.textContent = `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.`
    aboutText.style.padding = '0 20%'
    aboutContainer.appendChild(aboutText)
            
    const img = document.createElement('img')
    img.src = 'images/kitchen.jpeg'
    img.classList.add('about-img')
    aboutContainer.appendChild(img)
        
    content.appendChild(aboutContainer)
}