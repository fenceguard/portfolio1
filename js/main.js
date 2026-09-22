const search = document.querySelector(".search");
const searchinput = document.querySelector("input");
const searchicon = document.querySelector(".material-symbols-outlined")

search.addEventListener('click', function()
{
    searchinput.focus();
})

searchinput.addEventListener('focus', function()
{
    searchinput.setAttribute('placeholder', "통합검색")
})

searchinput.addEventListener('blur', function()
{
    searchinput.setAttribute('placeholder', "");
})

const badge = document.querySelector('header .badges');
window.addEventListener('scroll', _.throttle(function()
{
    if(window.scrollY > 200)
    {
        // badge.style.display = 'none';
        gsap.to(badge, .3, {opacity : 0});
    }
    else
    {
        // badge.style.display = 'flex';
        gsap.to(badge, .3, {opacity : 1});
    }
}, 200));

const fadein = document.querySelectorAll("main .fade-in");

fadein.forEach(function(fadein, i)
{
    gsap.to(fadein, 0.7, 
    {
        delay: (i + 1) * 0.7,
        opacity: 1,
    })
})

new Swiper('.noticeline .swiper-container',
{
    direction: 'vertical',
    autoplay: 
    {
        delay: 2000,
        speed: 1000
    },
    loop: true
})

new Swiper('.promotion .swiper-container',
{
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    pagination:
    {
        el: '.promotion .swiper-pagination',
        clickable: true
    },
    navigation:
    {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
})

const promotion = document.querySelector('.promotion');
const togglepromotion = document.querySelector('.toggle-promotion');
togglepromotion.addEventListener('click', function()
{
    promotion.classList.toggle('hide');
})