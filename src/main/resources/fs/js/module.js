/**
 * @description 해당 파일에 import 된 모든 esm 모듈은 번들링 되어 out/index.out.js 로 변환됩니다
 */
import './common';
import './test';
import './utils/redirect';
import './utils/dialog';

// page.js
// import './page/main';
import './page/login';

// component.js
import './components/main';
import './components/header';
import './components/common/button';
import './components/common/text';

  // auth
import './components/auth/companyJoinCard';
import './components/auth/doneJoinCard';