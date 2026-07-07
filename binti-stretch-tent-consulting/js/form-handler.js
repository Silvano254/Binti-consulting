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