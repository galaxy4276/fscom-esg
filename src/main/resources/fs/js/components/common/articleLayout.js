/**
 * @description 메인 컨텐츠 레이아웃 컴포넌트
 */
export class ArticleLayout extends HTMLElement {
  connectedCallback() {
    const children = Array.from(this.children)
    const rawTags = this.getAttribute("data-tags")
    const rowGap = this.getAttribute("gap-y")
    const tags = rawTags && rawTags.split(",")

    this.classList.add("articleLayout")

    if (rowGap) {
      this.style.rowGap = rowGap;
    }

    if (tags) {
      const tagRoot = document.createElement('div');
      tagRoot.classList.add("contentMetadataRoot")
      const tagContent = document.createElement('div');
      tagContent.classList.add("contentMetdata")
      tags.forEach((tag, i) => {
        const text = document.createElement('span');
        text.innerText = tag;
        tagContent.append(text);
        if (tags[i + 1]) {
          const arrow = document.createElement("span")
          arrow.innerText = ">"
          tagContent.append(arrow);
        }
      });
      tagRoot.append(tagContent);
      this.append(tagRoot);
    }

    children.forEach(node => {
      this.append(node);
    });

  }
}

customElements.define("article-layout", ArticleLayout)
