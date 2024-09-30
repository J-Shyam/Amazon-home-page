import { todayDeal } from "./todaydeals.js";


const imgs = document.querySelectorAll('.header-carosel ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 0;
let slideInterval = null;

function changeSlide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';  
    }
    imgs[n].style.display = 'block';
}

function startSlider() {
    slideInterval = setInterval(() => {
         n = (n + 1) % imgs.length;
         changeSlide();
    },3000);
}

function stopSlider() {
    clearInterval(slideInterval);
    slideInterval = null;
}

changeSlide();
startSlider();

prev_btn.addEventListener("click",() => {
    stopSlider();
    if (n > 0) {
        n--;
    }else{
        n = imgs.length - 1;
    }
    changeSlide();
    startSlider();
});

next_btn.addEventListener("click", () => {
    stopSlider();
    if (n < imgs.length - 1) {
        n++;
    }else{
        n = 0;
    }
    changeSlide();
    startSlider();
});
    

// ......Today-deals.....
console.log(todayDeal)
let todayDealProductListEl = document.querySelector(".today-deals-product-list")
console.log(todayDealProductListEl)

let todayDealProductHTML = ""

let todayDeallength = todayDeal.length

for(let i = 0; i < todayDeallength ; i++){
    // console.log(todayDeal[i])

    todayDealProductHTML += `
                    <div class="today-deals-product-item">
                       <img src=${todayDeal[i].img} /> 
                    </div>
    `
}

todayDealProductListEl.innerHTML = todayDealProductHTML


// console.log(todayDealProductHTML)

let leftbtnprevEl = document.getElementById("left-btn")
let rightbtnnextEl = document.getElementById("right-btn")
let todaydealsproductitemEl = document.querySelectorAll(".today-deals-product-item")

let startProduct = 0;

leftbtnprevEl.addEventListener("click", () => {




    if(startProduct < 0){
        startProduct += 600
    }
    if(startProduct > -1200){


        todaydealsproductitemEl.forEach(el => {
            el.style.transform = `translateX(${startProduct}%)`
        })

    }

})

rightbtnnextEl.addEventListener("click", () => {
    
if(startProduct > -1200){
    startProduct -= 600
}
    todaydealsproductitemEl.forEach(el => {
        el.style.transform = `translateX(${startProduct}%)`
    })
 
})



// ---------------------60% off Slider-2------------------------

const scrollContainer = document.querySelectorAll("products");
for (const item of scrollContainer) {
    item.addEventListener('wheel', (evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
}


