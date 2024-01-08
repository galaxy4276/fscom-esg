import $ from 'jquery';

const goHome = () => {
  location.href = '/';
};

$('#header-button').on('click', goHome);

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
