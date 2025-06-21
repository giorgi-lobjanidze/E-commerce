const top_bar = document.querySelector('.top-bar')
const navbar = document.querySelector('.navbar')
const nav_cart = document.querySelector('.nav-cart-icon')

document.addEventListener('scroll', function(){
    top_bar.classList.add('dissapear')
    navbar.classList.add('fixed')
    nav_cart.classList.remove('dissapear')
})


const blog_card_space = document.querySelector('.blog-card-space')
console.log(blog_card_space);

fetch('../API/blog.json')
.then(res => res.json())

.then((data) => {
        console.log(data);

        data.forEach(item => {
        const card = `
        <div class="col-6 mt-5">
        <div class="featured-card" style="transform: translateX(50px);">
          <div class="row blog-img-container" style="max-width: 33rem;">
            <a href="../blog-detail/blog-detail.html"><img src="${item.img}" class="w-100 blog-img"></a>
          </div>
          <div class="row" style="width: 33rem;">
            <p class="text-secondary pt-2" style="font-family: var(--font-family);">Feb 22 , 2025 * by Ui Paradox</p>
            <a href="../blog-detail/blog-detail.html"><h5 class="">${item.header}</h5></a>
            <p class="featured-new-price pt-2">Introduction Lorem ipsum maintenance is a fundamental aspect of vehicle care that...</p>
            <a href="../blog-detail/blog-detail.html" style="text-decoration: underline;">Read More</a>
          </div>
        </div>
      </div>
        `
        blog_card_space.innerHTML += card;
    })
        
})
.catch(err => {
        console.log(`error: ${err}`);
})

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