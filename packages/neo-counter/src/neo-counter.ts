import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("neo-counter")
export class NeoCounter extends LitElement {
    static styles = css`
      :host {
        display: block;
        padding: 25px;
        color: var(--neo-counter-text-color, #000);
      }
    `;


    @property({ type: String }) title = "Hey there from the original counter!";

    @property({ type: Number }) counter = 111;

    __increment() {
        this.counter += 1;
    }

    render() {
        return html`
            <h2>${this.title} Nr. ${this.counter}!!</h2>
            <button @click=${this.__increment}>increment</button>
        `;
    }
}
