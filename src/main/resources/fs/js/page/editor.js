import * as Quill from "quill"

const editorElm = document.getElementById('editor');

(() => {
  if (!editorElm) return;
  const quill = new Quill('#editor', {
    theme: 'snow',
  });

  quill.on('text-change', (delta, oldDelta, source) => {
    console.log({ delta, oldDelta, source });
  });

  const previousBtns = Array.from(document.getElementsByClassName('previous-btn'));
  previousBtns.forEach(b => {
    b.addEventListener('click', e => {
      e.preventDefault();
      history.back();
    });
  });
})();

(() => {
  const postWriteBtns = Array.from(document.getElementsByClassName('postWriteBtn'));
  postWriteBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      location.href = '/post?category=news';
    });
  });
})();
