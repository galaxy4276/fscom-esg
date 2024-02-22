import dayjs from 'dayjs';

export class ArticleCard extends HTMLElement {
  connectedCallback() {
    const banner = this.getAttribute('src');
    const rawTitle = this.getAttribute('title');
    const title = rawTitle.length >= 38 ? rawTitle.substring(0, 38) + "..." : rawTitle;
    const rawCreatedDate = this.getAttribute('created-date');
    const createdDate = dayjs(rawCreatedDate).format('YYYY.MM.DD');

    this.innerHTML = `
      <div class="card shadow-lg w-full md:max-w-[280px] articleCard">
        <div class="card-body">
          <h2 class="card-title">${title}</h2>
          <span class="text-slate-500">${createdDate}</span>
        </div>
         <figure>
            <img src="${banner}"> 
        </figure>
      </div>
    `
  }
}

customElements.define("article-card", ArticleCard)
