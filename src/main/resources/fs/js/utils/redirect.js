import $ from 'jquery';

const goHome = () => {
  location.href = '/';
};

$('#header-button').on('click', goHome);

const scrollToSection = (section) => {
  window.scrollTo({
    top: section.offsetTop,
    left: section.offsetLeft,
    behavior: 'smooth',
  });
};

document.getElementById('go-hello').onclick = () => {
  const greetSection = document.getElementById('intro-section');
  scrollToSection(greetSection);
}

document.getElementById('go-intro').onclick = () => {
  const executiveSection = document.getElementById('executive-section');
  scrollToSection(executiveSection);
}


document.getElementById('go-vision').onclick = () => {
  const visionSection = document.getElementById('vision-section');
  scrollToSection(visionSection);
}

document.getElementById('top-nav__dropdown--eval').onclick = () => {
 location.href = '/evaluation';
}
