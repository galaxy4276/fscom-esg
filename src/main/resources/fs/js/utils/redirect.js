import $ from 'jquery';

const goHome = () => {
  location.href = '/';
};

$('#header-button').on('click', goHome);
