import pageHook from '../utils/pageHook';
import { PostService } from '../utils/api';
import { pushDialog, pushErrorDialog } from '../utils/dialog';
import domUtils from '../utils/dom';
import userUtils from '../utils/user';

const getPostDetails = async (id) => {
  try {
    const data = await PostService.getDetails(id);
    return data;
  } catch (err) {
    pushErrorDialog();
  }
};

const setAdminControls = (id) => {
  const user = userUtils.get();
  if (!user || user.role !== 'ADMIN') return;
  const postControlPanels = document.querySelector('.postControlsPanel');
  const postModifyButton = document.getElementById('postModifyButton');
  const postDeleteButton = document.getElementById('postDeleteButton');
  postControlPanels.classList.remove('hidden');

  postModifyButton.onclick = () => {
    location.href = `/post/${id}/update`;
  };

  postDeleteButton.onclick = async () => {
    try {
      await PostService.delete(id);
      pushDialog(`
          <div>
            <esg-text text="게시글이 삭제되었습니다"></esg-text>
          </div>
        `, {
        okCb: () => {
          history.back();
        },
      });
    } catch (error) {
      console.error(error);
      pushErrorDialog();
    }
  };
};

pageHook(['/post/'], async () => {
  const titleElm = document.getElementById('postTitle');
  const dateElm = document.getElementById('postDate');
  const contentElm = document.getElementById('postContent');

  const id = (() => {
    const tokens = location.href.split('/');
    return Number.parseInt(tokens[tokens.length - 1]);
  })();
  const post = await getPostDetails(id);
  console.log({ post });
  domUtils.setEsgText(titleElm, post.title);
  domUtils.setEsgText(dateElm, post.createdAt);

  contentElm.innerHTML = post.text;

  setAdminControls(id);
});
