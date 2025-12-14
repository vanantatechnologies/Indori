/*
$(document).ready(function () {
    $('.gallery-owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        center: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 1500,
        navText: [
            '<img src="./img/icons/left-arrow.svg" class="owl-custom-prev" alt="Previous">',
            '<img src="./img/icons/right-arrow.svg" class="owl-custom-next" alt="Next">'
        ],
        responsive: {
            0: {
                items: 1.2,
                margin: 15,
                center: true
            },
            575: {
                items: 1.5,
                margin: 20,
                center: true
            },
            767: {
                items: 2.2,
                margin: 20
            },
            992: {
                items: 2.5,
                margin: 25
            },
            1200: {
                items: 2.1,
                margin: 30
            }
        }
    });
});*/

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const webMenus = document.querySelectorAll(".web-menus");

menuToggle.addEventListener("click", () => {
    const isActive = menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active", isActive);

    if (navLinks.classList.contains("active")) {
        // Lock body scroll
        document.body.style.position = "fixed";
        document.body.style.top = `-${window.scrollY}px`;
        document.body.style.width = "100%";
    } else {
        // Restore scroll position
        const scrollY = document.body.style.top;
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
});

// ✅ Close menu after clicking a link
webMenus.forEach(link => {
    link.addEventListener("click", () => {
        // Only trigger close if nav is active (mobile)
        if (navLinks.classList.contains("active")) {
            menuToggle.classList.remove("active");
            navLinks.classList.remove("active");

            // Restore scroll position properly
            const scrollY = document.body.style.top;
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.width = "";
            window.scrollTo(0, parseInt(scrollY || "0") * -1);
        }
    });
});

$(document).ready(function () {
    // Clients Carousel
    $('.clients-owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        center: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 1500,
        navText: [
            '<img src="./img/icons/left-arrow.svg" class="owl-custom-prev" alt="Previous">',
            '<img src="./img/icons/right-arrow.svg" class="owl-custom-next" alt="Next">'
        ],
        responsive: {
            0: {
                items: 1.2,
                margin: 15,
                center: true
            },
            575: {
                items: 1.5,
                margin: 20,
                center: true
            },
            767: {
                items: 2.2,
                margin: 20
            },
            992: {
                items: 2.5,
                margin: 25
            },
            1200: {
                items: 2.5,
                margin: 30
            }
        }
    });

    // Gallery Carousel
    $('.gallery-owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        center: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 1500,
        navText: [
            '<img src="./img/icons/left-arrow.svg" class="owl-custom-prev" alt="Previous">',
            '<img src="./img/icons/right-arrow.svg" class="owl-custom-next" alt="Next">'
        ],
        responsive: {
            0: {
                items: 1.2,
                margin: 15,
                center: true
            },
            575: {
                items: 1.5,
                margin: 20,
                center: true
            },
            767: {
                items: 2.2,
                margin: 20
            },
            992: {
                items: 2.5,
                margin: 25
            },
            1200: {
                items: 2.5,
                margin: 30
            }
        }
    });

    // Products Carousel
    $('.products-owl-carousel').owlCarousel({
        loop: false,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: false,
        smartSpeed: 1200,
        autoplayTimeout: 3000,
        navText: [
            '<img src="./img/icons/left-arrow.svg" class="owl-custom-prev" alt="prev">',
            '<img src="./img/icons/right-arrow.svg" class="owl-custom-next" alt="next">'
        ],
        responsive: {
            0: {
                items: 1.2,
                margin: 15
            },
            575: {
                items: 1.5,
                margin: 20
            },
            767: {
                items: 2.2,
                margin: 20
            },
            992: {
                items: 2.5,
                margin: 25
            },
            1200: {
                items: 3,
                margin: 30
            }
        }
    });

    // Scroll event for navbar
    window.addEventListener("scroll", () => {
        const nav = document.querySelector(".top-navbar");
        if (window.scrollY > 50) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });
});
