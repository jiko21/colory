import Header from '@/components/Organisms/Header';
import { render } from '@testing-library/react';
import React from 'react';

describe('components/Organisms/Header.tsx', () => {
  it('correctly render', () => {
    const component = render(<Header>Sample</Header>);
    expect(component.container).toMatchSnapshot();
  });
});
