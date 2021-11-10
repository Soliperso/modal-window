const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalButton = document.querySelector('.close-modal');
const showModalButtons = document.querySelectorAll('.show-modal');

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const showModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

showModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    showModal();
  });
});

closeModalButton.addEventListener('click', () => {
  closeModal();
});

overlay.addEventListener('click', () => {
  closeModal();
});

window.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
