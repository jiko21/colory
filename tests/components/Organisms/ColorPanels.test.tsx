import ColorPanels from '@/components/Organisms/ColorPanels';
import * as urlUtil from '@/util/url';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';

const shouldInputElementsCorrect = (count: number) => {
  const textInputs = screen.getAllByTestId('color-text');
  const colorPickers = screen.getAllByTestId('color-picker');
  expect(textInputs.length).toBe(count);
  expect(colorPickers.length).toBe(count);
  for (let i = 0; i < count; ++i) {
    expect(textInputs[i].getAttribute('value')).toMatch(/^#[0-9a-fA-F]{6}$/);
    expect(textInputs[i].getAttribute('value')).toBe(colorPickers[i].getAttribute('value'));
  }
};

describe('components/Organisms/ColorPanels.tsx', () => {
  const getColorsFromUrlMock = jest.spyOn(urlUtil, 'getColorsFromUrl');
  const setColorsToUrlMock = jest.spyOn(urlUtil, 'setColorsToUrl');
  const copyUrlToClipboardMock = jest.spyOn(urlUtil, 'copyUrlToClipboard');
  const Target = () => (
    <RecoilRoot>
      <ColorPanels />
    </RecoilRoot>
  );

  afterEach(() => {
    getColorsFromUrlMock.mockClear();
    setColorsToUrlMock.mockClear();
    copyUrlToClipboardMock.mockClear();
  });

  it('correctly render (without url query)', () => {
    getColorsFromUrlMock.mockReturnValueOnce([]);
    render(<Target />);
    shouldInputElementsCorrect(1);
    const color = screen.getByTestId('color-text').getAttribute('value');
    expect(setColorsToUrlMock).toBeCalledWith([color]);
  });

  it('correctly render (with url query)', () => {
    getColorsFromUrlMock.mockReturnValueOnce(['#ff0000', '#ffff00']);
    render(<Target />);
    shouldInputElementsCorrect(2);
  });

  it('correctly add color picker', () => {
    getColorsFromUrlMock.mockReturnValueOnce(['#ff0000', '#ffff00']);
    render(<Target />);
    const addButton = screen.getByTestId('add-button');
    fireEvent.click(addButton);
    shouldInputElementsCorrect(3);
  });

  it('correctly call copyUrlToClipboard when link icon clicked', () => {
    getColorsFromUrlMock.mockReturnValueOnce(['#ff0000', '#ffff00']);
    render(<Target />);
    const linkButton = screen.getByTestId('link-button');
    fireEvent.click(linkButton);
    expect(copyUrlToClipboardMock).toBeCalled();
  });
});
