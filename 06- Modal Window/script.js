'use strict';

//* Elements

const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
const showModalBtn = document.querySelectorAll('.show-modal');

//* Variables

showModalBtn.forEach(btn => {
  btn.addEventListener('click', showModal);
});

closeModalBtn.addEventListener('click', closeModal);

overlayEl.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) closeModal();
});

//* Functions

function closeModal() {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
}

function showModal() {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
}
