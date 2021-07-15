import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Component from '@/Component';

describe('Component.tsx', () => {
  it('correctly render', () => {
    const component = render(<Component />);
    expect(component.container).toMatchSnapshot();
  });

  it('correctly fire event', () => {
    render(<Component />);
    fireEvent.click(screen.getByText('+'));
    expect(screen.findByText('1')).toBeTruthy();
  });
});
