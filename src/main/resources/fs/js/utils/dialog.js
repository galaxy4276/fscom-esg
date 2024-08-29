const dialogRoot = document.getElementById('dialog-root');

/**
 * 다이얼로그를 화면에 렌더링합니다.
 * @param el {string}
 * @param config {{ okCb?: () => void, cancelCb: () => void, cancel: boolean } | undefined}
 */
export const pushDialog = (el, config = undefined) => {
  const div = document.createElement('div');
  div.innerHTML = `
    <div class='dialog fixed overflow-auto w-full h-full left-0 top-0 flex justify-center items-center z-50'>
        <div id='dialog-background' class="absolute top-0 left-0 z-50 flex layout-full-center">
           <div class="esg-dialog-box"> 
             <div class='esg-dialog__content flex-[1]'>
            </div>
              <div class='esg-dialog__control flex gap-x-4 justify-center'>
              <esg-button id="ok" text="확인했어요"></esg-button>
              <esg-button id="cancel" text="취소할게요" style="display: none"></esg-button>
            </div>
          </div>
        </div>
      </div>    
    </div>
  `;

  const content = div.querySelector('.esg-dialog__content');
  const contentBox = div.querySelector('.esg-dialog-box');
  contentBox.style.boxShadow = '0px 4px 24px 0px rgba(0, 0, 0, 0.15)';
  const okBtn = div.querySelector('#ok');
  const cancelBtn = div.querySelector('#cancel');
  const background = div.querySelector('#dialog-background');
  background.style.backgroundColor = 'rgb(71,85,105,0.4)';

  if (typeof el === "string") {
    const innerContent = document.createElement('div');
    innerContent.innerHTML = el;
    content.appendChild(innerContent);
  } else {
    console.log("element 올라감");
    console.log(el);
    content.appendChild(el)
  }

  dialogRoot.appendChild(div);

  const ok = () => {
    if (config?.okCb) {
      config.okCb();
    }
    div.remove();
  }

  okBtn.onclick = ok;
  window.addEventListener('keydown', e => {
    if (e.code === 'Escape' || e.code === 'Enter') {
      if (!config?.cancel) {
        return ok();
      }
    }
  });

  if (config) {

    if (config.cancel) {
      cancelBtn.style.display = 'block';
      cancelBtn.onclick = () => {
        if (config?.cancelCb) {
          config.cancelCb();
        }
        div.remove();
      };
    }

  }
};

export const pushErrorDialog = (message) => {
  const content = document.createElement('div');
  content.innerHTML = `
    <div class="flex justify-center items-center">
      <span>${message ? message : "서버 에러가 발생하였습니다"}</span>
    </div>
  `;
  pushDialog(content, {
    cancel: false,
    okCb: () => {
      history.back();
    },
  });
};
