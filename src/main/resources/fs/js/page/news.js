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
    return data;
  } catch (err) {
    pushErrorDialog();
  }
};

pageHook(['/news'], async () => {
  const { content } = await getNews();
  const postSection = document.querySelector('.newsLayout');

  const cards = content.map(({ title, createdAt, representUrl, id }) => {
    const card = document.createElement('article-card');
    card.setAttribute('title', title);
    card.setAttribute('created-date', createdAt);
    card.setAttribute('src', representUrl);
    card.onclick = () => {
      location.href = `/post/${id}`;
    }
    return card;
  });

  console.log({ cards });

  cards.forEach(card => {
    postSection.appendChild(card);
  })
  console.log(data);
});
