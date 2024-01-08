export const goHome = () => {
    location.href = '/';
};



(() => {
    let introEntered = false;
    const content = document.getElementById('top-nav__dropdown--content-intro');
    const dropdown = document.getElementById('top-nav__dropdown--intro');

    const enter = () => {
        introEntered = true;
    }

    const leave = () => {
        introEntered = false;
        content.style.display = 'none';
    }

    // dropdown mouse event
    dropdown.addEventListener('mouseover', () => {
        const content = document.getElementById('top-nav__dropdown--content-intro');
        dropdown.click();
        content.style.display = 'block';
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

    document.getElementById('go-hello').onclick = () => {
        location.href = '/introduce/greet';
    }

    document.getElementById('go-intro').onclick = () => {
        location.href = '/introduce/executive';
    }

    document.getElementById('go-goals').onclick = () => {
        location.href = '/introduce/goals';
    }

    document.getElementById('go-vision').onclick = () => {
        location.href = '/introduce/vision';
    }

    document.getElementById('go-core').onclick = () => {
        location.href = '/introduce/core';
    }

    document.getElementById('go-org').onclick = () => {
        location.href = '/introduce/org';
    }

    document.getElementById('go-ci').onclick = () => {
        location.href = '/introduce/ci';
    }

    document.getElementById('go-intro-map').onclick = () => {
        location.href = '/introduce/map';
    }



})();
