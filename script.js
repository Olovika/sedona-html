const $body = document.body;
const $modalWindow = document.querySelector('.modal');
const $openModalBtn = document.querySelector('.open-modal');
const $closeModalBtn = document.querySelector('.close-modal');

const openModal = () => {
    $modalWindow.showModal();
    $body.style.overflow = 'hidden';
}

const closeModal = () => {
    $modalWindow.close();
    $body.style.overflow = 'auto';
}

$openModalBtn.addEventListener('click', openModal);
$closeModalBtn.addEventListener('click', closeModal);

$modalWindow.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

$modalWindow.addEventListener('click',  event => {
    const rect = $modalWindow.getBoundingClientRect();
    const isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height
        && rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
    if (!isInDialog && event.target.tagName === 'DIALOG') {
        closeModal();
    }
});