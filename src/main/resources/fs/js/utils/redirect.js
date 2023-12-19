import $ from 'jquery';

const goHome = () => {
  location.href = '/';
};

console.log($);

$('#header-button').on('click', goHome);
