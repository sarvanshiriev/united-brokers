// Логика открытия-закрытия ответов на вопросы
const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach(item => {
    const answer = item.querySelector('.faq__item-answer');
    const link = item.querySelector('.faq__item-link');
    item.addEventListener('click', () => {
        const isAnswerVisible = getComputedStyle(answer).display !== 'none';

        if (!isAnswerVisible) {
            answer.style.display = 'block';
            link.classList.toggle('rotate');
        } else {
            answer.style.display = 'none';
            link.classList.toggle('rotate');
        }
    });

    link.addEventListener('click', event => {
        event.preventDefault();
    });
});


