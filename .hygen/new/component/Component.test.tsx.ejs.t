---
to: tests/<%= path %>/<%= component_name %>.test.tsx
---
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import <%= component_name %> from '@/components/<%= path %>/<%= component_name %>';

describe('components/<%= path %>/<%= component_name %>.tsx', () => {
  it('correctly render', () => {
    const component = render(<<%= component_name %> />);
    expect(component.container).toMatchSnapshot();
  });
});
