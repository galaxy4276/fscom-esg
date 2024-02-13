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

document.getElementById('go-goals').onclick = () => {
  const goalsSection = document.getElementById('goals-section');
  scrollToSection(goalsSection);
}

document.getElementById('go-vision').onclick = () => {
  const visionSection = document.getElementById('vision-section');
  scrollToSection(visionSection);
}

document.getElementById('go-core').onclick = () => {
  const coreSection = document.getElementById('core-section');
  scrollToSection(coreSection);
}

document.getElementById('go-org').onclick = () => {
  const orgSection = document.getElementById('org-section');
  scrollToSection(orgSection);
}

document.getElementById('go-ci').onclick = () => {
  const ciSection = document.getElementById('ci-section');
  scrollToSection(ciSection);
}

document.getElementById('go-intro-map').onclick = () => {
  const mapSection = document.getElementById('map-section');
  scrollToSection(mapSection);
}

document.getElementById('go-awards').onclick = () => {
  location.href = '/evaluation/awards';
}

document.getElementById('go-consult').onclick = () => {
  location.href = '/evaluation/consult';
}

document.getElementById('go-eval').onclick = () => {
  location.href = '/evaluation';
}

document.getElementById('go-research').onclick = () => {
  location.href = '/evaluation/research';
}

document.getElementById('go-edu').onclick = () => {
  location.href = '/evaluation/edu';
}

document.getElementById('go-cert').onclick = () => {
  location.href = '/evaluation/cert';
}

document.getElementById('top-nav__dropdown--intro').onclick = () => {
 location.href = '/introduce/greet';
}

document.getElementById('top-nav__dropdown--eval').onclick = () => {
 location.href = '/evaluation';
}

document.getElementById('go-news').onclick = () => {
  location.href = '/evaluation';
}
