import $ from "jquery"
import { UserService } from '../../utils/api';
import userUtils from '../../utils/user';

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
    headerNavContainer.classList.remove('headerNavHidden')
  };

  const closeHeaderNav = () => {
    headerNavOverlay.style.width = '0';
    headerNavContainer.classList.add('headerNavHidden')
  };

  closeHeaderNav();

  drawerOpenCloseButton.onclick = () => {
    if (!navOpen) {
      navOpen = true;
      openHeaderNav();
    }
  }

  window.addEventListener('keyup', e => {
    if (e.code === 'Escape') {
      navOpen = false;
      closeHeaderNav();
    }
  });

  headerNavOverlay.click =() => {
    navOpen = false;
    closeHeaderNav()
  };


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
    {
      opener: document.getElementById('navBusinessIntroOpener'),
      content: document.getElementById('navBusinessDropdownContent'),
      open: false,
      button: document.getElementById('navBusiessButton'),
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
 * @variation 헤더 드롭다운 제어
 */
(() => {
  const topNavMenus = [
    // 소개
    [document.getElementById('top-nav__dropdown--content-intro'), document.getElementById('top-nav__dropdown--intro')],

    // 평가
    [document.getElementById('top-nav__dropdown--content-eval'), document.getElementById('top-nav__dropdown--eval')],

    // 사업
    [document.getElementById('top-nav__dropdown--content-work'), document.getElementById('top-nav__dropdown--work')],

    // 로그인된 사용자
    [document.getElementById('userNavigatorDropdown'), document.getElementById('userNavigator')],
  ];

  topNavMenus.forEach(([content, dropdown]) => {
    let introEntered = false;
    let visitContent = false;

    const enter = () => {
      introEntered = true;
    };

    const leave = () => {
      introEntered = false;
      content.style.visibility = 'hidden';
    };

    dropdown.addEventListener('mouseover', () => {
      enter();
      content.style.visibility = 'visible';
    });

    dropdown.addEventListener('mouseleave', (e) => {
      if (!introEntered) {
        leave();
      }

      if (!visitContent) {
        leave();
      }
    });

    // dropdown content mouse event
    content.addEventListener('mouseenter', (e) => {
      visitContent = true;
      const mouseOverEv = new MouseEvent('mouseover', { bubbles: false });
      dropdown.dispatchEvent(mouseOverEv);
      enter();
    });

    content.addEventListener('mouseleave', (e) => {
      e.stopPropagation();
      visitContent = false;
      leave();
    });
  });


  // redirect
  (() => {
    const userIdent = $('#user-identity')
    userIdent.click(() => location.href = '/auth/login');

    $("#top-nav__dropdown--intro").click(() => location.href = "/introduce")
    $(".go-hello").click(() => location.href = "/introduce")
    $(".go-intro").click(() => location.href = "/introduce/executors")
    $(".go-vision").click(() => location.href = "/introduce/vision")
    $("#top-nav__dropdown--eval").click(() => location.href = "/evaluation")
    $(".go-eval").click(() => location.href = "/evaluation")
    $("#top-nav__dropdown--work").click(() => location.href = "/business/adv")
    $(".go-jm").click(() => location.href = "/business/adv")
    $(".go-edu").click(() => location.href = "/business/edu")
    $(".go-news").click(() => location.href = "/news")
    $(".go-give").click(() => location.href = "/sponsor")
    $('.logout').click(() => {
      userUtils.logout();
      location.reload();
    })
  })()

})()

const syncUser = async () => {
  try {
    const user = userUtils.get();
    const userIdentity = document.getElementById('userNavigator');
    userIdentity.innerText = `${user.name}님`;
  } catch (error) {
    console.error(error);
  }
};

(() => {
  const loggedIn = userUtils.checkLoggedIn()
  if (loggedIn) {
    const noneUserSection = document.querySelector('#user-identity');
    const userIdentificialSection = document.querySelector('.userIdentificialSection');
    noneUserSection.style.display = 'none';
    userIdentificialSection.classList.remove('hidden');
    syncUser();
  }
})()

