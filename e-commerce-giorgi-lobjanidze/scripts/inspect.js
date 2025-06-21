const top_bar = document.querySelector('.top-bar')
const navbar = document.querySelector('.navbar')
const nav_cart = document.querySelector('.nav-cart-icon')

document.addEventListener('scroll', function(){
    top_bar.classList.add('dissapear')
    navbar.classList.add('fixed')
    nav_cart.classList.remove('dissapear')
})

const path = window.location.pathname;

if (!sessionStorage.getItem('cart')) {
    sessionStorage.setItem('cart', JSON.stringify([]));
}

let parsedCart = JSON.parse(sessionStorage.getItem('cart')) || [];

if (path.includes("inspect.html")) {
    const color_changer = document.querySelectorAll('.inspect-color-box');
    const small_images = document.querySelectorAll('.inspect-small-img-container');
    const quantity = document.querySelector('.inspect-quantity');
    const main_img = document.querySelector('.inspect-main-img');
    const add_to_cart = document.querySelector('.inspect-add-to-cart');
    const inspect_header = document.querySelector('.inspect-header');
    const inspect_price = document.querySelector('.inspect-price');
    console.log(inspect_price.innerHTML);
    
    if (main_img) {
        main_img.setAttribute("src", "../images/e-com13.webp");

        color_changer[0].addEventListener("click", () => main_img.setAttribute("src", "../images/e-com15.webp"));
        color_changer[1].addEventListener("click", () => main_img.setAttribute("src", "../images/e-com41.webp"));
        color_changer[2].addEventListener("click", () => main_img.setAttribute("src", "../images/e-com13.webp"));
        color_changer[3].addEventListener("click", () => main_img.setAttribute("src", "../images/e-com20.webp"));

        small_images[0].addEventListener("click", () => main_img.setAttribute("src", "../images/e-com13.webp"));
        small_images[1].addEventListener("click", () => main_img.setAttribute("src", "../images/e-com41.webp"));
        small_images[2].addEventListener("click", () => main_img.setAttribute("src", "../images/e-com15.webp"));
        small_images[3].addEventListener("click", () => main_img.setAttribute("src", "../images/e-com20.webp"));
    }

    if (add_to_cart) {
        add_to_cart.addEventListener("click", function () {
            const quantity_value = quantity.value;
            const img = main_img.getAttribute("src");
            const cart_card = {
                name: inspect_header.innerText,
                quantity: Number(quantity_value),
                price: 203,
                img: img
            };
            console.log(cart_card);
            

            addToCart(cart_card);
        });
    }
}

// !

if (path.includes("inspect2.html")) {
    const color_changer = document.querySelectorAll('.inspect-color-box');
    const small_images = document.querySelectorAll('.inspect-small-img-container');
    const quantity = document.querySelector('.inspect-quantity');
    const main_img = document.querySelector('.inspect-main-img');
    const add_to_cart = document.querySelector('.inspect-add-to-cart');
    const inspect_header = document.querySelector('.inspect-header');
    const inspect_price = document.querySelector('.inspect-price');
    
    if (main_img) {
        main_img.setAttribute("src", "../images/e-com21.webp");

        color_changer[0].addEventListener("click", () => main_img.setAttribute("src", "../images/e-com21.webp"));
        color_changer[1].addEventListener("click", () => main_img.setAttribute("src", "../images/e-com18.webp"));
        color_changer[2].addEventListener("click", () => main_img.setAttribute("src", "../images/e-com19.webp"));
        color_changer[3].addEventListener("click", () => main_img.setAttribute("src", "../images/e-com17.webp"));

        small_images[0].addEventListener("click", () => main_img.setAttribute("src", "../images/e-com21.webp"));
        small_images[1].addEventListener("click", () => main_img.setAttribute("src", "../images/e-com18.webp"));
        small_images[2].addEventListener("click", () => main_img.setAttribute("src", "../images/e-com19.webp"));
        small_images[3].addEventListener("click", () => main_img.setAttribute("src", "../images/e-com17.webp"));
    }

    if (add_to_cart) {
        add_to_cart.addEventListener("click", function () {
            const quantity_value = quantity.value;
            const img = main_img.getAttribute("src");
            const cart_card = {
                name: inspect_header.innerText,
                quantity: Number(quantity_value),
                price: 186,
                img: img
            };
            console.log(cart_card);
            

            addToCart(cart_card);
        });
    }
}


if (path.includes("inspect3.html")) {
    const color_changer = document.querySelectorAll('.inspect-color-box3');
    const small_images = document.querySelectorAll('.inspect-small-img-container');
    const quantity = document.querySelector('.inspect-quantity');
    const main_img = document.querySelector('.inspect-main-img');
    const add_to_cart = document.querySelector('.inspect-add-to-cart');
    const inspect_header = document.querySelector('.inspect-header');
    const inspect_price = document.querySelector('.inspect-price');
    
    if (main_img) {
        main_img.setAttribute("src", "../images/e-com43.webp");

        color_changer[0].addEventListener("click", () => main_img.setAttribute("src", "../images/e-com43.webp"));
        color_changer[1].addEventListener("click", () => main_img.setAttribute("src", "../images/e-com16.webp"));
        color_changer[2].addEventListener("click", () => main_img.setAttribute("src", "../images/e-com42.webp"));
        color_changer[3].addEventListener("click", () => main_img.setAttribute("src", "../images/e-com14.webp"));

        small_images[0].addEventListener("click", () => main_img.setAttribute("src", "../images/e-com43.webp"));
        small_images[1].addEventListener("click", () => main_img.setAttribute("src", "../images/e-com16.webp"));
        small_images[2].addEventListener("click", () => main_img.setAttribute("src", "../images/e-com42.webp"));
        small_images[3].addEventListener("click", () => main_img.setAttribute("src", "../images/e-com14.webp"));
    }

    if (add_to_cart) {
        add_to_cart.addEventListener("click", function () {
            const quantity_value = quantity.value;
            const img = main_img.getAttribute("src");
            const cart_card = {
                name: inspect_header.innerText,
                quantity: Number(quantity_value),
                price: 265,
                img: img
            };
            console.log(cart_card);
            

            addToCart(cart_card);
        });
    }
}

if (path.includes("cart.html")) {
    displayCart();
}

function addToCart(product) {
    parsedCart = JSON.parse(sessionStorage.getItem('cart')) || [];

    const existingItem = parsedCart.find(item =>
        item.img === product.img &&
        item.price === product.price &&
        item.name === product.name
    );

    if (existingItem) {
        existingItem.quantity += product.quantity;
    } else {
        parsedCart.push(product);
    }

    sessionStorage.setItem('cart', JSON.stringify(parsedCart));
    console.log("Updated Cart:", parsedCart);
    displayCart();
    updateCartBadge()
}

function displayCart() {
    const shipping = document.querySelector('.free-ship')
    const total_container = document.querySelector('.grand-total-container')
    const cart_total = document.querySelector('.total')
    const delivery = document.querySelector('.delivery')
    const grand_total = document.querySelector('.grand-total')
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    const cart_container = document.querySelector('.cart-container');
    let total = 0;

    if (!cart_container) return;

    cart_container.innerHTML = `<div class="row" style="width: 102%; border-bottom: 1px solid black;">
            <div class="col-6 fs-4">Product</div>
            <div class="col-2" style="transform: translateX(-50%);">Quantity</div>
            <div class="col-2" style="transform: translateX(-17%);">Subtotal:</div>
            <div class="col-2" style="transform: translateX(10%);">Remove</div>
        </div>`;

    if (cart.length === 0) {
        total_container.classList.add('hide')
        cart_container.innerHTML = `<p class="text-center fs-1">Your cart is empty</p>
        <svg width="100" height="100" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 46%">
<path d="M70.6467 37.8178C70.5702 37.0338 69.9916 36.3901 69.1367 36.1376L62.2007 34.0896L68.9531 27.3346C69.4014 26.8862 69.5889 26.2933 69.4678 25.708C69.3466 25.1227 68.933 24.6244 68.3331 24.341L59.6217 20.2255C59.0524 19.9567 58.3415 20.1409 58.0329 20.6371C57.7246 21.1333 57.936 21.7535 58.5049 22.0223L67.0967 26.0813L59.9009 33.2797L37.1725 22.5419L41.3898 18.3232C41.8752 18.4785 42.3992 18.5632 42.9455 18.5632C44.6416 18.5632 46.1221 17.7453 46.8975 16.5386L53.4099 19.6153C53.5874 19.6991 53.7785 19.7389 53.9671 19.7389C54.3834 19.7389 54.7863 19.5451 54.9987 19.2036C55.307 18.7074 55.0955 18.0872 54.5265 17.8184L47.4696 14.4846C47.39 12.3681 45.392 10.6673 42.9456 10.6673C40.4491 10.6673 38.4179 12.4384 38.4179 14.6153C38.4179 15.5737 38.812 16.4532 39.4658 17.1378L35.3276 21.2775L27.9962 13.9436C27.304 13.2511 26.1738 13.073 25.2471 13.5106L22.3813 14.8645C22.0455 12.549 19.7741 10.7519 17.0289 10.7519C14.0533 10.7519 11.6323 12.8629 11.6323 15.4577C11.6323 16.8923 12.3734 18.1783 13.5383 19.0421L2.32195 24.341C1.72225 24.6244 1.30881 25.1225 1.18741 25.708C1.06631 26.2933 1.25381 26.8862 1.7021 27.3345L8.45433 34.0894L1.5185 36.1373C0.663654 36.3898 0.085057 37.0335 0.00849408 37.8175C-0.0680689 38.6014 0.377246 39.3213 1.17069 39.6962L9.31558 43.544V47.4009C9.31558 47.9652 9.84012 48.4227 10.4875 48.4227C11.1348 48.4227 11.6593 47.9652 11.6593 47.4009V44.6512L23.0544 50.0345C23.5405 50.2642 24.0829 50.381 24.6272 50.381C24.9832 50.381 25.3402 50.331 25.6827 50.2299L34.1559 47.7283V68.0589L12.1587 57.6665C11.8508 57.521 11.6595 57.2408 11.6595 56.9354V52.4453C11.6595 51.881 11.135 51.4235 10.4876 51.4235C9.84027 51.4235 9.31574 51.881 9.31574 52.4453V56.9354C9.31574 57.9915 9.97715 58.9601 11.0422 59.4633L33.757 70.1948C34.2489 70.4272 34.7884 70.5433 35.3279 70.5433C35.8675 70.5433 36.407 70.4271 36.8989 70.1948L59.6137 59.4633C60.6785 58.9601 61.3401 57.9915 61.3401 56.9354V43.5438L69.4848 39.696C70.2778 39.3216 70.7233 38.6018 70.6467 37.8178ZM37.9183 29.9126C42.0205 30.9181 44.8855 34.2166 44.8855 37.934C44.8855 38.9692 44.6722 39.9738 44.2506 40.9258L35.3276 45.1413L26.4046 40.9258C25.9832 39.9738 25.7697 38.9692 25.7697 37.934C25.7697 34.2051 28.6457 30.9038 32.7638 29.9058C33.3873 29.7547 33.7523 29.1913 33.579 28.6477C33.4059 28.104 32.7595 27.7858 32.1362 27.9368C27.0079 29.1798 23.4261 33.2906 23.4261 37.934C23.4261 38.4939 23.4782 39.0467 23.5782 39.5906L12.9475 34.5682L35.3279 23.9949L57.7082 34.5683L47.0775 39.5907C47.1775 39.0468 47.2296 38.4941 47.2296 37.9341C47.2296 33.3049 43.6616 29.1975 38.5528 27.9452C37.9297 27.7924 37.2826 28.1093 37.1076 28.6524C36.932 29.1957 37.295 29.7599 37.9183 29.9126ZM42.9455 12.7113C44.1497 12.7113 45.1295 13.5655 45.1295 14.6155C45.1295 15.6656 44.1497 16.52 42.9455 16.52C41.7412 16.52 40.7616 15.6656 40.7616 14.6155C40.7616 13.5655 41.7412 12.7113 42.9455 12.7113ZM17.0289 12.7959C18.7122 12.7959 20.0819 13.99 20.0819 15.4579C20.0819 16.9257 18.7122 18.12 17.0289 18.12C15.3456 18.12 13.9761 16.9258 13.9761 15.4579C13.9761 13.99 15.3456 12.7959 17.0289 12.7959ZM16.202 20.1084C16.4717 20.1447 16.7478 20.1637 17.0289 20.1637C19.213 20.1637 21.0966 19.0259 21.9452 17.3951L26.2868 15.344L33.4824 22.5422L10.754 33.28L3.5582 26.0816L16.202 20.1084ZM24.9308 48.2945C24.6802 48.3686 24.403 48.3478 24.1708 48.238L11.0509 42.0398C11.0475 42.0382 11.0439 42.0366 11.0404 42.0349L2.50695 38.0035L10.3786 35.6793L32.4084 46.087L24.9308 48.2945ZM58.9959 56.9358C58.9959 57.2412 58.8045 57.5214 58.4967 57.6669L36.4995 68.0593V47.7287L44.9727 50.2303C45.3152 50.3314 45.6722 50.3814 46.0283 50.3814C46.5724 50.3814 47.1149 50.2645 47.601 50.0349L58.996 44.6516V56.9358H58.9959ZM46.4842 48.238C46.2521 48.3478 45.9749 48.3686 45.7242 48.2945L38.2468 46.087L60.2767 35.6793L68.1483 38.0035L46.4842 48.238ZM68.385 38.0734C68.3848 38.0734 68.3847 38.0732 68.3844 38.0732L68.385 38.0734Z" fill="#D7DBE0"></path>
<path d="M44.0911 58.6479L41.4028 59.9179C40.8338 60.1867 40.6225 60.8069 40.9308 61.3031C41.143 61.6445 41.5461 61.8384 41.9624 61.8384C42.1508 61.8384 42.3422 61.7986 42.5195 61.7148L45.2078 60.4448C45.7769 60.176 45.9881 59.5558 45.6798 59.0596C45.3716 58.5634 44.6606 58.3789 44.0911 58.6479Z" fill="#D7DBE0"></path>
<path d="M21.5297 9.39234C21.7586 9.5918 22.0586 9.69167 22.3585 9.69167C22.6583 9.69167 22.9583 9.59194 23.1872 9.39234L24.1539 8.5494L25.1207 9.39234C25.3496 9.5918 25.6496 9.69167 25.9494 9.69167C26.2493 9.69167 26.5493 9.59194 26.7782 9.39234C27.2358 8.99328 27.2358 8.34626 26.7782 7.94734L25.8113 7.10427L26.7782 6.2612C27.2358 5.86214 27.2358 5.21512 26.7782 4.8162C26.3203 4.41714 25.5785 4.41714 25.1208 4.8162L24.1541 5.65914L23.1874 4.8162C22.7296 4.41714 21.9877 4.41714 21.53 4.8162C21.0724 5.21526 21.0724 5.86228 21.53 6.2612L22.4969 7.10427L21.53 7.94734C21.0721 8.34626 21.0721 8.99328 21.5297 9.39234Z" fill="#D7DBE0"></path>
<path d="M56.2241 16.086C56.453 16.2855 56.753 16.3853 57.0528 16.3853C57.3526 16.3853 57.6526 16.2856 57.8816 16.086L58.8483 15.2431L59.815 16.086C60.0439 16.2855 60.3439 16.3853 60.6437 16.3853C60.9436 16.3853 61.2436 16.2856 61.4725 16.086C61.9301 15.6869 61.9301 15.0399 61.4725 14.641L60.5056 13.7979L61.4725 12.9549C61.9301 12.5558 61.9301 11.9088 61.4725 11.5099C61.0147 11.1108 60.2728 11.1108 59.8151 11.5099L58.8484 12.3528L57.8817 11.5099C57.4239 11.1108 56.682 11.1108 56.2244 11.5099C55.7667 11.9089 55.7667 12.5559 56.2244 12.9549L57.1912 13.7979L56.2244 14.641C55.7664 15.0399 55.7664 15.6869 56.2241 16.086Z" fill="#D7DBE0"></path>
<path d="M49.7541 9.69083C52.5694 9.69083 54.8597 7.69378 54.8597 5.23908C54.8595 2.78425 52.5692 0.787201 49.7541 0.787201C46.9389 0.787201 44.6484 2.78425 44.6484 5.23908C44.6484 7.69378 46.9387 9.69083 49.7541 9.69083ZM49.7541 2.83085C51.2769 2.83085 52.5159 3.91112 52.5159 5.23908C52.5159 6.56691 51.2769 7.64718 49.7541 7.64718C48.2312 7.64718 46.9922 6.56691 46.9922 5.23908C46.9922 3.91112 48.2312 2.83085 49.7541 2.83085Z" fill="#D7DBE0"></path>
<path d="M35.195 39.0057C34.0659 39.0057 33.0003 39.3321 32.1928 39.9259C31.6981 40.2897 31.6351 40.9344 32.0525 41.3657C32.4695 41.7972 33.2089 41.852 33.7037 41.4882C34.0834 41.209 34.6265 41.0492 35.1951 41.0492H35.2029C35.7744 41.0507 36.3195 41.2135 36.699 41.496C36.9198 41.6603 37.1903 41.7405 37.4592 41.7405C37.7903 41.7405 38.1194 41.6189 38.3511 41.3821C38.7712 40.9529 38.7128 40.3078 38.2206 39.9414C37.4137 39.3409 36.3444 39.0084 35.2097 39.0054C35.2048 39.0057 35.1998 39.0057 35.195 39.0057Z" fill="#D7DBE0"></path>
<path d="M30.2373 35.9796H30.2263C29.5785 35.9713 29.0565 36.4301 29.0518 36.9943C29.0474 37.5586 29.5738 38.0193 30.221 38.0232H30.2293C30.8726 38.0232 31.3965 37.5703 31.401 37.0085C31.4055 36.4442 30.8846 35.9835 30.2373 35.9796Z" fill="#D7DBE0"></path>
<path d="M40.1992 38.0023C40.2033 38.0029 40.2075 38.0033 40.2116 38.004C40.2453 38.0097 40.2796 38.0145 40.3142 38.0176C40.3255 38.0186 40.3369 38.0186 40.3481 38.0193C40.3742 38.0209 40.4003 38.0231 40.4271 38.0232H40.4353C40.4756 38.0232 40.5155 38.0215 40.5549 38.0179C41.1466 37.9663 41.6085 37.5309 41.6085 37.0013C41.6085 36.4786 41.1583 36.0485 40.5778 35.9876C40.5725 35.9871 40.5674 35.986 40.5621 35.9856C40.5353 35.9831 40.508 35.9824 40.4807 35.9815C40.4682 35.9811 40.456 35.9797 40.4433 35.9796H40.4372C40.4371 35.9796 40.4367 35.9796 40.4366 35.9796H40.4324H40.4255C40.425 35.9796 40.4246 35.9796 40.4241 35.9796C39.7808 35.9796 39.2624 36.4325 39.2578 36.9943C39.2539 37.4907 39.6608 37.9065 40.1992 38.0023Z" fill="#D7DBE0"></path>
</svg>
<br>

<a href="../products/shop.html"><p class="cart-continue text-center fs-3 mt-2">Continue Shopping</p></a>` ;
        cart_total.innerHTML = `$0`
        delivery.innerHTML = '$50';
        grand_total.innerHTML = `$0`
        return;
}

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const card = `
            <div class="row mt-5" style="width: 100%;">
                <div class="col-3">
                    <img src="${item.img}" alt="" class="w-50">
                </div>
                <div class="col-3" style="margin-left: -150px;">
                    <h3 class="">${item.name}</h3>
                    <p class="fs-5">$${item.price}</p>
                </div>
                <div class="col-2 fs-3 ms-5 ps-5 pt-5"><input type="number" data-index="${index}" value="${item.quantity}" min="1" class="inspect-quantity cart-quantity ps-2" style="width: 80px; margin-left:-25%"></div>
                <div class="col-2 fs-3 ms-5 ps-5 pt-5">$${itemTotal}</div>
                <div class="col-2">
                     <button class="btn btn-link text-danger remove-btn" data-index="${index}" style="border: none; margin-left:-30%">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                        </svg>
                    </button>
                </div>
            </div>
        `;
        cart_container.innerHTML += card;
    });

    cart_total.innerHTML = `$${total}`
    if(total<500){
        delivery.innerHTML = '$50';
        grand_total.innerHTML = `$${total+50}`
        shipping.innerHTML = `Spend $${500-total} more and get <span class="fw-bold">Free Shipping!</span>`
    } else{
        delivery.innerHTML = 'Free';
        grand_total.innerHTML = `$${total}`
        shipping.innerHTML = `Congratulations! You've got <span class="fw-bold">Free Shipping!</span>`
    }
    
    
    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', function (){
        const index = this.getAttribute('data-index');
        removeFromCart(index);
        });
    }); 
    updateCartQuantity()
}

function removeFromCart(index) {
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    sessionStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    updateCartBadge()
}

function updateCartQuantity(){
    document.querySelectorAll('.cart-quantity').forEach(input => {
        input.addEventListener("change", function(){
            let cart = JSON.parse(sessionStorage.getItem('cart'));
            let index = this.getAttribute("data-index");
            cart[index].quantity = parseInt(this.value)
            sessionStorage.setItem('cart', JSON.stringify(cart))
            displayCart()
            updateCartBadge()
        })
    })
}

function updateCartBadge(){
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0)
    const badge = document.querySelectorAll('.cart-item-count')
    console.log(badge);
    
    badge.forEach(badge =>{
        if(badge){
            if(cartCount>0){
            badge.textContent = cartCount;
            badge.style.display = "block";
            } else {
            badge.style.display = "none";
            }
        }   
    })
    
}

updateCartBadge()