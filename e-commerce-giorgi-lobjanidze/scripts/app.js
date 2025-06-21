const top_bar = document.querySelector('.top-bar')
const navbar = document.querySelector('.navbar')
const nav_cart = document.querySelector('.nav-cart-icon')

document.addEventListener('scroll', function(){
    top_bar.classList.add('dissapear')
    navbar.classList.add('fixed')
    nav_cart.classList.remove('dissapear')
})

const card_container = document.querySelector('.shop-card-space');
const searchInput = document.querySelector('.shop-search');

let watchCard = [];

// filter

if(searchInput){
  searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  watchCard.forEach(watch => {
    const isVisible = watch.header.toLowerCase().includes(value);
    if(isVisible == false){
    watch.element.classList.add("hide");
    }
    else{
      watch.element.classList.remove("hide");
    }
  });
});



// add to cart

fetch('../API/products.json')
  .then(res => res.json())
  .then((data) => {
    watchCard = data.map((item, index) => {
      let insp;
      if ([1, 3, 10, 11].includes(index + 1)) {
        insp = '../inspect/inspect.html';
      } else if ([2, 6, 7, 8].includes(index + 1)) {
        insp = '../inspect/inspect2.html';
      } else {
        insp = '../inspect/inspect3.html';
      }

      const card = `
        <div class="col-4 mt-4 m-auto card-wrapper" style="transform: translateX(40px);">
          <div class="featured-card">
            <div class="row featured-img-container" style="width: 25rem;">
              <a href="${insp}"><img src="${item.img}" class="w-100 featured-img"></a>
            </div>
            <div class="row" style="width: 20rem;">
              <a href="${insp}"><h4 class="text-center pt-1" style="margin-left:30%">${item.header}</h4></a>
              <p class="featured-new-price text-center fs-4" style="margin-left:13%">${item.price}</p>
              <a href="${insp}"><button class="featured-button text-center" style="margin-left:30%">Select Options</button></a>
            </div>
          </div>
        </div>
      `;

      card_container.insertAdjacentHTML('beforeend', card);


      const docCard = card_container.querySelectorAll('.card-wrapper')
      const thisCard = docCard[docCard.length - 1];

      return {
        img: item.img,
        header: item.header,
        price: item.price,
        element: thisCard
      };
    });
  })
  .catch(err => {
    console.log(`error: ${err}`);
  });
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