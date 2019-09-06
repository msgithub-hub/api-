//全屏滑动
var swiper = new Swiper('.home', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    mousewheel: true,
    on: {
        init: function () {
            swiperAnimateCache(this);
            swiperAnimate(this);
        },
        slideChangeTransitionEnd: function () {
            swiperAnimate(this);
        }
    }
});

//1画面
var mySwiper1 = new Swiper('.swiper-container1', {
    //loop: true,
    //autoplay: true

    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    }
});

//2画面
var certifySwiper = new Swiper('.swiper-container2', {
    touchRatio:-1,
    watchSlidesProgress: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    //loop: true,
    loopedSlides: 3,
    autoplay: true,

    on: {
        progress: function (progress) {
            for (i = 0; i < this.slides.length; i++) {
                var slide = this.slides.eq(i);
                var slideProgress = this.slides[i].progress;
                modify = 1;
                if (Math.abs(slideProgress) > 1) {
                    modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                }
                translate = slideProgress * modify * 260 + 'px';
                scale = 1 - Math.abs(slideProgress) / 5;
                zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                slide.css('zIndex', zIndex);
                slide.css('opacity', 1);
                if (Math.abs(slideProgress) > 3) {
                    slide.css('opacity', 0);
                }
            }
        },
        setTransition: function (transition) {
            for (var i = 0; i < this.slides.length; i++) {
                var slide = this.slides.eq(i)
                slide.transition(transition);
            }

        }
    }

});

//5画面
var mySwiper5 = new Swiper('.swiper-container5', {
    slidesPerView: 2,
    spaceBetween: 10,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false
    }
});

//7画面
var mySwiper7 = new Swiper('.swiper-container7', {
    slidesPerView: 2,
    spaceBetween: 10,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,

});

//8画面
var mySwiper8 = new Swiper('.swiper-container8', {
    slidesPerView: 2,
    slidesPerColumn: 2,
    spaceBetween: 10,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false
    }


});


