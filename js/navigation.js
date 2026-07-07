const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");
    }

});

const menuBtn = document.querySelector(".mobile-menu-btn");

const navMenu = document.querySelector(".nav-menu");

if(menuBtn && navMenu){

    menuBtn.addEventListener("click", () => {

        const isActive = navMenu.classList.toggle("active");

        menuBtn.classList.toggle("active", isActive);
        menuBtn.setAttribute("aria-expanded", String(isActive));

    });

    document.querySelectorAll(".nav-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");
            menuBtn.classList.remove("active");
            menuBtn.setAttribute("aria-expanded", "false");

        });

    });

}