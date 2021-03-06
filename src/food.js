export default function foodMenu() {

    const products = ['HalwaPuri', 'Biryani', 'Chicken Karahi', 'Lassi', 'Drinks', 'Desserts']
    const productsUrls = ['images/Halwapuri.jpeg', 'images/biryani.jpeg', 'images/chicken.jpeg', 'images/dessert.jpeg', 'images/drinks.jpg', 'images/lassi.jpg']


    const menuSelected = document.getElementById('menu')
    menuSelected.classList.add('menu-item-selected') 

    const content = document.getElementById('content')

    const menuContainer = document.createElement('div')
    menuContainer.classList.add('inner-content')

    const h1 = document.createElement('h1')
    h1.textContent = 'Our Menu'
    menuContainer.appendChild(h1)

    for (let i = 0; i < products.length; i++) {
    const productItem = document.createElement('div')
    productItem.classList.add('product-item')
            
    const productPicture = document.createElement('div')
    productPicture.classList.add('product-picture')
    productPicture.style.backgroundImage = `url('${productsUrls[i]}')`
            
    const productName = document.createElement('h2')
    productName.classList.add('product-name')
    productName.innerHTML = products[i]
            
    productItem.appendChild(productPicture)
    productItem.appendChild(productName)
    menuContainer.appendChild(productItem)
    }
        
    content.appendChild(menuContainer)
}
