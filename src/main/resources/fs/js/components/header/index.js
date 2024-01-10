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

/**
 * 사용자 헤더 로그인 섹션
 */
(() => {
  const user = localStorage.getItem('user');
  const userIdentity = document.getElementById('user-identity');

  if (!user) {
    userIdentity.textContent = '로그인';
    userIdentity.addEventListener('click', () => {
      location.href = '/auth/login';
    });
    userIdentity.style.cursor = 'pointer';
    return;
  }

  userIdentity.textContent = `${user.name}님 환영합니다`;
})();
