/**
 * 기업 회원가입 입력 폼 카드
 */
class CompanyJoinCard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="esg-card mt-[30px]">
        <div class='card-body'>
            <div class="flex justify-center">
              <span class="text-2xl pb-8">기업 정보</span>
            </div>
        
            <label class="form-contorl w-full">
              <div class='label'>
                <span class='label-text'>사업자 번호</span>
              </div>
              <div>
                <input type='text' class='input input-bordered w-[300px]' placeholder="사업자 번호">
              </div>
            </label>

            <label class="form-contorl w-full">
              <div class='label'>
                <span class='label-text'>회사명</span>
              </div>
              <div>
                <input type='text' class='input input-bordered w-[300px]' placeholder="회사명">
              </div>
            </label>

            <label class="form-contorl w-full">
              <div class='label'>
                <span class='label-text'>담당자 성함</span>
              </div>
              <div>
                <input type='text' class='input input-bordered w-[300px]' placeholder="담당자">
              </div>
            </label>

            <label class="form-contorl w-full flex flex-col gap-y-4">
              <div class='label'>
                <span class='label-text'>주소(소재지)</span>
              </div>
              <div class="flex gap-x-4 items-center">
                <input type='text' class='input input-bordered w-[120px]' id="enterprise-zonecode__input" placeholder="우편번호">
                <button class='btn btn-slate search-enterprise-address__btn' id="enter-address-search__btn">주소 검색</button>
              </div>
              <div class='flex flex-wrap gap-x-4'>
                <input type='text' class='input input-bordered w-[350px]' id="enterprise-address__input" placeholder="주소" name="address">
                <input type='text' class='input input-bordered w-[300px]' id="enterprise-address-detail__input" placeholder="상세주소" name="address-details">
              </div>
            </label>
            
            <div class="w-full flex justify-center pt-6">
              <esg-button class="join-button btn-disabled !esg-btn-disabled" type="button" show="true" text="회원가입"></esg-button>
            </div>
        </div>
      </div>
    `;

    const zoneCodeInput = document.getElementById('enterprise-zonecode__input');
    const addressInput = document.getElementById('enterprise-address__input');
    const searchBtn = document.getElementById('enter-address-search__btn');
    searchBtn.addEventListener('click', () => {
      new daum.Postcode({
        oncomplete: ({ address, zonecode }) => {
          zoneCodeInput.value = zonecode;
          zoneCodeInput.readOnly = true;
          addressInput.value = address;
        },
      }).open();
    });
  }
}

customElements.define('company-join-card', CompanyJoinCard);
