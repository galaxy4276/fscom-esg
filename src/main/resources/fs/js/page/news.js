import pageHook from '../utils/pageHook';
import { PostService } from '../utils/api';
import { pushErrorDialog } from '../utils/dialog';

const states = {
  page: 0,
};

const getNews = async () => {
  try {
    const data = await PostService.getList('NEWS', states.page);
    console.log(data);
  } catch (err) {
    pushErrorDialog();
  }
};

pageHook(['/news'], async () => {
  const { content } = await getNews();
  console.log(data);
});
