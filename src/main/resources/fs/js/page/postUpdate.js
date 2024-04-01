import pageHook from '../utils/pageHook';
import { getPostDetails } from './postDetails';
import * as Quill from 'quill';
import { resourceClient } from '../utils/client';
import { FileService, PostService } from '../utils/api';
import { pushErrorDialog } from '../utils/dialog';

const state = {
  isUploadRepresentFile: false,
};

pageHook(['update'], async () => {
  console.log('update Hook is On');
  const titleElm = document.querySelector('.articleTitle');
  const imageUploader = document.querySelector('.postRepresentImageUploader');
  const submitButton = document.getElementById('postSubmitButton');

  const id = (() => {
    const tokens = location.href.split('/');
    return Number.parseInt(tokens[tokens.length - 2]);
  })();
  const data = await getPostDetails(id);

  console.log({ data });
  console.log({ titleElm });
  titleElm.value = data.title;

  const quill = new Quill('#editor', {
    theme: 'snow',
    modules: {
      syntax: true,
      toolbar: '#toolbar-container',
    },
    placeholder: '게시글 내용을 입력해주세요'
  });
  quill.pasteHTML(data.text);

  imageUploader.onclick = () => {
    state.isUploadRepresentFile = true;
  };

  if (data.representFileUrl) {
    const url = data.representFileUrl;
    const imageBlob = await resourceClient.get(url);
    const filename = url.split('/')[2];
    const file = new File([imageBlob], filename, { type:"image/jpeg", lastModified:new Date().getTime() }, 'utf-8');
    const container = new DataTransfer();
    container.items.add(file);
    imageUploader.files = container.files;
  }

  const fileUploadInput = document.querySelector('#fileUploadInput');
  const imageUploadButton = document.querySelector('.ql-image');
  const clonedImageUploadButton = imageUploadButton.cloneNode(true);
  imageUploadButton.replaceWith(clonedImageUploadButton);
  clonedImageUploadButton.addEventListener('click', () => {
    fileUploadInput.click();
  });
  fileUploadInput.addEventListener('change', async e => {
    const imageFile = e.target.files[0];
    console.log({ imageFile });
    try {
      const { location } = await FileService.upload(imageFile);
      quill.insertEmbed(0, 'image', location);
    } catch (err) {
      console.error(err);
      pushErrorDialog();
    }
  });

  submitButton.onclick = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.set('title', titleElm.value);
      if (state.isUploadRepresentFile) {
        const file  = imageUploader.files[0]
        console.log({ file });
        formData.set('representFile', file);
      }
      formData.set('category', 'NEWS');
      formData.set('content', quill.root.innerHTML);
      await PostService.update(id, formData);
    } catch (error) {
      console.error(error);
      pushErrorDialog();
    } finally {
      history.back();
    }
  };
});
