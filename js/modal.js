const refs = {
  openModalBtn: document.querySelector("[data-modal='open']"),
  closeModalBtn: document.querySelector("[data-modal='close']"),
  modalOverlay: document.querySelector("[data-modal='overlay']"),
  body: document.querySelector('body'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.modalOverlay.addEventListener('click', closeModal);

function toggleModal() {
  refs.modalOverlay.classList.toggle('is-open');
  refs.body.classList.toggle('no-scroll');
}

function closeModal(e) {
  if (e.target === refs.modalOverlay) {
    toggleModal();
  }
}
