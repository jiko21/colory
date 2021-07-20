import React from 'react';
import { Flex, Header as SpectrumHeader, View } from '@adobe/react-spectrum';

const Header: React.FC = ({ children }) => {
  return (
    <SpectrumHeader>
      <Flex direction="row" gap="size-400" alignItems="center" justifyContent="center">
        <View>{children}</View>
      </Flex>
    </SpectrumHeader>
  );
};

export default Header;
