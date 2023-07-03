import React from 'react'
import ButtonComponent from './Button'
import { action } from "@storybook/addon-actions"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
// The default export metadata controls how Storybook lists your stories and provides information used by addons
export default {
  title: 'Form/Button', // The component will be in Forms folder
  component: ButtonComponent,
  tags: ['autodocs'], // generate docs file in ui of storybook , defining the component defination from its summary and all available props
  args: {
    children: 'Button1' // these args will be shared by all 3 down defined using args 
    // and not by 4 components in extreme down 
  }
}


const Template = args => <ButtonComponent {...args} />

// Use the named exports to define your component’s stories. We recommend you use UpperCamelCase for your story exports. Here’s how to render Button in the “primary” state and export a story called PrimaryA.
export const PrimaryA = Template.bind({})
PrimaryA.args = {
  variant: 'high-visibility',
  // children: 'Primary Args', //if uncommnented , will override the default set above
}
export const SecondaryA = Template.bind({})
SecondaryA.args = {
  variant: 'borderless',
  // children: 'Secondary Args',
}
export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
  ...PrimaryA.args,
  // children: 'Long Primary Args',
}

// not a good way to write like below
export const Primary = () => <ButtonComponent variant='high-visibility' onClick={action('Click handler')}>Primary</ButtonComponent>
export const Secondary = () => <ButtonComponent variant='cta' onClick={() => console.log("Button is Clicked")}> Secondary</ButtonComponent >
export const Success = () => <ButtonComponent variant='borderless'>Success</ButtonComponent>
export const Danger = () => <ButtonComponent variant='borderless'>Danger</ButtonComponent>