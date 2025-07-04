// Scroll menu
$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        $('#navbar').addClass('_nav_fixed');
    }
    if ($(window).scrollTop() < 100) {
        $('#navbar').removeClass('_nav_fixed');
    }
});


// Services slider
$('.owl-carousel-services').owlCarousel({
    loop:true,
    margin:30,
    responsiveClass:true,
    nav:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            dots:true
        }
    }
})

// Single Services slider
$('.owl-carousel-singservices').owlCarousel({
    loop:true,
    margin:30,
    responsiveClass:true,
    nav:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:2,
            dots:true
        }
    }
})

// Feedback slide 
$('.owl-carousel-feedback').owlCarousel({
    loop:true,
    center:true,
    margin:30,
    responsiveClass:true,
    nav:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            dots:true
        }
    }
})

// MOBILE HEADER
// $("._menu_header_mob_btn i").click(function() {
//     $("._menu_head_mob").addClass("_menu_head_mob_open");
// });
// $("._menu_head_mob_close").click(function() {
//     $("._menu_head_mob").removeClass("_menu_head_mob_open");
// });


// MENU
// $("._menu_mob_btn i").click(function() {
//     $("._menu_mob").addClass("_menu_mob_open");
// });
// $("#_menu_head_mob_close2").click(function() {
//     $("._menu_mob").removeClass("_menu_mob_open");
// });

// $("._icon_rmv").click(function() {
//     $("._mbl_menu_main").removeClass("_active");
//     $("html").removeClass("modal-open");
//     $("._all_toggles").removeClass("_active");
//     $("._icon_rmv").removeClass("_active");
//     $("._icon_click").removeClass("_active");
// });

   


