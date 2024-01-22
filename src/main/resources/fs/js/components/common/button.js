/**
 * 회원가입 버튼
 */
class EsgButton extends HTMLElement {
  button = null;

  connectedCallback() {
    console.dir(this);
    const buttonText = this.getAttribute('text');
    const disabled = this.getAttribute('disabled');

    const button = document.createElement('button');
    this.button = button;
    button.className = 'btn btn-slate btn-wide';
    button.textContent = buttonText;
    this.appendChild(button);
    if (disabled) {
      button.setAttribute('disabled', disabled);
    }
  }

  static observedAttributes = ['show', 'disabled', 'text'];

  attributeChangedCallback(name, oldState, newState) {
    if (name === 'text') {
      this.button.innerText = newState;
    }
  }

}

customElements.define('esg-button', EsgButton);
