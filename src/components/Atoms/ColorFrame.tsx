import { Flex, View } from '@adobe/react-spectrum';
import React from 'react';

interface Props {
  color: string;
}

const ColorFrame: React.FC<Props> = React.memo(({ children, color }) => (
  <Flex
    UNSAFE_style={{
      backgroundColor: color,
    }}
  >
    <View>{children}</View>
  </Flex>
));

export default ColorFrame;
