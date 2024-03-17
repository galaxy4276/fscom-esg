import pageHook from '../utils/pageHook';
import { PostService } from '../utils/api';
import { pushErrorDialog } from '../utils/dialog';

const getPostDetails = async (id) => {
  try {
    const data = await PostService.getDetails(id);
    return data;
  } catch (err) {
    pushErrorDialog();
  }
};

pageHook(['/post/'], async () => {
  console.log(location.href);
  const id = (() => {
    const tokens = location.href.split('/');
    return Number.parseInt(tokens[tokens.length - 1]);
  })();
  const post = await getPostDetails(id);
  console.log({ post });
});
