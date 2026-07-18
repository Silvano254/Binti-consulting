const forms = document.querySelectorAll("form.consultation-form");

forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (window.BintiWhatsApp?.openWhatsApp) {
            window.BintiWhatsApp.openWhatsApp(form);
        }

        form.reset();
    });
});

// Auto-select tent size in the inquiry form and scroll down smoothly
function initCardInquiries() {
    const inquiryButtons = document.querySelectorAll(".card-cta[data-tent-size]");
    const tentSelect = document.getElementById("tent-select");

    inquiryButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const tentSize = btn.getAttribute("data-tent-size");
            if (tentSelect && tentSize) {
                tentSelect.value = tentSize;
            }

            // Smooth scroll to the form section
            const targetSection = document.getElementById("quote-form");
            if (targetSection) {
                e.preventDefault();
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCardInquiries);
} else {
    initCardInquiries();
}