import { ThemeProvider } from "@itwin/itwinui-react";
import { withConsole } from '@storybook/addon-console';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: { // sorting stories
      storySort: (a, b) =>
        a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true }),
    },
  },
  decorators: [(Story) => ( // Modify the stories here
    <ThemeProvider theme={"light"}>
      {/* <ParentComponent> , your parent component to modify styling */}
      <Story />
      {/* </ParentComponent> */}
    </ThemeProvider >
  ),
  (storyFn, context) => withConsole()(storyFn)(context)]
};


export default preview;
