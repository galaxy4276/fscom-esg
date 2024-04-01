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
    switch (s) {
      case 'small': {
        return '14px';
      }
      case 'normal': {
        return '16px';
      }
      case 'medium': {
        return '18px';
      }
      case 'large': {
        return '20px';
      }
      case "xlarge": {
        return "24px";
      }
      default: {
        return '14px';
      }
    }
  }

}

const colors = {
  title: '#334155',
  paragraph: '#64748B',
  white: "white",
}

if (!customElements.get("esg-text")) {
  customElements.define("esg-text", Text)
}
