/* ===========================================================
   PORTFOLIO ANIMATIONS
   Yuvraj Singh Jadaun
=========================================================== */

/* ==========================================
   HERO ENTRANCE
========================================== */

window.addEventListener("load", () => {

    const hero = document.querySelector(".hero");

    if (hero) {

        hero.classList.add("show");

    }

});

/* ==========================================
   STAGGER ANIMATION
========================================== */

function staggerAnimation(selector, delay = 120) {

    const elements = document.querySelectorAll(selector);

    elements.forEach((element, index) => {

        element.style.opacity = "0";

        element.style.transform = "translateY(30px)";

        element.style.transition =
            "all .8s cubic-bezier(.2,.8,.2,1)";

        setTimeout(() => {

            element.style.opacity = "1";

            element.style.transform = "translateY(0)";

        }, index * delay);

    });

}

/* ==========================================
   PROJECTS
========================================== */

const projectSection = document.querySelector("#projects");

if (projectSection) {

    const projectObserver = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    staggerAnimation(".project-card", 150);

                }

            });

        },

        {

            threshold: .2

        }

    );

    projectObserver.observe(projectSection);

}

/* ==========================================
   TECH STACK
========================================== */

const stackSection = document.querySelector("#stack");

if (stackSection) {

    const stackObserver = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    staggerAnimation(".stack-card", 120);

                }

            });

        },

        {

            threshold: .2

        }

    );

    stackObserver.observe(stackSection);

}

/* ==========================================
   PROFILE CARDS
========================================== */

const profileCards = document.querySelectorAll(".profile-card");

profileCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.animate(

            [

                {

                    transform: "translateY(0)"

                },

                {

                    transform: "translateY(-8px)"

                }

            ],

            {

                duration: 250,

                fill: "forwards"

            }

        );

    });

    card.addEventListener("mouseleave", () => {

        card.animate(

            [

                {

                    transform: "translateY(-8px)"

                },

                {

                    transform: "translateY(0)"

                }

            ],

            {

                duration: 250,

                fill: "forwards"

            }

        );

    });

});

/* ==========================================
   BUTTON RIPPLE
========================================== */

document.querySelectorAll(".btn-primary,.btn-secondary")

.forEach(button => {

    button.addEventListener("click", e => {

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        ripple.style.left = e.offsetX + "px";

        ripple.style.top = e.offsetY + "px";

        button.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

/* ==========================================
   PARALLAX HERO
========================================== */

window.addEventListener("mousemove", e => {

    const profile = document.querySelector(".profile-card");

    if (!profile) return;

    const x = (window.innerWidth / 2 - e.clientX) / 50;

    const y = (window.innerHeight / 2 - e.clientY) / 50;

    profile.style.transform =

        `translate(${x}px,${y}px)`;

});

/* ==========================================
   COUNTER
========================================== */

function animateCounter(element, target) {

    let count = 0;

    const speed = target / 60;

    const timer = setInterval(() => {

        count += speed;

        if (count >= target) {

            count = target;

            clearInterval(timer);

        }

        element.textContent = Math.floor(count);

    }, 20);

}

/* ==========================================
   AUTO COUNTER
========================================== */

const stats = document.querySelectorAll("[data-count]");

const counterObserver = new IntersectionObserver(

entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

animateCounter(

entry.target,

parseInt(entry.target.dataset.count)

);

counterObserver.unobserve(entry.target);

}

});

},

{

threshold:.5

}

);

stats.forEach(stat=>{

counterObserver.observe(stat);

});

/* ==========================================
   END
========================================== */

console.log("Animation Engine Loaded");