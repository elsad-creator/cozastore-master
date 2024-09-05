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

// Başlangıçta tüm ürünleri göster
displayProducts(products);





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
function filterFunction() {
    const input = document.getElementById("myInput2");
    const filter = input.value.toUpperCase();
    const filteredProducts = products.filter(product => product.name.toUpperCase().indexOf(filter) > -1);

    const searchResults = document.getElementById("searchResults");
    searchResults.innerHTML = '';

    if (filter && filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            const resultHTML = `
            <div class="search-result">
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


