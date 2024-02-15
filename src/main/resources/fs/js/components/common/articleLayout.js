export class ArticleLayout extends HTMLElement {
  connectedCallback() {
    const children = Array.from(this.children)
    console.log({ children });
    const rawTags = this.getAttribute("data-tags")
    const rowGap = this.getAttribute("gap-y")
    const tags = rawTags && rawTags.split(",")

    this.classList.add("articleLayout")

    if (rowGap) {
      this.style.rowGap = rowGap;
    }

    if (tags) {
      const root = document.createElement('div');
      root.style.display = 'flex';
      root.style.columnGap = '2px';
      root.style.flexWrap = 'wrap';


    }
    tags.forEach(tag => {
    })

    children.forEach(node => {
      this.append(node);
    });

  }
}

customElements.define("article-layout", ArticleLayout)
