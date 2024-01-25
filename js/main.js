const swiper = new Swiper(".materials__swiper", {
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-prev",
      prevEl: ".swiper-button-next",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    keyboard: true,
    loop: true,
    slidesPerView: 3
  });



const anchorsArray = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchorsArray){
  anchor.addEventListener("click", (e)=>{
    e.preventDefault()
    let element = anchor.getAttribute('href')
    document.querySelector(`${element}`).scrollIntoView({
      behavior: "smooth",
      block:"start"
    })
  })
}