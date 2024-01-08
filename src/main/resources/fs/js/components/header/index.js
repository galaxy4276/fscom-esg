const drawerOpenCloseButton = document.getElementById('header__drawer--open-button');
const hiddenInput = document.getElementById('header__drawer--button');
const drawerOverlay = document.querySelector('.drawer-overlay');

drawerOpenCloseButton.addEventListener('click', () => {
  hiddenInput.click();
});

drawerOverlay.addEventListener('click', () => {
  hiddenInput.click();
});

/**
 * url 경로에 따라 상단 네비게이션 메뉴의 fontWeight bold 처리
 */
(() => {
  const emphasize = (el) => {
    el.style.fontWeight = '600';
    el.style.borderBottom = '4px solid #00c7b5';
  };

  const intro = document.getElementById('top-nav__dropdown--intro');
  const evaluation = document.getElementById('top-nav__dropdown--eval');

  const url = location.href;

  if (url.includes('introduce')) {
    emphasize(intro);
  }

  if (url.includes('evaluation')) {
    emphasize(evaluation);
  }
})();
