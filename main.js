const menuEmail = document.querySelector('.navbar-email');
const desktopMenuView = document.querySelector('.desktop-menu');
const mobileMenuView = document.querySelector('.mobile-menu');
const burguerMenuBtn = document.querySelector('.menu');
const shopingCartView = document.querySelector('.product-detail')
const shopingCartBtn = document.querySelector('.navbar-shoping-cart')

shopingCartBtn.addEventListener('click', ()=>{
    const isMobileMenuViewClosed = mobileMenuView.classList.contains('inactive');
    const isDestopMenuViewClosed = desktopMenuView.classList.contains('inactive');
    if (!isMobileMenuViewClosed || !isDestopMenuViewClosed) {
        mobileMenuView.classList.add('inactive')
        desktopMenuView.classList.add('inactive')
    }
    shopingCartView.classList.toggle('inactive')
})

burguerMenuBtn.addEventListener('click', ()=>{
    const isShopingCartViewClosed = shopingCartView.classList.contains('inactive');
    if (!isShopingCartViewClosed) {
        shopingCartView.classList.add('inactive')
    }
    mobileMenuView.classList.toggle('inactive')
})

menuEmail.addEventListener('click', ()=>{
    const isShopingCartViewClosed = shopingCartView.classList.contains('inactive');
    if (!isShopingCartViewClosed) {
        shopingCartView.classList.add('inactive')
    }
    desktopMenuView.classList.toggle('inactive')
})

