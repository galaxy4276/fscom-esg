const drawerOpenCloseButton = document.getElementById('header__drawer--open-button');
const hiddenInput = document.getElementById('header__drawer--button');
const drawerOverlay = document.querySelector('.drawer-overlay');

drawerOpenCloseButton.addEventListener('click', () => {
  hiddenInput.click();
});

drawerOverlay.addEventListener('click', () => {
  hiddenInput.click();
});
