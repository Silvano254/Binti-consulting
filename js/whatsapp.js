(function () {
    const DEFAULT_ADMIN_NUMBER = "254728307327";

    function getFieldLabel(field) {
        const group = field.closest(".form-group");
        const label = group?.querySelector("label");

        if (label?.textContent) {
            return label.textContent.trim();
        }

        return field.name || field.id || "Field";
    }

    function buildMessage(form) {
        const title = form.dataset.formTitle || "Website enquiry";
        const lines = [
            `New ${title}`,
            "",
            "Please review the details below:",
            ""
        ];

        const fields = form.querySelectorAll(
            "input:not([type=submit]):not([type=button]):not([type=reset]):not([type=hidden]), textarea, select"
        );

        fields.forEach((field) => {
            const value = field.value?.trim();

            if (value) {
                lines.push(`• ${getFieldLabel(field)}: ${value}`);
            }
        });

        if (lines[lines.length - 1] === "") {
            lines.push("No additional details provided.");
        }

        return lines.join("\n");
    }

    function openWhatsApp(form) {
        const phone = form.dataset.whatsappNumber || DEFAULT_ADMIN_NUMBER;
        const message = buildMessage(form);
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank", "noopener,noreferrer");
    }

    window.BintiWhatsApp = {
        buildMessage,
        openWhatsApp
    };
})();
