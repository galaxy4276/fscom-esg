/**
 * 특정 페이지에서 콜백 함수를 트리거합니다
 * @param urlKeyword {string | string[]} 현재 url 에 키워드가 포함되어야 합니다.
 * @param callback {function}  실행시킬 콜백 함수입니다.
 */
export default function pageHook(urlKeyword, callback) {
  window.addEventListener('load', () => {
    const url = location.href;
    if (typeof urlKeyword === 'object') {
      urlKeyword.forEach(k => {
        if (url.includes(k)) {
          callback();
        }
      });
    }

    if (typeof urlKeyword === 'string') {
      if (url.includes(urlKeyword)) {
        callback();
      }
    }
  });
}
