
const dlg = document.getElementById('contactDialog');
const openBtn = document.getElementById('openDialog');
const closeBtn = document.getElementById('closeDialog');
const form = document.getElementById('contactForm');

let lastActiveElement = null;

openBtn?.addEventListener('click', () => {
    lastActiveElement = document.activeElement;
    dlg.showModal();
    dlg.querySelector('input, select, textarea, button')?.focus();
});

closeBtn?.addEventListener('click', () => {
    dlg.close('cancel');
});

form?.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const allInputs = [...form.elements];
    allInputs.forEach(input => {
        if (input.setCustomValidity) {
            input.setCustomValidity('');
        }
        input.removeAttribute('aria-invalid');
    });

    if (!form.checkValidity()) {
        form.reportValidity();
        allInputs.forEach(input => {
            if (input.willValidate && !input.checkValidity()) {
                input.setAttribute('aria-invalid', 'true');
            }
        });
        return;
    }

    alert('Сообщение отправлено!');
    form.reset();
    dlg.close('success');
});

dlg?.addEventListener('close', () => {
    lastActiveElement?.focus();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});