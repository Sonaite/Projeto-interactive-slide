const sliderTabs = document.querySelectorAll(".slider-tab");
const swiper = new Swiper(".slider-container", {
    effect: "fade",
    speed:1300,
    //autoplay: {delay:4000}

});


//update the slide on tab click

sliderTabs.forEach((tab, index) => {
    tab.addEventListener("click" , () => {
        swiper.slideTo(index);
    });
});