const chatbotButton = document.querySelector('.chatbot-button');
const chatbotContainer = document.getElementById('chatbot__container');

console.log('hello');

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
