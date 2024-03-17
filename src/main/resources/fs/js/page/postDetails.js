import pageHook from '../utils/pageHook';
import { PostService } from '../utils/api';
import { pushErrorDialog } from '../utils/dialog';
import domUtils from '../utils/dom';

const getPostDetails = async (id) => {
  try {
    const data = await PostService.getDetails(id);
    return data;
  } catch (err) {
    pushErrorDialog();
  }
};

pageHook(['/post/'], async () => {
  const titleElm = document.getElementById('postTitle');
  const dateElm = document.getElementById('postDate');

  const id = (() => {
    const tokens = location.href.split('/');
    return Number.parseInt(tokens[tokens.length - 1]);
  })();
  const post = await getPostDetails(id);
  console.log({ post });
  domUtils.setEsgText(titleElm, post.title);
  domUtils.setEsgText(dateElm, post.createdAt);
});
