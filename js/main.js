
(function ($) {
    "use strict";

    /*[ Load page ]
    ===========================================================*/
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        loading: true,
        loadingParentElement: 'html',
        loadingClass: 'animsition-loading-1',
        loadingInner: '<div class="loader05"></div>',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'html',
        transition: function(url){ window.location.href = url; }
    });
    
    /*[ Back to top ]
    ===========================================================*/
    var windowH = $(window).height()/2;

    $(window).on('scroll',function(){
        if ($(this).scrollTop() > windowH) {
            $("#myBtn").css('display','flex');
        } else {
            $("#myBtn").css('display','none');
        }
    });

    $('#myBtn').on("click", function(){
        $('html, body').animate({scrollTop: 0}, 300);
    });


    /*==================================================================
    [ Fixed Header ]*/
    var headerDesktop = $('.container-menu-desktop');
    var wrapMenu = $('.wrap-menu-desktop');

    if($('.top-bar').length > 0) {
        var posWrapHeader = $('.top-bar').height();
    }
    else {
        var posWrapHeader = 0;
    }
    

    if($(window).scrollTop() > posWrapHeader) {
        $(headerDesktop).addClass('fix-menu-desktop');
        $(wrapMenu).css('top',0); 
    }  
    else {
        $(headerDesktop).removeClass('fix-menu-desktop');
        $(wrapMenu).css('top',posWrapHeader - $(this).scrollTop()); 
    }

    $(window).on('scroll',function(){
        if($(this).scrollTop() > posWrapHeader) {
            $(headerDesktop).addClass('fix-menu-desktop');
            $(wrapMenu).css('top',0); 
        }  
        else {
            $(headerDesktop).removeClass('fix-menu-desktop');
            $(wrapMenu).css('top',posWrapHeader - $(this).scrollTop()); 
        } 
    });


    /*==================================================================
    [ Menu mobile ]*/
    $('.btn-show-menu-mobile').on('click', function(){
        $(this).toggleClass('is-active');
        $('.menu-mobile').slideToggle();
    });

    var arrowMainMenu = $('.arrow-main-menu-m');

    for(var i=0; i<arrowMainMenu.length; i++){
        $(arrowMainMenu[i]).on('click', function(){
            $(this).parent().find('.sub-menu-m').slideToggle();
            $(this).toggleClass('turn-arrow-main-menu-m');
        })
    }

    $(window).resize(function(){
        if($(window).width() >= 992){
            if($('.menu-mobile').css('display') == 'block') {
                $('.menu-mobile').css('display','none');
                $('.btn-show-menu-mobile').toggleClass('is-active');
            }

            $('.sub-menu-m').each(function(){
                if($(this).css('display') == 'block') { console.log('hello');
                    $(this).css('display','none');
                    $(arrowMainMenu).removeClass('turn-arrow-main-menu-m');
                }
            });
                
        }
    });


    /*==================================================================
   

    /*==================================================================
    [ Isotope ]*/
    var $topeContainer = $('.isotope-grid');
    var $filter = $('.filter-tope-group');

    // filter items on button click
    $filter.each(function () {
        $filter.on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $topeContainer.isotope({filter: filterValue});
        });
        
    });

    // init Isotope
    $(window).on('load', function () {
        var $grid = $topeContainer.each(function () {
            $(this).isotope({
                itemSelector: '.isotope-item',
                layoutMode: 'fitRows',
                percentPosition: true,
                animationEngine : 'best-available',
                masonry: {
                    columnWidth: '.isotope-item'
                }
            });
        });
    });

    var isotopeButton = $('.filter-tope-group button');

    $(isotopeButton).each(function(){
        $(this).on('click', function(){
            for(var i=0; i<isotopeButton.length; i++) {
                $(isotopeButton[i]).removeClass('how-active1');
            }

            $(this).addClass('how-active1');
        });
    });

    /*==================================================================
 



    /*==================================================================
    [ Cart ]*/
    $('.js-show-cart').on('click',function(){
        $('.js-panel-cart').addClass('show-header-cart');
    });

    $('.js-hide-cart').on('click',function(){
        $('.js-panel-cart').removeClass('show-header-cart');
    });

    /*==================================================================
    [ Cart ]*/
    $('.js-show-sidebar').on('click',function(){
        $('.js-sidebar').addClass('show-sidebar');
    });

    $('.js-hide-sidebar').on('click',function(){
        $('.js-sidebar').removeClass('show-sidebar');
    });

    /*==================================================================
    [ +/- num product ]*/
    $('.btn-num-product-down').on('click', function(){
        var numProduct = Number($(this).next().val());
        if(numProduct > 0) $(this).next().val(numProduct - 1);
    });

    $('.btn-num-product-up').on('click', function(){
        var numProduct = Number($(this).prev().val());
        $(this).prev().val(numProduct + 1);
    });

    /*==================================================================
    [ Rating ]*/
    $('.wrap-rating').each(function(){
        var item = $(this).find('.item-rating');
        var rated = -1;
        var input = $(this).find('input');
        $(input).val(0);

        $(item).on('mouseenter', function(){
            var index = item.index(this);
            var i = 0;
            for(i=0; i<=index; i++) {
                $(item[i]).removeClass('zmdi-star-outline');
                $(item[i]).addClass('zmdi-star');
            }

            for(var j=i; j<item.length; j++) {
                $(item[j]).addClass('zmdi-star-outline');
                $(item[j]).removeClass('zmdi-star');
            }
        });

        $(item).on('click', function(){
            var index = item.index(this);
            rated = index;
            $(input).val(index+1);
        });

        $(this).on('mouseleave', function(){
            var i = 0;
            for(i=0; i<=rated; i++) {
                $(item[i]).removeClass('zmdi-star-outline');
                $(item[i]).addClass('zmdi-star');
            }

            for(var j=i; j<item.length; j++) {
                $(item[j]).addClass('zmdi-star-outline');
                $(item[j]).removeClass('zmdi-star');
            }
        });
    });
    
    /*==================================================================
    [ Show modal1 ]*/
    $('.js-show-modal1').on('click',function(e){
        e.preventDefault();
        $('.js-modal1').addClass('show-modal1');
    });

    $('.js-hide-modal1').on('click',function(){
        $('.js-modal1').removeClass('show-modal1');
    });

/*=======================================================================*/


})(jQuery);
document.addEventListener("DOMContentLoaded", () => {
    const banners = [
        { src: "images/case4.png", link: "product.html", name: "Pc" },
        { src: "images/laptop8.jpg", link: "product.html", name: "Laptops" },
        { src: "images/aksesuarlar1.png", link: "product.html", name: "Accessories" }
    ];

    const bannerRow = document.getElementById("banner-row");

    banners.forEach(banner => {
        const colDiv = document.createElement("div");
        colDiv.classList.add("col-md-6", "col-xl-4", "p-b-30", "m-lr-auto");

        const blockDiv = document.createElement("div");
        blockDiv.classList.add("block1", "wrap-pic-w");

        const img = document.createElement("img");
        img.src = banner.src;
        img.alt = "IMG-BANNER";
        blockDiv.appendChild(img);

        const link = document.createElement("a");
        link.href = banner.link;
        link.classList.add("block1-txt", "s-full", "flex-col-l-sb");

        const nameDiv = document.createElement("div");

        const nameSpan = document.createElement("span");
        nameSpan.classList.add("block1-name", "ltext-102");
        nameSpan.textContent = banner.name;
        nameDiv.appendChild(nameSpan);

        if (banner.info) {
            const infoSpan = document.createElement("span");
            infoSpan.classList.add("block1-info", "stext-102");
            infoSpan.textContent = banner.info;
            nameDiv.appendChild(infoSpan);
        }

        const linkDiv = document.createElement("div");
        linkDiv.classList.add("block1-link", "stext-101", "cl0");
        linkDiv.textContent = "Shop Now";

        link.appendChild(nameDiv);
        link.appendChild(linkDiv);
        blockDiv.appendChild(link);
        colDiv.appendChild(blockDiv);
        bannerRow.appendChild(colDiv);
    });
});
// Ürün verileri
const products = [
    { imgSrc: 'images/case3.png', name: 'Esprit Ruffle Shirt', price: 16.64, category: 'PC' },
    { imgSrc: 'images/case4.png', name: 'Herschel supply', price: 35.31, category: 'PC' },
    { imgSrc: 'images/computer-case.png', name: 'Only Check Trouser', price: 25.50, category: 'PC' },
    { imgSrc: 'images/computer-case2.png', name: 'Classic Trench Coat', price: 75.00, category: 'PC' },
    { imgSrc: 'images/gamemax-hype.png', name: 'Front Pocket Jumper', price: 34.75, category: 'PC' },
    { imgSrc: 'images/gamemax-autobot.png', name: 'Vintage Inspired Classic', price: 93.20, category: 'PC' },
    { imgSrc: 'images/gamemax-infinity.png', name: 'Shirt in Stretch Cotton', price: 52.66, category: 'PC' },
    { imgSrc: 'images/laptop.png', name: 'Pieces Metallic Printed', price: 18.96, category: 'Laptops' },
    { imgSrc: 'images/lian-case.png', name: 'Converse All Star Hi Plimsolls', price: 75.00, category: 'PC' },
    { imgSrc: 'images/omen-case.png', name: 'Femme T-Shirt In Stripe', price: 25.85, category: 'PC' },
    { imgSrc: 'images/laptop5.png', name: 'Herschel supply', price: 63.16, category: 'Laptops' },
    { imgSrc: 'images/laptop6.png', name: 'Herschel supply', price: 63.15, category: '' },
    { imgSrc: 'images/laptop7.png', name: 'T-Shirt with Sleeve', price: 18.49, category: 'Laptops' },
    { imgSrc: 'images/asusrog.png', name: 'Pretty Little Thing', price: 54.79, category: 'Laptops' },
    { imgSrc: 'images/msi.png', name: 'Mini Silver Mesh Watch', price: 86.85, category: 'Laptops' },
    { imgSrc: 'images/notebook.png', name: 'Square Neck Back', price: 31.64, category: 'Laptops' }
];
// Ürün listesini oluştur

const productList = document.getElementById('product-list');
const cartList = document.querySelector('.header-cart-wrapitem');
const totalPriceElement = document.getElementById('total-price');
const cartCountElement = document.getElementById('cart-count');
let cart = [];

// Ürünleri listele
function displayProducts(productsToDisplay) {
    productList.innerHTML = '';
    productsToDisplay.forEach(product => {
        const productHTML = `
        <div class="product col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item ${product.category}">
            <div class="block2">
                <div class="block2-pic hov-img0">
                    <img src="${product.imgSrc}" alt="${product.name}">
                </div>
                <div class="card-btns">
                    <button class="add-to-cart-btn button-13" onclick="addToCart(${products.indexOf(product)})">Add to Cart</button>
                </div>
                <div class="block2-txt flex-w flex-t p-t-14">
                    <div class="block2-txt-child1 flex-col-l">
                        <a href="product-detail.html" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                            ${product.name}
                        </a>
                        <span class="stext-105 cl3">
                            $${product.price.toFixed(2)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        `;
        productList.innerHTML += productHTML;
    });
}

// Initial product display
displayProducts(products);

// Sepete ürün ekle
function addToCart(index) {
    const product = products[index];
    const cartItemIndex = cart.findIndex(item => item.product.name === product.name);

    if (cartItemIndex === -1) {
        cart.push({ product, quantity: 1 });
    } else {
        cart[cartItemIndex].quantity += 1;
    }

    updateCart();
}

// Sepeti güncelle
function updateCart() {
    cartList.innerHTML = '';
    let totalPrice = 0;
    cart.forEach((item, index) => {
        const cartItemHTML = `
            <li class="header-cart-item flex-w flex-t m-b-12">
                <div class="header-cart-item-img">
                    <img src="${item.product.imgSrc}" alt="${item.product.name}">
                </div>
                <div class="header-cart-item-txt p-t-8">
                    <a href="#" class="header-cart-item-name m-b-18 hov-cl1 trans-04">
                        ${item.product.name}
                    </a>
                    <div class="delete-price-flex">
                        <span class="header-cart-item-info">
                            $${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="decreaseQuantity(${index})"><i class="fas fa-chevron-down"></i></button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="quantity-btn" onclick="increaseQuantity(${index})"><i class="fas fa-chevron-up"></i></button>
                            <button class="remove-item-btn" onclick="removeFromCart(${index})"><i class="fas fa-trash"></i></button>
                        </div>
                    </div>
                </div>
            </li>
        `;
        cartList.innerHTML += cartItemHTML;
        totalPrice += item.product.price * item.quantity;
    });
    totalPriceElement.textContent = totalPrice.toFixed(2);
    cartCountElement.textContent = cart.length;
}

function removeFromCart(index) {
    cart.splice(index, 1); // Remove item from the cart
    updateCart(); // Update cart display
}

function increaseQuantity(index) {
    cart[index].quantity += 1;
    updateCart();
}

function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        cart.splice(index, 1); // Remove item if quantity is 0
    }
    updateCart();
}

// Sepet açma/kapama
const cartIcon = document.getElementById('cart-icon');
const wrapHeaderCart = document.querySelector('.wrap-header-cart');
const hideCart = document.querySelectorAll('.js-hide-cart');

cartIcon.addEventListener('click', () => {
    wrapHeaderCart.classList.toggle('show-header-cart');
});

hideCart.forEach(btn => {
    btn.addEventListener('click', () => {
        wrapHeaderCart.classList.remove('show-header-cart');
    });
});
    

