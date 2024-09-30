// -------------- sidebar navigation-----

const sidebarNavigationEl = document.getElementById("sidebar-container-navigation");
const sidebarOpenNavigationEl = document.getElementById("open-nav-sidebar");
const sidebarCloseNavigationEl = document.getElementById("sidebar-container-close")
// const primeImageEl = document. getElementById("prime-image-hover")
// const primeImageHoverEl = document.getElementById("prime-image-after")



// console.log(sidebarNavigationEl)

sidebarOpenNavigationEl.addEventListener("click", ()=>{
    sidebarNavigationEl.classList.toggle("slidebar-show")
});

sidebarCloseNavigationEl.addEventListener("click",()=>{
    sidebarNavigationEl.classList.toggle("slidebar-show")
});

// prime image hover

// primeImageHoverEl = addEventListener("click",()=>{
// primeImageEl.classList.toggle("prime-image-after")
// })