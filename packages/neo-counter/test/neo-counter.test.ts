import { expect, fixture, html, assert } from "@open-wc/testing";
import { NeoCounter } from "../src/neo-counter";

describe("neo-counter", async () => {
    it("mounts correctly", async () => {
        const el = document.createElement("neo-counter");
        assert.instanceOf(el, NeoCounter);
    });

    it("uses given title", async () => {
        const el = await fixture<NeoCounter>(html`<neo-counter title="Testing"></neo-counter>`);
        expect(el.title).to.equal("Testing");
        await expect(el).shadowDom.to.equalSnapshot();

        const title = el.shadowRoot?.querySelector("h2");
        expect(title).lightDom.to.equal("Testing Nr. 111!!");
    });

    it("increments when clicking on the button", async () => {
        const el = await fixture<NeoCounter>(html`<neo-counter></neo-counter>`);

        const title = el.shadowRoot?.querySelector("h2");
        expect(title).lightDom.to.equal("Hey there from the original counter! Nr. 111!!");

        const button = el.shadowRoot?.querySelector("button");
        button?.click();
        el.requestUpdate();
        await el.updateComplete;
        expect(el.counter).to.equal(112);
        expect(title).lightDom.to.equal("Hey there from the original counter! Nr. 112!!");
    });
});
