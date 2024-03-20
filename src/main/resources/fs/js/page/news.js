import pageHook from '../utils/pageHook';
import { PostService } from '../utils/api';
import { pushErrorDialog } from '../utils/dialog';
import userUtils from '../utils/user';

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

const renderPagination = ({ numberOfElements, totalElements, totalPages  }) => {
  const delimeterElm = document.querySelector('.pageDelimeter');
  const prevButtonElm = document.querySelector('.prevBtn');
  const nextButtonElm = document.querySelector('.nextBtn');

  const updatePageStatus = () =>
    delimeterElm.innerText = String(states.page + 1);

  updatePageStatus();

  prevButtonElm.addEventListener('click', () => {
    if (states.page === 0) {
      return;
    }
    states.page = states.page - 1;
    updatePageStatus();
    update();
  });
  nextButtonElm.addEventListener('click', () => {
    // const maxPage = totalElements % 9 !== 0 ? totalPages + 1 : totalPages;
    // console.log({ maxPage });
    if (states.page > totalPages) {
      return;
    }
    states.page = states.page + 1;
    updatePageStatus();
    update();
  });
};

const update = async () => {
  const { content, ...rest } = await getNews();
  const postSection = document.querySelector('.newsLayout');
  postSection.innerHTML = '';
  const cards = content.map(({ title, createdAt, representUrl, id }) => {
    const card = document.createElement('article-card');
    card.setAttribute('title', title);
    card.setAttribute('created-date', createdAt);
    if (representUrl) {
      card.setAttribute('src', representUrl);
    }
    card.onclick = () => {
      location.href = `/post/${id}`;
    }
    return card;
  });

  console.log({ cards });

  cards.forEach(card => {
    postSection.appendChild(card);
  });

  return rest;
};

const setAdminControls = () => {
  const user = userUtils.get();
  if (!user || user.role !== 'ADMIN') return;
  const postWriteButton = document.querySelector('.postWriteBtn');
  postWriteButton.classList.remove('hidden');
}

pageHook(['/news'], async () => {
  const { numberOfElements, totalElements, totalPages } = await update();
  renderPagination({
    numberOfElements,
    totalElements,
    totalPages
  });
  setAdminControls();
});
