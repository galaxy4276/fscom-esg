import { unsafeCSS, LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from '../../../css/tailwind-out.css?inline';

@customElement('executive-card')
export default class ExecutiveCard extends LitElement {

  static styles = [
    unsafeCSS(styles),
  ]

  render() {
    const profileImageUrl = this.getAttribute('src');
    console.log({ profileImageUrl });
    // const history = this.getAttribute('history');
    return html`
      <button class="w-[520px] h-[520px] animate-pulse">
        안녕하세요
      </button>
    `;
  }

}

console.log('하이dydy요를레이유후');
