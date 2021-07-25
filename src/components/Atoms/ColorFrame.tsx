import { Flex, View } from '@adobe/react-spectrum';
import React from 'react';

interface Props {
  color: string;
  width?: string;
  height?: string;
}

const ColorFrame: React.FC<Props> = React.memo(({ children, color, width, height }) => (
  <Flex
    UNSAFE_style={{
      backgroundColor: color,
    }}
    width={width}
    height={height}
    alignItems="center"
    justifyContent="center"
  >
    <View>{children}</View>
  </Flex>
));

export default ColorFrame;
