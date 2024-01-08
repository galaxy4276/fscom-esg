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
        console.log('dropdown mouseleave');
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
        console.log('content entered');
        enter();
    });

    content.addEventListener('mouseleave', (e) => {
        e.stopPropagation();
        visitContent = false;
        console.log('content leave');
        leave();
    });
});
