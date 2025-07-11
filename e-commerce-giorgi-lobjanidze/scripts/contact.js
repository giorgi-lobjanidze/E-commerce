const contact_card_space = document.querySelector('.contact-card-space')
console.log(contact_card_space);

fetch('../API/contact.json')
.then(res => res.json())

.then((data) => {
        console.log(data);

        data.forEach(item => {
    const card = `
        <div class="col-3">
            <div class="store-card">
            <div class="row">
                <img src="${item.img}" alt="" style="width: 341px; height: 220px;">
            </div>
            <div class="row">
                <h4 class="pt-3" style="font-family: var(--font-family);">${item.header}</h4>
                <p class="text-secondary" style="font-size: 17px; margin-top: -10px;">${item.location}</p>
                <p class="fs-4" style="font-weight: 600;"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-telephone me-2" viewBox="0 0 16 16" style="margin-top: -5px;">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                    </svg> ${item.number}</p>
            </div>
        </div>
        </div>
        `
        contact_card_space.innerHTML += card;
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