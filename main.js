<<<<<<< HEAD
// Модальное окно (из Практики 3)
=======

>>>>>>> d3f648322ebc40f9b143184dbf5e036046b6d406
const dlg = document.getElementById('contactDialog');
const openBtn = document.getElementById('openDialog');
const closeBtn = document.getElementById('closeDialog');
const form = document.getElementById('contactForm');

let lastActiveElement = null;

<<<<<<< HEAD
openBtn?.addEventListener('click', () => {
=======
openBtn.addEventListener('click', () => {
>>>>>>> d3f648322ebc40f9b143184dbf5e036046b6d406
    lastActiveElement = document.activeElement;
    dlg.showModal();
    dlg.querySelector('input, select, textarea, button')?.focus();
});

<<<<<<< HEAD
closeBtn?.addEventListener('click', () => {
    dlg.close('cancel');
});

form?.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Сброс ошибок
=======
closeBtn.addEventListener('click', () => {
    dlg.close('cancel');
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

>>>>>>> d3f648322ebc40f9b143184dbf5e036046b6d406
    const allInputs = [...form.elements];
    allInputs.forEach(input => {
        if (input.setCustomValidity) {
            input.setCustomValidity('');
        }
        input.removeAttribute('aria-invalid');
    });

<<<<<<< HEAD
    // Валидация
    if (!form.checkValidity()) {
        form.reportValidity();
=======
    if (!form.checkValidity()) {
        form.reportValidity();

>>>>>>> d3f648322ebc40f9b143184dbf5e036046b6d406
        allInputs.forEach(input => {
            if (input.willValidate && !input.checkValidity()) {
                input.setAttribute('aria-invalid', 'true');
            }
        });
        return;
    }

<<<<<<< HEAD
    // Успешная отправка
    alert('Сообщение отправлено!');
=======
    alert('Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.');
>>>>>>> d3f648322ebc40f9b143184dbf5e036046b6d406
    form.reset();
    dlg.close('success');
});

<<<<<<< HEAD
dlg?.addEventListener('close', () => {
    lastActiveElement?.focus();
});

// Плавная прокрутка для якорных ссылок
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
=======
dlg.addEventListener('close', () => {
    lastActiveElement?.focus();
>>>>>>> d3f648322ebc40f9b143184dbf5e036046b6d406
});