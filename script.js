// Получаем элементы
const employeeCards = document.querySelectorAll('.employee-card');
const modal = document.getElementById('employee-modal');
const closeBtn = document.querySelector('.close');
const modalImage = document.getElementById('modal-image');
const modalName = document.getElementById('modal-name');
const modalPosition = document.getElementById('modal-position');
const modalDescription = document.getElementById('modal-description');

// Открываем модальное окно при клике на карточку
employeeCards.forEach(card => {
    card.addEventListener('click', () => {
        const image = card.querySelector('img').src;
        const name = card.querySelector('h2').textContent;
        const position = card.querySelector('.position').textContent;
        const description = card.querySelector('.description').textContent;

        modalImage.src = image;
        modalName.textContent = name;
        modalPosition.textContent = position;
        modalDescription.textContent = description;

        modal.style.display = 'flex';
    });
});

// Закрываем модальное окно
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закрываем модальное окно при клике вне его
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});