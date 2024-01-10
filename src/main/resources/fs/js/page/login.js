import pageHook from '../utils/pageHook';

const changeBgGray = () => {
  document.querySelector('body').style.backgroundColor = '#FAFAFA';
};

pageHook(['/auth/login', '/auth/join'], () => {
  changeBgGray();
  // pageWrapper.style.paddingBottom = '480px';
});

/**
 * 회원 가입 - 회원 구분 버튼 클릭 이벤트 처리
 */
pageHook('/auth/join', () => {
  const personalBtn = document.getElementById('join-personal__btn');
  const enterpriseBtn = document.getElementById('join-enterprise__btn');
  const proBtn = document.getElementById('join-pro__btn');
  const persistSessionJoinRole = (r) => {
    sessionStorage.setItem('join-role', r);
  };
  const onClick = (r) => {
    persistSessionJoinRole(r);
    location.href = '/auth/join/agreement';
  }
  personalBtn.onclick = () => onClick('personal');
  enterpriseBtn.onclick = () => onClick('enterprise');
  proBtn.onclick = () => onClick('pro');
}, true);

/**
 * 이용약관 관련 비즈니스 로직
 */
pageHook('/auth/join/agreement', () => {
  const readPart01 = document.getElementById('agree-part-1');
  const readPart02 = document.getElementById('agree-part-2');
  const button = document.getElementById('agree-next-btn');

  let check01Status = false;
  let check02Status = false;

  button.onclick = () => {
    sessionStorage.setItem('agreement', 'true');
    location.href = '/auth/join/user';
  }

  const process = () => {
    if (check01Status && check02Status) {
      button.removeAttribute('disabled');
      return;
    }
    button.setAttribute('disabled', 'disabled')
  };

  readPart01.addEventListener('click', e => {
    const { checked } = readPart01;
    if (checked) {
      check01Status = true;
      return process();
    }
    check01Status = false;
    return process();
  });
  readPart02.addEventListener('click', e => {
    const { checked } = readPart02;
    if (checked) {
      check02Status = true;
      return process();
    }
    check02Status = false;
    return process();
  });
}, true);
