import React from 'react';
import { Provider, defaultTheme, Text } from '@adobe/react-spectrum';
import DefaultTemplate from '@/components/Templates/DefaultTemplate';
import Header from '@/components/Organisms/Header';

const App: React.FC = () => {
  return (
    <Provider theme={defaultTheme}>
      <DefaultTemplate>
        <Header>
          <Text height="size-1000" margin="size-1000">
            Colory
          </Text>
        </Header>
      </DefaultTemplate>
    </Provider>
  );
};

export default App;
