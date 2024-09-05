
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
    { 
        imgSrc: 'images/case3.png', 
        name: 'Esprit Ruffle Shirt', 
        price: 16.64, 
        category: 'PC',
        description: 'A stylish ruffle shirt perfect for casual and formal wear.' 
    },
    { 
        imgSrc: 'images/case4.png', 
        name: 'Herschel supply', 
        price: 35.31, 
        category: 'PC',
        description: 'Durable and spacious supply case for all your needs.' 
    },
    { 
        imgSrc: 'images/computer-case.png', 
        name: 'Only Check Trouser', 
        price: 25.50, 
        category: 'PC',
        description: 'Comfortable check trouser with a modern fit.' 
    },
    { 
        imgSrc: 'images/computer-case2.png', 
        name: 'Classic Trench Coat', 
        price: 75.00, 
        category: 'PC',
        description: 'A timeless trench coat that never goes out of style.' 
    },
    { 
        imgSrc: 'images/gamemax-hype.png', 
        name: 'Front Pocket Jumper', 
        price: 34.75, 
        category: 'PC',
        description: 'Cozy jumper with a convenient front pocket.' 
    },
    { 
        imgSrc: 'images/gamemax-autobot.png', 
        name: 'Vintage Inspired Classic', 
        price: 93.20, 
        category: 'PC',
        description: 'A vintage-inspired piece for a classic look.' 
    },
    { 
        imgSrc: 'images/gamemax-infinity.png', 
        name: 'Shirt in Stretch Cotton', 
        price: 52.66, 
        category: 'PC',
        description: 'A comfortable shirt made from stretch cotton fabric.' 
    },
    { 
        imgSrc: 'images/laptop.png', 
        name: 'Pieces Metallic Printed', 
        price: 18.96, 
        category: 'Laptops',
        description: 'Stylish metallic printed piece for a modern look.' 
    },
    { 
        imgSrc: 'images/lian-case.png', 
        name: 'Converse All Star Hi Plimsolls', 
        price: 75.00, 
        category: 'PC',
        description: 'Classic Converse All Star Hi plimsolls for everyday wear.' 
    },
    { 
        imgSrc: 'images/omen-case.png', 
        name: 'Femme T-Shirt In Stripe', 
        price: 25.85, 
        category: 'PC',
        description: 'Striped t-shirt for a casual and chic outfit.' 
    },
    { 
        imgSrc: 'images/laptop5.png', 
        name: 'Herschel supply', 
        price: 63.16, 
        category: 'Laptops',
        description: 'Spacious and durable Herschel supply backpack.' 
    },
    { 
        imgSrc: 'images/laptop6.png', 
        name: 'Herschel supply', 
        price: 63.15, 
        category: '',
        description: 'A versatile and stylish Herschel supply product.' 
    },
    { 
        imgSrc: 'images/laptop7.png', 
        name: 'T-Shirt with Sleeve', 
        price: 18.49, 
        category: 'Laptops',
        description: 'Comfortable t-shirt with short sleeves.' 
    },
    { 
        imgSrc: 'images/asusrog.png', 
        name: 'Pretty Little Thing', 
        price: 54.79, 
        category: 'Laptops',
        description: 'A pretty little thing to add to your collection.' 
    },
    { 
        imgSrc: 'images/msi.png', 
        name: 'Mini Silver Mesh Watch', 
        price: 86.85, 
        category: 'Laptops',
        description: 'Elegant mini silver mesh watch for all occasions.' 
    },
    { 
        imgSrc: 'images/notebook.png', 
        name: 'Square Neck Back', 
        price: 31.64, 
        category: 'Laptops',
        description: 'Fashionable square neck back dress for a stylish look.' 
    }
];

// Ürün listesini oluştur

const productList = document.getElementById('product-list');
const cartList = document.querySelector('.header-cart-wrapitem');
const totalPriceElement = document.getElementById('total-price');
const cartCountElement = document.getElementById('cart-count');
const modal = document.getElementById('product-modal');
const closeModal = document.querySelector('.close');
const addToCartBtn = document.getElementById('modal-add-to-cart-btn');
const quantityInput = document.getElementById('modal-quantity');



let cart = [];



// Başlangıçta tüm ürünleri göster
displayProducts(products);


const componentCategories = [
    'Processor', 'Motherboard', 'Memory (RAM)', 'Storage (SSD)', 'Storage (HDD)',
    'Graphics Card', 'Power Supply Unit (PSU)', 'Case', 'Cooling System',
    'Monitor', 'Keyboard', 'Mouse', 'Operating System'
];

const allAvailableProducts = [
    { imgSrc: 'images/case3.png', name: 'Esprit Ruffle Shirt', price: 16.64, category: 'PC', description: 'A stylish ruffle shirt perfect for casual and formal wear.' },
    { imgSrc: 'images/case4.png', name: 'Herschel supply', price: 35.31, category: 'PC', description: 'Durable and spacious supply case for all your needs.' },
    { imgSrc: 'images/computer-case.png', name: 'Only Check Trouser', price: 25.50, category: 'PC', description: 'Comfortable check trouser with a modern fit.' },
    { imgSrc: 'images/computer-case2.png', name: 'Classic Trench Coat', price: 75.00, category: 'PC', description: 'A timeless trench coat that never goes out of style.' },
    { imgSrc: 'images/gamemax-hype.png', name: 'Front Pocket Jumper', price: 34.75, category: 'PC', description: 'Cozy jumper with a convenient front pocket.' },
    { imgSrc: 'images/gamemax-autobot.png', name: 'Vintage Inspired Classic', price: 93.20, category: 'PC', description: 'A vintage-inspired piece for a classic look.' },
    { imgSrc: 'images/gamemax-infinity.png', name: 'Shirt in Stretch Cotton', price: 52.66, category: 'PC', description: 'A comfortable shirt made from stretch cotton fabric.' },
    { imgSrc: 'images/piece-metallic-printed.png', name: 'Pieces Metallic Printed', price: 18.96, category: 'Laptops', description: 'Stylish metallic printed piece for a modern look.' },
    { imgSrc: 'images/converse-all-star-hi.png', name: 'Converse All Star Hi Plimsolls', price: 75.00, category: 'PC', description: 'Classic Converse All Star Hi plimsolls for everyday wear.' },
    { imgSrc: 'images/femme-t-shirt-stripe.png', name: 'Femme T-Shirt In Stripe', price: 25.85, category: 'PC', description: 'Striped t-shirt for a casual and chic outfit.' },
    { imgSrc: 'images/herschel-supply-2.png', name: 'Herschel supply', price: 63.16, category: 'Laptops', description: 'Spacious and durable Herschel supply backpack.' },
    { imgSrc: 'images/herschel-supply-3.png', name: 'Herschel supply', price: 63.15, category: '', description: 'A versatile and stylish Herschel supply product.' },
    { imgSrc: 'images/t-shirt-sleeve.png', name: 'T-Shirt with Sleeve', price: 18.49, category: 'Laptops', description: 'Comfortable t-shirt with short sleeves.' },
    { imgSrc: 'images/pretty-little-thing.png', name: 'Pretty Little Thing', price: 54.79, category: 'Laptops', description: 'A pretty little thing to add to your collection.' },
    { imgSrc: 'images/mini-silver-mesh-watch.png', name: 'Mini Silver Mesh Watch', price: 86.85, category: 'Laptops', description: 'Elegant mini silver mesh watch for all occasions.' },
    { imgSrc: 'images/square-neck-back-dress.png', name: 'Square Neck Back', price: 31.64, category: 'Laptops', description: 'Fashionable square neck back dress for a stylish look.' }
];

let builderHtmlContent = `
<div class="custom-pc-builder">
    <h1 class="custom-pc-builder-header">Build Your Custom PC</h1>
    <table class="custom-pc-builder-table">
        <thead class="custom-pc-builder-thead">
            <tr class="custom-pc-builder-header-row">
                <th class="custom-pc-builder-header-cell">Component Category</th>
                <th class="custom-pc-builder-header-cell">Select Product</th>
                <th class="custom-pc-builder-header-cell">Quantity</th>
                <th class="custom-pc-builder-header-cell">Price</th>
            </tr>
        </thead>
        <tbody id="component-table-body" class="custom-pc-builder-body">`;

componentCategories.forEach(category => {
    builderHtmlContent += `
        <tr class="custom-pc-builder-body-row">
            <td class="custom-pc-builder-body-cell">${category}</td>
            <td class="custom-pc-builder-body-cell">
                <div class="custom-select-box">
                    <div class="custom-select-box-inner">
                        <div class="custom-select-box-button" id="select-${category}">
                            <img src="" alt="" class="custom-select-img" style="display: none;">
                            <span class="custom-select-text">Select ${category}</span>
                        </div>
                        <span class="custom-remove-button" id="remove-${category}">✖</span>
                    </div>
                    <div class="custom-dropdown-box" id="dropdown-${category}" style="display: none;">
                        <input type="text" class="custom-search-input" placeholder="Search...">
                        <div class="custom-dropdown-items">`;

    allAvailableProducts.forEach(product => {
        if (product.category === 'PC' || product.category === 'Laptops') {
            builderHtmlContent += `
                <div class="custom-dropdown-item" data-name="${product.name}" data-image="${product.imgSrc}" data-price="${product.price}" data-description="${product.description}">
                    <img src="${product.imgSrc}" alt="${product.name}">
                    <span>${product.name} - $${product.price}</span>
                </div>`;
        }
    });

    builderHtmlContent += `
                        </div>
                    </div>
                </div>
            </td>
            <td class="custom-pc-builder-body-cell">
                <input type="number" min="1" value="1" class="custom-quantity-input">
            </td>
            <td class="custom-pc-builder-body-cell">
                <span class="custom-price-output">$0.00</span>
            </td>
        </tr>`;
});

builderHtmlContent += `
    </tbody>
</table>
<div class="custom-total-price-box">
    <span class="custom-total-price-label">Total Price: </span>
    <span class="custom-total-price-output" id="total-price-output">$0.00</span>
</div>
<div class="button-container">
  <button id="add-to-cart-button" class="custom-add-to-cart-button">
  <svg class="cart-icon-svg" fill="white" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
  </svg>
  ADD TO CART
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" class="product-icon-svg">
    <path d="M620 432H20c-11 0-20-9-20-20V100c0-11 9-20 20-20h600c11 0 20 9 20 20v312c0 11-9 20-20 20zm-10-332H30v292h580V100zm-290 350c-33.1 0-60-26.9-60-60s26.9-60 60-60 60 26.9 60 60-26.9 60-60 60z"/>
  </svg>
</button>



</div>



</div>`;

document.getElementById('custom-pc-builder-container').innerHTML = builderHtmlContent;

function calculateTotalPrice() {
    let total = 0;

    document.querySelectorAll('.custom-pc-builder-body-row').forEach(row => {
        const priceOutput = row.querySelector('.custom-price-output');
        const quantityInput = row.querySelector('.custom-quantity-input');

        if (!priceOutput || !quantityInput) {
            console.warn('Invalid element found:', row);
            return;
        }

        const price = parseFloat(priceOutput.textContent.replace('$', '')) || 0;
        const quantity = parseInt(quantityInput.value, 10) || 1;

        total += price * quantity;
    });

    const totalPriceElement = document.getElementById('total-price-output');
    if (totalPriceElement) {
        totalPriceElement.textContent = `$${total.toFixed(2)}`;
    } else {
        console.warn('Total Price output element not found');
    }
}

function initializeDropdowns() {
    document.querySelectorAll('.custom-select-box-inner').forEach(innerBox => {
        const button = innerBox.querySelector('.custom-select-box-button');
        const category = button.id.split('-')[1];
        const dropdown = document.getElementById(`dropdown-${category}`);
        const dropdownItems = dropdown.querySelector('.custom-dropdown-items');
        const searchInput = dropdown.querySelector('.custom-search-input');
        const selectImage = button.querySelector('.custom-select-img');
        const selectText = button.querySelector('.custom-select-text');
        const priceOutput = button.closest('tr').querySelector('.custom-price-output');
        const quantityInput = button.closest('tr').querySelector('.custom-quantity-input');
        const removeButton = document.getElementById(`remove-${category}`);

        innerBox.addEventListener('click', (event) => {
            event.stopPropagation();
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
            document.querySelectorAll('.custom-dropdown-box').forEach(dd => {
                if (dd !== dropdown) dd.style.display = 'none';
            });
        });

        searchInput.addEventListener('click', (event) => {
            event.stopPropagation();
        });

        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();
            dropdownItems.querySelectorAll('.custom-dropdown-item').forEach(item => {
                const itemName = item.getAttribute('data-name').toLowerCase();
                item.style.display = itemName.includes(searchTerm) ? 'flex' : 'none';
            });
        });

        dropdownItems.addEventListener('click', (event) => {
            const item = event.target.closest('.custom-dropdown-item');
            if (item) {
                selectImage.src = item.getAttribute('data-image');
                selectImage.style.display = 'block';
                selectText.textContent = item.getAttribute('data-name');
                priceOutput.textContent = `$${parseFloat(item.getAttribute('data-price')).toFixed(2)}`;
                dropdown.style.display = 'none';
                calculateTotalPrice();
            }
        });

        removeButton.addEventListener('click', (event) => {
            event.stopPropagation();
            selectText.textContent = `Select ${category}`;
            selectImage.style.display = 'none';
            priceOutput.textContent = '$0.00';
            quantityInput.value = 1;
            calculateTotalPrice();
        });
    });

    document.addEventListener('click', () => {
        document.querySelectorAll('.custom-dropdown-box').forEach(dd => dd.style.display = 'none');
    });
}

function addCustomPCToCart() {
    let totalPrice = 0;
    let caseImageSrc = '';

    // Empty array to store selected products for the built PC
    const selectedProducts = [];

    document.querySelectorAll('.custom-pc-builder-body-row').forEach(row => {
        const selectText = row.querySelector('.custom-select-text').textContent;
        const priceOutput = row.querySelector('.custom-price-output');
        const quantityInput = row.querySelector('.custom-quantity-input');

        if (selectText.includes('Select')) {
            return;
        }

        const itemPrice = parseFloat(priceOutput.textContent.replace('$', '')) || 0;
        const itemQuantity = parseInt(quantityInput.value, 10) || 1;
        totalPrice += itemPrice * itemQuantity;

        selectedProducts.push({
            name: selectText,
            quantity: itemQuantity,
            price: itemPrice,
        });

        // Check if the category is 'Case' and store the image source
        const category = row.querySelector('.custom-select-box-button').id.split('-')[1];
        if (category === 'Case') {
            caseImageSrc = row.querySelector('.custom-select-img').src;
        }
    });

    // Only add the "Built Computer" item to the cart
    const builtComputer = {
        index: 0, // Dummy index
        quantity: 1, // Default quantity for the entire built computer
        product: {
            name: "Built Computer",
            imgSrc: caseImageSrc || (selectedProducts.length > 0 ? document.querySelector('.custom-select-img').src : ''),
            price: totalPrice.toFixed(2),
        }
    };

    // Add only the builtComputer item to the cart
    addToCart(builtComputer.index, builtComputer.quantity);

    // Clear cart to avoid duplicates (Optional: Use if necessary)
    cart.length = 0; // Empty the cart

    // Update cart with builtComputer details
    cart.push({
        product: builtComputer.product,
        quantity: builtComputer.quantity
    });

    // Refresh cart view
    updateCart();
}

document.getElementById('add-to-cart-button').addEventListener('click', addCustomPCToCart);

document.addEventListener('DOMContentLoaded', () => {
    initializeDropdowns();
    calculateTotalPrice();
});








// Ürünleri listele
// Ürünleri listele
function displayProducts(productsToDisplay) {
    const productList = document.getElementById('product-list');
    if (!productList) {
        console.error('Product list element not found');
        return;
    }
    
    productList.innerHTML = '';
    productsToDisplay.forEach((product, index) => {
        const productHTML = `
        <div class="product col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item ${product.category}" data-index="${index}">
    <div class="product-card">
        <div class="product-card-image" onclick="openModal(${index})">
            <img src="${product.imgSrc}" alt="${product.name}">
            <button class="like-btn" onclick="likeProduct(${index}, event)">
    <i class="fa-regular fa-heart"></i>
</button>
        </div>
        <div class="product-card-body">
            <a href="product-detail.html" class="product-name">
                ${product.name}
            </a>
            <div class="product-description">
                ${product.description}
            </div>
            <div class="product-footer">
                <span class="product-price">
                    $${product.price.toFixed(2)}
                </span>
                <button class="add-to-cart-btn" onclick="addToCart(${index})">Add to cart</button>
            </div>
        </div>
    </div>
</div>
`;
        
        productList.innerHTML += productHTML;
    });
}


// Buton elementini oluştur





function getProductByIndex(index) {
    const products = [
    { 
        imgSrc: 'images/case3.png', 
        name: 'Esprit Ruffle Shirt', 
        price: 16.64, 
        category: 'PC',
        description: 'A stylish ruffle shirt perfect for casual and formal wear.' 
    },
    { 
        imgSrc: 'images/case4.png', 
        name: 'Herschel supply', 
        price: 35.31, 
        category: 'PC',
        description: 'Durable and spacious supply case for all your needs.' 
    },
    { 
        imgSrc: 'images/computer-case.png', 
        name: 'Only Check Trouser', 
        price: 25.50, 
        category: 'PC',
        description: 'Comfortable check trouser with a modern fit.' 
    },
    { 
        imgSrc: 'images/computer-case2.png', 
        name: 'Classic Trench Coat', 
        price: 75.00, 
        category: 'PC',
        description: 'A timeless trench coat that never goes out of style.' 
    },
    { 
        imgSrc: 'images/gamemax-hype.png', 
        name: 'Front Pocket Jumper', 
        price: 34.75, 
        category: 'PC',
        description: 'Cozy jumper with a convenient front pocket.' 
    },
    { 
        imgSrc: 'images/gamemax-autobot.png', 
        name: 'Vintage Inspired Classic', 
        price: 93.20, 
        category: 'PC',
        description: 'A vintage-inspired piece for a classic look.' 
    },
    { 
        imgSrc: 'images/gamemax-infinity.png', 
        name: 'Shirt in Stretch Cotton', 
        price: 52.66, 
        category: 'PC',
        description: 'A comfortable shirt made from stretch cotton fabric.' 
    },
    { 
        imgSrc: 'images/laptop.png', 
        name: 'Pieces Metallic Printed', 
        price: 18.96, 
        category: 'Laptops',
        description: 'Stylish metallic printed piece for a modern look.' 
    },
    { 
        imgSrc: 'images/lian-case.png', 
        name: 'Converse All Star Hi Plimsolls', 
        price: 75.00, 
        category: 'PC',
        description: 'Classic Converse All Star Hi plimsolls for everyday wear.' 
    },
    { 
        imgSrc: 'images/omen-case.png', 
        name: 'Femme T-Shirt In Stripe', 
        price: 25.85, 
        category: 'PC',
        description: 'Striped t-shirt for a casual and chic outfit.' 
    },
    { 
        imgSrc: 'images/laptop5.png', 
        name: 'Herschel supply', 
        price: 63.16, 
        category: 'Laptops',
        description: 'Spacious and durable Herschel supply backpack.' 
    },
    { 
        imgSrc: 'images/laptop6.png', 
        name: 'Herschel supply', 
        price: 63.15, 
        category: '',
        description: 'A versatile and stylish Herschel supply product.' 
    },
    { 
        imgSrc: 'images/laptop7.png', 
        name: 'T-Shirt with Sleeve', 
        price: 18.49, 
        category: 'Laptops',
        description: 'Comfortable t-shirt with short sleeves.' 
    },
    { 
        imgSrc: 'images/asusrog.png', 
        name: 'Pretty Little Thing', 
        price: 54.79, 
        category: 'Laptops',
        description: 'A pretty little thing to add to your collection.' 
    },
    { 
        imgSrc: 'images/msi.png', 
        name: 'Mini Silver Mesh Watch', 
        price: 86.85, 
        category: 'Laptops',
        description: 'Elegant mini silver mesh watch for all occasions.' 
    },
    { 
        imgSrc: 'images/notebook.png', 
        name: 'Square Neck Back', 
        price: 31.64, 
        category: 'Laptops',
        description: 'Fashionable square neck back dress for a stylish look.' 
    }
];

    return products[index];
}

// Beğenilen ürün sayısını güncelleyen fonksiyon
function updateLikedCount() {
    const likedProducts = JSON.parse(localStorage.getItem('likedProducts')) || [];
    const likedCount = likedProducts.length;

    // Sayacı güncelle
    const likedCountElement = document.getElementById('liked-count');
    likedCountElement.textContent = likedCount;

    // Eğer beğenilen ürün sayısı varsa göster, yoksa gizle

}

// Ürün beğenme işlevi
function likeProduct(index, event) {
    const likedProductsKey = 'likedProducts';
    event.stopPropagation();
    let likedProducts = JSON.parse(localStorage.getItem(likedProductsKey)) || [];

    if (likedProducts.includes(index)) {
        likedProducts = likedProducts.filter(id => id !== index);
        document.querySelector(`.product[data-index="${index}"] .like-btn i`).classList.remove('fa-solid');
        document.querySelector(`.product[data-index="${index}"] .like-btn i`).classList.add('fa-regular');
        document.querySelector(`.product[data-index="${index}"] .like-btn i`).style.color = 'black';
    } else {
        likedProducts.push(index);
        document.querySelector(`.product[data-index="${index}"] .like-btn i`).classList.remove('fa-regular');
        document.querySelector(`.product[data-index="${index}"] .like-btn i`).classList.add('fa-solid');
        document.querySelector(`.product[data-index="${index}"] .like-btn i`).style.color = 'red';
    }

    localStorage.setItem(likedProductsKey, JSON.stringify(likedProducts));

    // Beğenilen ürün sayısını güncelle
    updateLikedCount();
}

// Sayfa yüklendiğinde beğenilen ürünleri yükle ve sayacı güncelle
window.onload = function() {
    const likedProductsKey = 'likedProducts';
    const likedProducts = JSON.parse(localStorage.getItem(likedProductsKey)) || [];
    const container = document.getElementById('liked-products-container');

    if (likedProducts.length === 0) {
        container.innerHTML = '<p>No liked products</p>';
    } else {
        likedProducts.forEach(index => {
            const product = getProductByIndex(index);
            if (product) {
                const isLiked = likedProducts.includes(index);
                const heartIconClass = isLiked ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
                const heartIconColor = isLiked ? 'style="color: #ff0000;"' : '';

                container.innerHTML += `
                  <div class="product col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item ${product.category}" data-index="${index}">
    <div class="product-card">
        <div class="product-card-image" onclick="openModal(${index})">
            <img src="${product.imgSrc}" alt="${product.name}">
            <button class="like-btn" onclick="likeProduct(${index}, event)">
                <i class="${heartIconClass}" ${heartIconColor}></i>
            </button>
        </div>
        <div class="product-card-body">
            <a href="product-detail.html" class="product-name">
                ${product.name}
            </a>
            <div class="product-description">
                ${product.description}
            </div>
            <div class="product-footer">
                <span class="product-price">
                    $${product.price.toFixed(2)}
                </span>
                <button class="add-to-cart-btn" onclick="addToCart(${index})">Add to cart</button>
            </div>
        </div>
    </div>
</div>`;
            }
        });
    }

    // Sayfa yüklendiğinde beğenilen ürün sayısını güncelle
    updateLikedCount();
}





// Modalı aç
function openModal(productIndex) {
    const product = products[productIndex];
    
    // Modal başlık, resim ve açıklamalarını güncelle
    const modalContent = `
    <div class="modal-content">
    <span class="close" onclick="hideModal()">&times;</span>
    <img id="modal-image" src="${product.imgSrc}" alt="${product.name}">
    <div id="product-info">
        <h2 id="modal-title">${product.name}</h2>
        <p id="modal-description">${product.description}</p>
        <div id="price-and-cart">
            <span id="modal-price">Price: $${product.price.toFixed(2)}</span>
           
            <button id="modal-add-to-cart-btn" onclick="addToCart(${productIndex})">
                <div class="default-btn">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="cart-icon">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    <span>Add to Cart</span>
                </div>
                <div class="hover-btn">
                    <svg viewBox="0 0 320 512" width="12.5" height="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z" fill="#ffffff"></path>
                    </svg>
                    <span>${product.price.toFixed(2)}</span>
                </div>
            </button>
        </div>
    </div>
</div>

    `;
    
    // Modal içeriğini güncelle
    modal.innerHTML = modalContent;
    
    // Modalı göster
    modal.style.display = 'block';
}



// Modalı kapat
function hideModal() {
    modal.style.display = 'none';
}

// Modal dışında bir yere tıklanırsa modalı kapat
window.onclick = function(event) {
    if (event.target === modal) {
        hideModal();
    }
}



function toggleSearchBar() {
    var searchBar = document.querySelector('.search-bar');
    searchBar.classList.toggle('active');
    document.getElementById('myInput').focus();
}

function searchbox() {
    var input, filter, filteredProducts;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    filteredProducts = products.filter(product => product.name.toUpperCase().indexOf(filter) > -1);
    displayProducts(filteredProducts);
}
function filterFunction() {
    const input = document.getElementById("myInput2");
    const filter = input.value.toUpperCase();
    const filteredProducts = products.filter(product => product.name.toUpperCase().indexOf(filter) > -1);

    const searchResults = document.getElementById("searchResults");
    searchResults.innerHTML = '';

    if (filter && filteredProducts.length > 0) {
        filteredProducts.forEach((product, index) => {
            const resultHTML = `
            <div class="search-result" onclick="openModal(${index})">
                <img src="${product.imgSrc}" alt="${product.name}">
                <div>
                    <p class="name">${product.name}</p>
                    <p>$${product.price.toFixed(2)}</p>
                </div>
            </div>
            `;
            searchResults.innerHTML += resultHTML;
        });
        searchResults.style.display = 'block'; // Arama sonuçlarını göster
    } else {
        searchResults.style.display = 'none'; // Arama sonuçlarını gizle
    }
}


function toggleDropdown() {
    const dropdownContent = document.getElementById("myDropdown2");
    const dropdownBtn2 = document.getElementById("dropdownBtn2");
    if (dropdownContent.classList.contains("show")) {
        dropdownContent.classList.remove("show");
        dropdownBtn2.style.display = "inline-block";
    } else {
        dropdownContent.classList.add("show");
        dropdownBtn2.style.display = "none";
    }
}

function clearSearch() {
    const input = document.getElementById("myInput2");
    input.value = '';
    filterFunction(); // Arama sonuçlarını temizle
    const searchResults = document.getElementById("searchResults");
    searchResults.innerHTML = ''; // Arama sonuçları konteynerini temizle
    searchResults.style.display = 'none'; // Arama sonuçlarını gizle
    const dropdownContent = document.getElementById("myDropdown2");
    dropdownContent.classList.remove("show"); // Arama çubuğunu (açılır içerik) gizle
    document.getElementById("dropdownBtn2").style.display = "inline-block"; // Açılır butonu göster
}

// Initial product display
displayProducts(products);

// Sepete ürün ekle
function addToCart(index, quantity = 1) {
    const product = products[index];
    const cartItemIndex = cart.findIndex(item => item.product.name === product.name);

    if (cartItemIndex === -1) {
        cart.push({ product, quantity });
    } else {
        cart[cartItemIndex].quantity += quantity;
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


