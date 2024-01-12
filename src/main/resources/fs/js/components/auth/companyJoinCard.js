import client from '../../utils/client';
import { join } from '../../page/login';
import { pushDialog } from '../../utils/dialog';

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
                <input type='text' class='input input-bordered w-[300px]' max="10" placeholder="- 없이 입력하세요 (최대 10글자)" id="license__input">
              </div>
            </label>

            <label class="form-contorl w-full">
              <div class='label'>
                <span class='label-text'>회사명</span>
              </div>
              <div>
                <input type='text' class='input input-bordered w-[300px]' placeholder="회사명" id="enterprise-name__input">
              </div>
            </label>

            <label class="form-contorl w-full">
              <div class='label'>
                <span class='label-text'>회사 전화번호</span>
              </div>
              <div>
                <input type='text' class='input input-bordered w-[300px]' max="10" placeholder="- 없이 입력하세요" id="enterprise-tel__input">
              </div>
            </label>

            <label class="form-contorl w-full">
              <div class='label'>
                <span class='label-text'>담당자 성함</span>
              </div>
              <div>
                <input type='text' class='input input-bordered w-[300px]' placeholder="담당자" id="represent__input">
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
              <esg-button class="join-button" type="button" show="true" text="회원가입"></esg-button>
            </div>
        </div>
      </div>
    `;

    const zoneCodeInput = document.getElementById('enterprise-zonecode__input');
    const addressInput = document.getElementById('enterprise-address__input');
    const addressDetailsInput = document.getElementById('enterprise-address-detail__input');
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

    const licenseInput = this.querySelector('#license__input');

    let addressFixed = '';

    licenseInput.addEventListener('input', async () => {
      let { value } = licenseInput;
      if (value.length > 10) {
        licenseInput.value = value.slice(0, 10);
        value = value.slice(0, 10);
      }

      console.log({ value, addressFixed });
      if (value !== addressFixed) {
        zoneCodeInput.value = '';
        zoneCodeInput.readOnly = false;
        addressInput.value = '';
        addressInput.readOnly = false;
        addressDetailsInput.value = '';
        addressDetailsInput.readOnly = false;
        addressFixed = '';
      }

      if (value.length === 10) {
        if (addressFixed === value) {
          return;
        }

        const { enterprise } = await client.get(`/api/auth/enterprise?licenseNumber=${value}`);
        console.log({ enterprise });
        if (enterprise) {
          addressFixed = value;
          const content = document.createElement('div');
          content.innerHTML = `
            <div class="flex flex-col justify-center text-center">
              <h1 class="esg-dialog-title">안내</h1>
              <span>동일한 사업자 번호에 해당하는 기업 사용자가 존재하여 해당정보를 사용합니다.</span>
              <span>기업 정보 수정이 필요한 경우 가입 후 마이페이지에서 수정 바랍니다.</span>
            </div>
          `;

          pushDialog(content, {
            okCb: () => {
              zoneCodeInput.value = enterprise.zipCode;
              zoneCodeInput.readOnly = true;
              addressInput.value = enterprise.address;
              addressInput.readOnly = true;
              if (enterprise?.addressDetails) {
                addressDetailsInput.value = enterprise.addressDetails;
              }
              addressDetailsInput.readOnly = true;
            },
          });
        }
      }
    });

    this.querySelector('esg-button').addEventListener('click', join);
  }
}

customElements.define('company-join-card', CompanyJoinCard);
