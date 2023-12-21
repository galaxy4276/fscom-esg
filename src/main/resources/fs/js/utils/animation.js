export const setFadeInUp = el => {
  el.classList.add('animate__animated');
  el.classList.add('animate__fadeInUp');
};

export const removeFadeInUp = el => {
  el.classList.remove('animate__animated');
  el.classList.remove('animate__fadeInUp');
};

export const setFadeIn = el => {
  el.classList.add('animate__animated');
  el.classList.add('animate__fadeIn');
};

export const removeAllAnimation = el => {
  console.log(el.classList.keys());
};
