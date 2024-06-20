
document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const checkbox = header.previousElementSibling;
            const icon = header.querySelector('.accordion-icon');

            if (checkbox.checked) {
                icon.textContent = '+';
            } else {
                icon.textContent = '−';
            }
        });
    });
});
