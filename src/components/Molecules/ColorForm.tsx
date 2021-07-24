import { TextField, View } from '@adobe/react-spectrum';
import React from 'react';

interface Props {
  color: string;
  handleChange: (value: string) => void;
}

const ColorForm: React.FC<Props> = ({ color, handleChange }) => {
  return (
    <>
      <View>
        <input type="color" value={color} onChange={(e) => handleChange(e.target.value)} data-testid="color-picker" />
      </View>
      <View>
        <TextField value={color} onChange={handleChange} data-testid="color-text" />
      </View>
    </>
  );
};

export default ColorForm;
