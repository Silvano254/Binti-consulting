// FAQ Accordion Toggle
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionButton = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        if (questionButton && answer) {
            const answerId = `faq-answer-${Array.from(faqItems).indexOf(item) + 1}`;
            answer.id = answerId;
            answer.setAttribute('role', 'region');
            answer.setAttribute('aria-hidden', 'true');
            questionButton.setAttribute('aria-expanded', 'false');
            questionButton.setAttribute('aria-controls', answerId);
            questionButton.addEventListener('click', function() {
                // Close other open items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                        otherItem.querySelector('.faq-answer').setAttribute('aria-hidden', 'true');
                    }
                });

                // Toggle current item
                const isOpen = item.classList.toggle('active');
                questionButton.setAttribute('aria-expanded', String(isOpen));
                answer.setAttribute('aria-hidden', String(!isOpen));
            });
        }
    });
});
