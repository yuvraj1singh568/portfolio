/* ======================================================
   PORTFOLIO APP
   Yuvraj Singh Jadaun
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================
       SELECTORS
    ====================================== */

    const navbar = document.querySelector("header");
    const progressBar = document.querySelector(".progress-bar");
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("section");
    const themeBtn = document.getElementById("themeToggle");

    /* ======================================
       STICKY NAVBAR
    ====================================== */

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            navbar.classList.add("sticky");

        } else {

            navbar.classList.remove("sticky");

        }

    });

    /* ======================================
       SCROLL PROGRESS BAR
    ====================================== */

    function updateProgressBar() {

        const totalHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const progress =
            (window.scrollY / totalHeight) * 100;

        progressBar.style.width = progress + "%";
    }

    window.addEventListener("scroll", updateProgressBar);

    /* ======================================
       SCROLL TO TOP
    ====================================== */

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            scrollTopBtn.classList.add("show");

        } else {

            scrollTopBtn.classList.remove("show");

        }

    });

    scrollTopBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /* ======================================
       ACTIVE NAV LINK
    ====================================== */

    function activeMenu() {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") === "#" + current
            ) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", activeMenu);

    /* ======================================
       SMOOTH NAVIGATION
    ====================================== */

    navLinks.forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(

                this.getAttribute("href")

            );

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });

    /* ======================================
       THEME TOGGLE
    ====================================== */

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (
            document.body.classList.contains("dark-mode")
        ) {

            themeBtn.innerHTML =
                '<i class="fa-solid fa-sun"></i>';

        } else {

            themeBtn.innerHTML =
                '<i class="fa-solid fa-moon"></i>';

        }

    });

});
/* ======================================================
   MOBILE MENU
====================================================== */

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-links");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("show-menu");

        if (navMenu.classList.contains("show-menu")) {

            menuBtn.innerHTML =
                '<i class="fa-solid fa-xmark"></i>';

        } else {

            menuBtn.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        }

    });

    navMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("show-menu");

            menuBtn.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        });

    });

}

/* ======================================================
   SCROLL REVEAL
====================================================== */

const revealElements = document.querySelectorAll(

".section,.project-card,.stack-card,.profile-card,.opensource-card,.about-card,.timeline-item"

);

const revealObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:0.15

}

);

revealElements.forEach(el=>{

el.classList.add("fade-up");

revealObserver.observe(el);

});

/* ======================================================
   CARD HOVER EFFECT
====================================================== */

document.querySelectorAll(

".project-card,.stack-card,.profile-card"

).forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transition=".35s";

});

});

/* ======================================================
   IMAGE LAZY LOADING
====================================================== */

const images = document.querySelectorAll("img");

const imageObserver = new IntersectionObserver(

(entries,observer)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const img = entry.target;

if(img.dataset.src){

img.src = img.dataset.src;

}

observer.unobserve(img);

}

});

}

);

images.forEach(img=>{

imageObserver.observe(img);

});

/* ======================================================
   PAGE LOADER
====================================================== */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

/* ======================================================
   CONSOLE MESSAGE
====================================================== */

console.log(

"%cWelcome to Yuvraj Singh Jadaun's Portfolio",

"color:#111;font-size:18px;font-weight:bold;"

);

console.log(

"%cInterested in the code? Let's connect!",

"color:#666;font-size:14px;"

);

/* ======================================================
   PERFORMANCE
====================================================== */

window.addEventListener(

"touchstart",

()=>{},

{passive:true}

);

window.addEventListener(

"wheel",

()=>{},

{passive:true}

);

/* ======================================================
   END
====================================================== */