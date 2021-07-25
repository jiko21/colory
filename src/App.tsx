import ColorPanels from '@/components/Organisms/ColorPanels';
import Header from '@/components/Organisms/Header';
import DefaultTemplate from '@/components/Templates/DefaultTemplate';
import { defaultTheme, Provider, Text } from '@adobe/react-spectrum';
import React from 'react';
import { RecoilRoot } from 'recoil';

const App: React.FC = () => {
  return (
    <Provider theme={defaultTheme}>
      <RecoilRoot>
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
      </RecoilRoot>
    </Provider>
  );
};

export default App;
