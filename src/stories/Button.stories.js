import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

// The default export metadata controls how Storybook lists your stories and provides information used by addons
export default {
  title: 'Example/Button',// The component will be in Example folder
  component: Button,
  tags: ['autodocs'], // generate docs file in ui of storybook , defining the component defination from its summary and all available props
  argTypes: {
    backgroundColor: { control: 'color' },
    onclick: { action: 'click' },// Actions addon
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

// Use the named exports to define your component’s stories. We recommend you use UpperCamelCase for your story exports. Here’s how to render Button in the “primary” state and export a story called Primary.
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
