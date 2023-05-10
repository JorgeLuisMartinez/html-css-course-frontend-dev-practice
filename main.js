const menuEmail = document.querySelector('.navbar-email');
const desktopMenuView = document.querySelector('.desktop-menu');
const mobileMenuView = document.querySelector('.mobile-menu');
const burguerMenuBtn = document.querySelector('.menu');
const shopingCartView = document.querySelector('.product-detail');
const shopingCartBtn = document.querySelector('.navbar-shoping-cart');
// array de productos
const cardsContainer = document.querySelector('.cards-container');
const productList = [];
const productDetailContainer = document.querySelector('.product-detailed');
const productDetailCloseBtn = document.querySelector('.product-detailed-close');


shopingCartBtn.addEventListener('click', ()=>{
    const isMobileMenuViewClosed = mobileMenuView.classList.contains('inactive');
    const isDestopMenuViewClosed = desktopMenuView.classList.contains('inactive');
    const isproductDetailContainerClosed = productDetailContainer.classList.contains('inactive');
    if (!isMobileMenuViewClosed || !isDestopMenuViewClosed || !isproductDetailContainerClosed) {
        mobileMenuView.classList.add('inactive');
        desktopMenuView.classList.add('inactive');
        productDetailContainer.classList.add('inactive');
    }
    shopingCartView.classList.toggle('inactive')
})

burguerMenuBtn.addEventListener('click', ()=>{
    const isShopingCartViewClosed = shopingCartView.classList.contains('inactive');
    const isproductDetailContainerClosed = productDetailContainer.classList.contains('inactive');
    if (!isShopingCartViewClosed || !isproductDetailContainerClosed) {
        shopingCartView.classList.add('inactive');
        productDetailContainer.classList.add('inactive');
    }
    mobileMenuView.classList.toggle('inactive')
})

menuEmail.addEventListener('click', ()=>{
    const isShopingCartViewClosed = shopingCartView.classList.contains('inactive');
    const isproductDetailContainerClosed = productDetailContainer.classList.contains('inactive');
    if (!isShopingCartViewClosed || !isproductDetailContainerClosed) {
        shopingCartView.classList.add('inactive');
        productDetailContainer.classList.add('inactive');
    }
    desktopMenuView.classList.toggle('inactive')
})
productDetailCloseBtn.addEventListener('click',()=>{
    const isShopingCartViewClosed = shopingCartView.classList.contains('inactive');
    const isDestopMenuViewClosed = desktopMenuView.classList.contains('inactive');
    if(!isShopingCartViewClosed || !isDestopMenuViewClosed){
        shopingCartView.classList.add('inactive');
        desktopMenuView.classList.add('inactive');
    }
    productDetailContainer.classList.toggle('inactive');
})

// Creando las products cards
productList.push({
    name : 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name : 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name : 'Pc',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name : 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name : 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name : 'Pc',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name : 'Pc',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name : 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name : 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name : 'Pc',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})


function renderProducts(arr){
    for (product of arr) {
        // En este primer bloque de codigo creamos la estructura de una product cart pero dinamica
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image)
        img.addEventListener('click', ()=>{
            productDetailContainer.classList.remove('inactive');
        })
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        // En este codigo de aca con append damos orden a los elementos, que elementos van dentro de que otros
        
        productInfoFigure.appendChild(productImgCard);
        productInfoDiv.append(productPrice, productName);
        productInfo.append(productInfoDiv,productInfoFigure)
        productCard.append(img,productInfo);
        cardsContainer.append(productCard);
    }
}

renderProducts(productList)