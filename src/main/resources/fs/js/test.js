export const goHome = () => {
    location.href = '/';
};

const topNavMenus = [
  // 소개
  [document.getElementById('top-nav__dropdown--content-intro'), document.getElementById('top-nav__dropdown--intro')],

  // 평가
  [document.getElementById('top-nav__dropdown--content-eval'), document.getElementById('top-nav__dropdown--eval')],
];

topNavMenus.forEach(([content, dropdown]) => {
    let introEntered = false;
    const enter = () => {
        introEntered = true;
    };

    const leave = () => {
        introEntered = false;
        content.style.visibility = 'hidden';
    };

    dropdown.addEventListener('mouseover', () => {
        dropdown.click();
        content.style.visibility = 'visible';
    });

    dropdown.addEventListener('mouseleave', (e) => {
        console.log('dropdown mouseleave');
        if (!introEntered) {
            leave();
        }
    });

    dropdown.onclick = () => enter();

    // dropdown content mouse event
    content.addEventListener('mouseenter', (e) => {
        e.stopPropagation();
        console.log('content entered');
        enter();
    });

    content.addEventListener('mouseleave', (e) => {
        e.stopPropagation();
        console.log('content leave');
        leave();
    });
});
