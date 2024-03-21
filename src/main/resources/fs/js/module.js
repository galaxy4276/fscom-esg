/**
 * @description 해당 파일에 import 된 모든 esm 모듈은 번들링 되어 out/index.out.js 로 변환됩니다
 */
import './test';
import './utils/redirect';
import './utils/dialog';
import './utils/api'

// page.js
import './page/main';
import './page/login';
import './page/editor';
import './page/news';
import './page/postDetails';
import './page/postUpdate';

// component.js
import './components';

  // auth
import './components/auth/companyJoinCard';
import './components/auth/doneJoinCard';
