import pageHook from '../utils/pageHook';
import { getPostDetails } from './postDetails';
import * as Quill from 'quill';
import { resourceClient } from '../utils/client';
import { PostService } from '../utils/api';
import { pushErrorDialog } from '../utils/dialog';

pageHook(['update'], async () => {
  const titleElm = document.querySelector('.articleTitle');
  const imageUploader = document.querySelector('.postRepresentImageUploader');
  const submitButton = document.getElementById('postSubmitButton');

  console.log('update Hook is On');
  const id = (() => {
    const tokens = location.href.split('/');
    return Number.parseInt(tokens[tokens.length - 2]);
  })();
  const data = await getPostDetails(id);

  console.log({ data });
  titleElm.outerText = data.title;

  const quill = new Quill('#editor', {
    theme: 'snow',
    modules: {
      syntax: true,
      toolbar: '#toolbar-container',
    },
    placeholder: '게시글 내용을 입력해주세요'
  });
  quill.pasteHTML(data.text);

  if (data.representFileUrl) {
    const url = data.representFileUrl;
    const imageBlob = await resourceClient.get(url);
    const filename = url.split('/')[2];
    const file = new File([imageBlob], filename, { type:"image/jpeg", lastModified:new Date().getTime() }, 'utf-8');
    const container = new DataTransfer();
    container.items.add(file);
    console.log({ container });
    imageUploader.files = container.files;
  }

  submitButton.onclick = async () => {
    try {
      const formData = new FormData();
      formData.set('title', titleElm.outerText);
      formData.set('representFile', imageUploader.files[0]);
      formData.set('category', null);
      formData.set('content', quill.root.innerHTML);
      await PostService.update(id, formData);
    } catch (error) {
      pushErrorDialog();
    } finally {
      history.back();
    }
  };
});
