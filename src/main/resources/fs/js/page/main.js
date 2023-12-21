const executiveRoot = document.querySelector('#main__introduce');

const executiveObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    console.log(e);
    if (e.isIntersecting) {
      e.target.classList.add('animate__animated animate__fadeIn');
    }
  })
}, {
  root: document.getElementById('body'),
});


executiveObserver.observe(executiveRoot);

const chatbotButton = document.querySelector('.chatbot-button');
const chatbotContainer = document.getElementById('chatbot__container');

chatbotButton.addEventListener('click', e => {
  e.stopPropagation();
  e.preventDefault();
  const containerStyle = getComputedStyle(chatbotContainer);
  const { visibility } = containerStyle;
  const isHidden = visibility === 'hidden';
  if (isHidden) {
    chatbotContainer.classList.remove('invisible');
    chatbotContainer.classList.add('visible');
    // setFadeIn(chatbotContainer);
  } else {
    chatbotContainer.classList.remove('visible');
    chatbotContainer.classList.add('invisible');
    // removeFadeInUp(chatbotContainer);
    // removeAllAnimation(chatbotContainer);
  }
});
