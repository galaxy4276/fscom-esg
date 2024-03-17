import * as Quill from 'quill';
import pageHook from '../utils/pageHook';
import qs from 'query-string';
import { FileService, PostService } from '../utils/api';
import { pushErrorDialog } from '../utils/dialog';

const editorElm = document.getElementById('editor');

const state = {
  title: '',
  content: '',
  representFile: null,
};

(() => {
  if (!editorElm) return;
  const quill = new Quill('#editor', {
    theme: 'snow',
    modules: {
      syntax: true,
      toolbar: '#toolbar-container',
    },
    placeholder: '게시글 내용을 입력해주세요'
  });

  quill.on('text-change', (delta, oldDelta, source) => {
    console.log({
      delta,
      oldDelta,
      source,
      innerContent: quill.editor.innerHTML,
      quill,
    });
    const html = quill.getText();
    state.content = html;
  });

  document.querySelector('.articleTitle').addEventListener('change', e => {
    state.title = e.target.value;
  });

  // 이미지 업로드 툴바 메뉴 이벤트 덮어쓰기
  // const fileUploadInput = document.querySelector('#fileUploadInput');
  // const imageUploadButton = document.querySelector('.ql-image');
  // const clonedImageUploadButton = imageUploadButton.cloneNode(true);
  // imageUploadButton.replaceWith(clonedImageUploadButton);
  // clonedImageUploadButton.addEventListener('click', () => {
  //   fileUploadInput.click();
  // });
  // fileUploadInput.addEventListener('change', async e => {
  //   const imageFile = e.target.files[0];
  //   console.log({ imageFile });
  //   try {
  //     const { location } = await FileService.upload(imageFile);
  //     console.log({ location });
  //     quill.insertEmbed(0, 'image', location);
  //   } catch (err) {
  //     console.error(err);
  //     pushErrorDialog();
  //   }
  // });

  const previousBtns = Array.from(document.getElementsByClassName('previous-btn'));
  previousBtns.forEach(b => {
    b.addEventListener('click', e => {
      e.preventDefault();
      history.back();
    });
  });
})();

// 게시글 작성 요청
pageHook(['post'], () => {
  const postSubmitButton = document.getElementById('postSubmitButton');
  const fileUploader = document.querySelector('.postRepresentImageUploader');

  const submit = async (e) => {
    e.preventDefault();
    const emptyTitle = state.title.trim() === '';
    const emptyContent = state.content.trim() === '';

    if (emptyTitle) {
      return alert('게시글 제목을 입력하세요');
    }

    if (emptyContent) {
      return alert('게시글 내용을 입력하세요');
    }

    try {
      const { category } = qs.parse(location.search);
      const body = {
        category,
        ...state,
      };
      await PostService.create(body);
      alert('게시글이 등록되었습니다.');
    } catch (error) {
      console.error(error);
      alert('서버 오류가 발생하였습니다.');
    } finally {
      // history.back();
    }
  }

  postSubmitButton.addEventListener('click', submit);
  fileUploader.addEventListener('change', e => {
    const file = e.target.files[0];
    if (file) {
      state.representFile = file;
    }
  })
});

(() => {
  const postWriteBtns = Array.from(document.getElementsByClassName('postWriteBtn'));
  postWriteBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      location.href = '/post?category=news';
    });
  });
})();
