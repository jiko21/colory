import ColorPanels from '@/components/Organisms/ColorPanels';
import Header from '@/components/Organisms/Header';
import DefaultTemplate from '@/components/Templates/DefaultTemplate';
import { defaultTheme, Provider, Text } from '@adobe/react-spectrum';
import React from 'react';

const App: React.FC = () => {
  return (
    <Provider theme={defaultTheme}>
      <DefaultTemplate
        header={
          <Header>
            <Text height="size-200" margin="size-1000">
              Colory
            </Text>
          </Header>
        }
      >
        <ColorPanels></ColorPanels>
      </DefaultTemplate>
    </Provider>
  );
};

export default App;
