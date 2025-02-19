export class ContentHeader extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute("title")

    this.style.width = "100%"

    this.innerHTML = `
       <div class="w-full forest-bg">
      <div class="flex flex-col justify-center mx-0 lg:mx-[240px] animate__animated animate__fadeIn">
        <div class="flex flex-col items-center pt-[70px] py-[50px] whitespace-nowrap">
          <p class="text-white text-[52px] md:text-[72px] font-bold">${title}</p>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define("content-header", ContentHeader)
