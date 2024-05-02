import pageHook from '../utils/pageHook';
import formatter from '../utils/formatter';
import validator from '../utils/validator';
import client from '../utils/client';
import userUtils from '../utils/user';
import { pushErrorDialog } from '../utils/dialog';

const changeBgGray = () => {
  document.querySelector('body').style.backgroundColor = '#FAFAFA';
};

pageHook(['/auth/login', '/auth/join'], () => {
  changeBgGray()
});

pageHook('/auth/login', () => {
  const loggedIn = userUtils.checkLoggedIn();
  if (loggedIn) {
    location.href = '/';
  }

  const loginState = {
    email: '',
    password: '',
  };

  const loginButton = document.getElementById('login-btn');

  const emailInput = document.getElementById('emailInput');
  const passwordInput = document.getElementById('passwordInput');

  const update = () => {
    console.log({ loginState });
    const pass = Object.values(loginState).every(v => v.trim() !== '')
    if (!pass) {
      loginButton.setAttribute("disabled", "disabled");
      return;
    }
    loginButton.removeAttribute("disabled");
  }

  emailInput.addEventListener('change', e => {
    loginState.email = e.target.value;
    update();
  });
  passwordInput.addEventListener('change', e => {
    loginState.password = e.target.value;
    update();
  });

  loginButton.onclick = async () => {
    try {
      await userUtils.login(loginState.email, loginState.password);
      location.href = '/';
    } catch (error) {
      console.log('로그인 에러가 발생함');
      console.dir(error.message);
      pushErrorDialog(error.message);
    }
  };
}, true);

/**
 * 회원 가입 - 회원 구분 버튼 클릭 이벤트 처리
 */
pageHook('/auth/join', () => {
  const personalBtn = document.getElementById('join-personal__btn');
  const enterpriseBtn = document.getElementById('join-enterprise__btn');
  const proBtn = document.getElementById('join-pro__btn');

  if (!personalBtn || !enterpriseBtn || !proBtn) {
    return;
  }

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

  // 최초 체크상태 해제 ( 뒤로가기 UI 상태 캐싱 방지 )
  (() => {
    readPart01.checked = false;
    readPart02.checked = false;
  })();

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

const joinRoot = document.getElementById('join-root');
const getJoinProperties = () => {
  const frontEmail = joinRoot.querySelector('#frontEmail').value;
  const username = joinRoot.querySelector('#join-user-name').value;
  const tel = joinRoot.querySelector('#tel').value;
  const password = joinRoot.querySelector('#password').value;
  const verifyPassword = joinRoot.querySelector('#verify-password').value;
  const zipcode = joinRoot.querySelector('#zonecode__input').value;
  const address = joinRoot.querySelector('#address__input').value;
  const addressDetails = joinRoot.querySelector('#address-detail__input').value;

  const licenseNumber = joinRoot.querySelector('#license__input').value;
  const enterpriseName = joinRoot.querySelector('#enterprise-name__input').value;
  const enterpriseTel = joinRoot.querySelector('#enterprise-tel__input').value;
  const representName = joinRoot.querySelector('#represent__input').value;
  const zipCode = joinRoot.querySelector('#enterprise-zonecode__input').value;
  const enterpriseAddress = joinRoot.querySelector('#enterprise-address__input').value;
  const enterPriseAddressDetails = joinRoot.querySelector('#enterprise-address-detail__input').value;

  const enterpriseDetails = {
    licenseNumber,
    address: enterpriseAddress,
    zipCode: zipCode,
    addressDetails: enterPriseAddressDetails,
    represent: representName,
    tel: enterpriseTel,
    name: enterpriseName,
  };

  return {
    user: {
      frontEmail,
      username,
      tel,
      password,
      verifyPassword,
      zipcode,
      address,
      addressDetails,
    },
    enterpriseDetails,
  };
};

const getComputedEmail = (frontEmail) => {
  const vender = document.querySelector('.email-select').value;

  if (vender !== '직접 입력') {
    return frontEmail + '@' + vender;
  }

  const manual =  document.getElementById('manual-email__input').value;
  return frontEmail + '@' + manual;
};

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const userJoinValidator = {
  email: {
    message: '이메일을 입력해주세요',
    id: 'email-error__input',
    pattern: emailRegex,
    cb: () => {
      const vender = document.querySelector('.email-select').value;
      const frontEmail = document.getElementById('frontEmail').value;
      if (vender !== '직접 입력') {
        const computed = `${frontEmail}@${vender}`;
        console.log({ computed });
        const pass = emailRegex.test(computed);
        console.log({ pass, emailRegex, email: computed });
        if (!pass) {
          console.log("이메일부정확");
          return { pass, message: '이메일 형식이 아닙니다' }
        }
        return { pass };
      }
      const manual =  document.getElementById('manual-email__input').value;
      const computed = `${frontEmail}@${manual}`;
      console.log({ computed });
      const pass = emailRegex.test(computed);
      return {
        pass,
        message: '이메일 형식이 아닙니다',
      };
    },
  },
  username: {
    message: '본명을 입력해주세요',
    targetId: 'join-user-name',
    id: 'username-error__input',
    pattern : /[a-zA-Z가-힣]{2}/,
  },
  userTel: {
    message: '휴대전화번호를 입력해주세요',
    targetId: 'tel',
    id: 'user-tel-error__input',
    pattern: /[0-9]{10,11}/,
  },
  password: {
    message: '패스워드는 8글자 이상이어야합니다',
    targetId: 'password',
    id: 'password-error__input',
    pattern: /.{8,}/,
  },
  verifyPassword: {
    message: '이전 패스워드와 같아야 합니다.',
    targetId: 'verify-password',
    id: 'verify-password-error__input',
    cb: () => {
      const passwordElm = document.getElementById('password');
      const verifyPasswordElm = document.getElementById('verify-password');
      const password = passwordElm.value;
      const verifyPassword = verifyPasswordElm.value;
      if (password !== verifyPassword) {
        console.log(`패스워드 부정확 ${password} ${verifyPassword}`);
        return {
          pass: false,
          message: '패스워드가 일치하지 않습니다',
        };
      }
      return { pass: true };
    },
  },
  zipCode: {
    message: '우편번호를 작성해주세요',
    targetId: 'zonecode__input',
    id: 'user-zipcode-error__input',
    pattern: /[0-9]{5,8}/,
  },
  address: {
    message: '주소를 입력해주세요',
    targetId: 'address__input',
    id: 'user-address-error__input',
    pattern: /.{5,}/
  },
};

export const join = async () => {

  const userValidation = Object.values(userJoinValidator).reduce((acc, valid) => {
    const messageElm = document.getElementById(valid.id);
    console.log({ acc, valid });
    if (valid?.cb) {
      const v = valid.cb();
      if (!pass) {
        messageElm.style.display = 'block';
        messageElm.textContent = v.message;
        return acc.concat(false);
      }
      messageElm.style.display = 'none';
      return acc.concat(true);
    }

    const { targetId, pattern, message } = valid;
    const target = document.getElementById(targetId);

    const targetValue = target.value;
    console.log({ targetValue, pattern, valid: pattern.test(targetValue) });
    const pass = pattern.test(targetValue);

    if (!pass) {
      messageElm.style.display = 'block';
      messageElm.textContent = message;
      return acc.concat(false);
    }
    messageElm.style.display = 'none';
    return acc.concat(true);
  }, []);

  console.log({ userValidation });
  // const userPass = userValidation.every(b => b === true);
  const userPass = userValidation.some(b => b === true);

  console.log({ userPass });

  if (!userPass) {
    return;
  }

  const data = getJoinProperties();
  const role = sessionStorage.getItem('join-role');

  try {
    await client.post('/auth', {
      role: formatter.sessionStorageRole(role),
      email: getComputedEmail(data.user.frontEmail),
      rawPassword: data.user.password,
      name: data.user.username,
      tel: data.user.tel,
      address: data.user.address + data.user.addressDetails,
      enterpriseDetails: data.enterpriseDetails,
    });
    location.href = '/auth/join/done';
  } catch (e) {
    // FIX ME: 예외처리
    console.error(e);
    switch (e?.errorCode) {
      case 'EXISTS_USER': {
        const message = document.getElementById('email-error__input');
        message.textContent = '이미 사용 중인 이메일입니다';
        message.style.display = 'block'
      }
    }
  }

};

/**
 * 사용자 정보 입력 페이지 비즈니스 로직
 */
pageHook('/auth/join/user', () => {
  const emailSelect = document.querySelector('.email-select');
  const manualEmailInput = document.getElementById('manual-email__input');
  const searchAddressBtn = document.querySelector('.search-address__btn');
  const agreement = formatter.toBool(sessionStorage.getItem('agreement'));

  const joinButtons = document.querySelectorAll('.join-button');

  const mutationCallback = () => {
    const data = getJoinProperties();
    const pass = validator.checkAtLeastDirtyByStrings(Object.values({
      ...data.user,
    }));
    console.log({ data, pass });
    // if (pass) {
    //   joinButtons.forEach(el => {
    //     el.classList.remove('disabled');
    //     el.classList.remove('esg-btn-disabled');
    //   });
    //   return;
    // }
    // joinButtons.forEach(el => {
    //   const disabled = el.className.includes('disabled');
    //   if (disabled) {
    //     el.classList.remove('btn-disabled');
    //     el.classList.remove('esg-btn-disabled')
    //   }
    // });
  };

  const observer = new MutationObserver(mutationCallback);
  observer.observe(joinRoot, {
    childList: true,
    subtree: true,
    attributes: true,
  });

  if (!agreement) {
    alert('잘못된 접근입니다');
    location.href = '/auth/login';
  }

  emailSelect.addEventListener('change', () => {
    const { value } = emailSelect;
    if (value === '직접 입력') {
      emailSelect.classList.add('hidden');
      manualEmailInput.classList.remove('hidden');
    } else {
      manualEmailInput.classList.add('hidden');
      emailSelect.classList.remove('hidden');
    }
  });

  const zoneCodeInput = document.getElementById('zonecode__input');
  const addressInput = document.getElementById('address__input');

  searchAddressBtn.addEventListener('click', () => {
    console.log('searchAddressBtn onClick');

    new daum.Postcode({
      oncomplete: ({ address, zonecode }) => {
        zoneCodeInput.value = zonecode;
        zoneCodeInput.readOnly = true;
        addressInput.value = address;
      },
    }).open();
  });

  const generalJoinBtn = document.getElementById('removable-join__btn');

  // 기업 회원 여부에 따라 입력 폼 카드 박스 렌더링
  (() => {
    const joinCompanyCardSection = document.getElementById('join-company-card__section');
    const role = sessionStorage.getItem('join-role');
    if (role !== 'enterprise') {
      return;
    }
    generalJoinBtn.remove();
    joinCompanyCardSection.classList.remove('hidden');
    joinCompanyCardSection.style.display = 'block';
  })();

  generalJoinBtn.onclick = join;
}, true);
