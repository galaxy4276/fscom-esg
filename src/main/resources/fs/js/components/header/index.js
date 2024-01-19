const drawerOpenCloseButton = document.getElementById('header__drawer--open-button');
const hiddenInput = document.getElementById('header__drawer--button');

drawerOpenCloseButton.addEventListener('click', () => {
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
  const headerNavOverlay = document.getElementById('headerNavOverlay');
  const headerNavContainer = document.getElementById('headerNavContainer');
  let navOpen = false;


  const openHeaderNav = () => {
    headerNavOverlay.style.width = '100%';
    headerNavContainer.style.width = '300px';
  };

  const closeHeaderNav = () => {
    headerNavOverlay.style.width = '0';
    headerNavContainer.style.width = '0';
  };

  closeHeaderNav();

  drawerOpenCloseButton.onclick = () => {
    if (!navOpen) {
      navOpen = true;
      openHeaderNav();
    }
  }

  const url = location.href;

  if (url.includes('introduce')) {
    emphasize(intro);
  }

  if (url.includes('evaluation')) {
    emphasize(evaluation);
  }

  const headerNavCloseButton = document.getElementById('headerNavCloseButton');
  headerNavCloseButton.onclick = () => {
    if (navOpen) {
      navOpen = false;
      closeHeaderNav();
    }
  }

  const headerNavMenus = [
    {
      opener: document.getElementById('navIntroOpener'),
      content: document.getElementById('navIntroDropdownContent'),
      open: false,
      button: document.getElementById('navIntroButton'),
    },
  ]

  /**
   * @param el {HTMLElement}
   */
  const hide = (el) => {
    el.style.maxHeight = '0';
    el.style.visibility = 'hidden';
  }

  const show = (el) => {
    el.style.maxHeight = 'fit-content';
    el.style.visibility = 'visible';
  }

  headerNavMenus.forEach(({ content }) => {
    hide(content)
  });

  headerNavMenus.forEach(({ content, open, opener, button }) => {
    opener.onclick = () => {
      if (open) {
        hide(content);
        open = false;
        button.classList.remove('flip');
      } else {
        show(content);
        open = true;
        button.classList.add('flip');
      }
    }
  });

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
