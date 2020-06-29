const backDrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const button = document.querySelectorAll('.button');
const buttonCancel = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', () => {
    backDrop.classList.add('open');
    modal.classList.add('openModal');
  });
}

backDrop.addEventListener('click', () => {
  backDrop.classList.remove('open');
  mobileNav.classList.remove('openMobileNav');
  if (modal) {
    modal.classList.remove('openModal');
  }
});

if (buttonCancel) {
  buttonCancel.addEventListener('click', () => {
    backDrop.classList.remove('open');
    modal.classList.remove('openModal');
  });
}

toggleButton.addEventListener('click', () => {
  backDrop.classList.add('open');
  mobileNav.classList.add('openMobileNav');
  if (modal) {
    modal.classList.remove('openModal');
  }
});

mobileNav.addEventListener('click', () => {
  mobileNav.classList.remove('openMobileNav');
  backDrop.classList.remove('open');
});
