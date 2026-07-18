document.addEventListener("DOMContentLoaded", () => {

    lucide.createIcons();

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Scroll-triggered transforms are expensive on long, image-rich pages.
    // Keep them for larger screens, where they are less likely to interrupt scrolling.
    if (window.AOS && !isMobile && !prefersReducedMotion) {
        AOS.init({
            duration: 700,
            once: true,
            offset: 80,
            easing: "ease-out-cubic"
        });
    }

});
