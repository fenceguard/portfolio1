// const search = $(".search");
// const searchinput = $("input");

$(".search").click(function () 
{  
    $('input').focus();
})

$('input').focus(function () 
{
    $('input').attr('placeholder', "통합검색")
})

$('input').blur(function () 
{ 
    $('input').attr('placeholder', "");
});

const badge = $('header .badges');
$(window).scroll(_.throttle(function()
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

$("main .fade-in").each(function(i, fadein)
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

new Swiper('.awards .swiper-container',
{
    slidesPerView: 5,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    navigation:
    {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
})

$('.toggle-promotion').click(function() 
{
    $('.promotion').toggleClass('hide');
})

function floatingObject(selector, delay, size) 
{  
    gsap.to(selector, 1,
    {
        y: size,
        repeat: -1,
        yoyo: true,
        delay: delay
    });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);