/**
 * 회원가입 완료 카드
 */
class DoneJoinCard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section>
        <div class="esg-card">
          <div class='card-body'>
            <div class="flex justify-center">
              <span class="text-2xl pb-8" id="join-done__title">가입 완료</span>
            </div>
            
            <div class="flex justify-center gap-y-4 flex-col items-center">
              <span id="join-done__message" class="text-center">회원 가입이 완료되었습니다!</span>
              <esg-button id="join-done__btn" text="로그인 하러 가기"></esg-button>
            </div>
          </div>
        </div>        
      </section>
  `;
    const joinRole = sessionStorage.getItem('join-role');
    const isEnterprise = joinRole === 'enterprise';
    const isPro = joinRole === 'pro';

    const title = this.querySelector('#join-done__title');
    const message = this.querySelector('#join-done__message');
    const button = this.querySelector('#join-done__btn');

    if (isEnterprise || isPro) {
      title.textContent = '가입 요청 완료';
      message.outerText = '회원가입이 요청되었습니다.\n관리자의 승인을 대기바랍니다.';
      button.setAttribute('text', '로그인 페이지로 이동');
      console.log({ title, message, button });
    }

    button.onclick = () => {
      location.href = '/auth/login';
    }
  }

}

customElements.define('done-join-card', DoneJoinCard);
