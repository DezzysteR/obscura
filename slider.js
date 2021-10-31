const slider = $(".feedback__list").bxSlider({
pager: false,
controls: false,
infiniteLoop: true,
touchEnabled: true,
hideControlOnEnd: false,
});

$(".button--prev").click((e) => {
    e.preventDefault();
    slider.goToPrevSlide();
});

$(".button--next").click((e) => {
    e.preventDefault();
    slider.goToNextSlide();
});

const portfolio = $(".portfolio__list").bxSlider({
    pager: false,
controls: false,
infiniteLoop: true,
touchEnabled: true,
hediControlOnEnd: false,
});

$("button--portfolio-prev").click((e) => {
    e.preventDefault();
    slider.goToPrevSlide();
});

$("button--portfolio-prev").click((e) => {
    e.preventDefault();
    slider.goToNextSlide();
});
