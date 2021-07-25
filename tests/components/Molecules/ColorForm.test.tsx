import ColorForm from '@/components/Molecules/ColorForm';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

describe('components/Molecules/ColorForm.tsx', () => {
  it('correctly call handleChange with color picker', () => {
    const color = '#FF0000';
    const handleChangeMock = jest.fn();
    render(<ColorForm color={color} handleChange={handleChangeMock} />);
    fireEvent.change(screen.getByTestId('color-picker'), {
      target: { value: '#000000' },
    });
    expect(handleChangeMock).toBeCalledWith('#000000');
  });

  it('correctly call handleChange with input text', () => {
    const color = '#FF0000';
    const handleChangeMock = jest.fn();
    render(<ColorForm color={color} handleChange={handleChangeMock} />);
    fireEvent.change(screen.getByTestId('color-text'), {
      target: { value: '#000000' },
    });
    expect(handleChangeMock).toBeCalledWith('#000000');
  });
});
