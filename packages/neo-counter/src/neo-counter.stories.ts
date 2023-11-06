// neo-counter.stories.ts

import "./neo-counter";

import type { Meta, StoryObj } from "@storybook/web-components";

import { html } from "lit";

/**
 * These stories showcase the counter
 */
const meta: Meta = {
    title: "Docs/Custom MDX near Component",
    component: "neo-counter",
    parameters: {
        docs: {
            description: {
                component: "These stories showcase the counter."
            }
        }
    },
    args: {
        title: "Hi!"
    },
    argTypes: {
        title: { control: "text" },
        counter: { control: "number" },
    },
    render: (args) =>
        html`<neo-counter title="${args.title}" counter="${args.counter}"></neo-counter>`,
};
export default meta;

type Story = StoryObj;

/**
 * This is the primary counter.
 */
export const Primary: Story = {
    args: {
        title: "Welcome!",
        counter: 1,
    },
};

/**
 * This is the primary counter.
 */
export const Secondary: Story = {
    args: {
        ...Primary.args,
        counter: 43,
    },
};