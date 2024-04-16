class Text extends HTMLElement {
  element = null

  connectedCallback() {
    const text = this.getAttribute('text');
    const sizeProp = this.getAttribute('size');
    const boldProp = this.getAttribute('bold');
    const colorProp = this.getAttribute('color');
    const hrefProp = this.getAttribute('href');
    const classNames = this.getAttribute('class');

    this.innerHTML = `
      <span class="${classNames}">${text}</span>
    `

    const element = this.querySelector('span');
    this.element = element
    element.style.fontSize = this.getSize(sizeProp);
    if (boldProp === 'true') {
      element.style.fontWeight = '600';
    }

    element.style.color = colors[colorProp];

    if (hrefProp) {
      element.style.cursor = 'pointer';
      element.onclick = () => location.href = hrefProp
    }

  }

  static observedAttributes = ['text', 'size', 'bold', 'color', 'class']

  attributeChangedCallback(name, oldState, newState) {
    if (!this?.element) return;
    if (name === 'text') {
      this.element.textContent = newState
    }

    if (name === "color") {
      this.element.style.color = newState
    }
  }

  getSize(s) {
    const size = sizes[s]
    if (size) return s
    return size
  }

}

const sizes = {
  small: '14px',
  normal: '16px',
  medium: '18px',
  large: '20px',
  xlarge: '24px'
}

const colors = {
  title: '#334155',
  paragraph: '#64748B',
  white: "white",
  green: "#8AC32A",
}

if (!customElements.get("esg-text")) {
  customElements.define("esg-text", Text)
}
