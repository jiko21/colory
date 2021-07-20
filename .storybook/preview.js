import { Provider, defaultTheme, Text } from '@adobe/react-spectrum';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <Provider theme={defaultTheme}>
      <Story />
    </Provider>
  ),
];
