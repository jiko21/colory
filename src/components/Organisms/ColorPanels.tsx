import { colorState } from '@/atom/color';
import ColorPanel from '@/components/Organisms/ColorPanel';
import { useMobileDevice } from '@/hooks/device';
import { generateRandomColor } from '@/util/color';
import { copyUrlToClipboard, getColorsFromUrl, setColorsToUrl } from '@/util/url';
import { ActionButton, Flex, Tooltip, TooltipTrigger, View } from '@adobe/react-spectrum';
import Add from '@spectrum-icons/workflow/Add';
import Link from '@spectrum-icons/workflow/Link';
import React, { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const ColorPanels: React.FC = () => {
  const colors = useRecoilValue(colorState);
  const setColors = useSetRecoilState(colorState);

  useEffect(() => {
    if (colors.length !== 0) {
      setColorsToUrl(colors);
    }
  }, [colors]);

  useEffect(() => {
    const urlColors = getColorsFromUrl();
    if (urlColors.length === 0) {
      setColors((_) => [generateRandomColor()]);
    } else {
      setColors((_) => urlColors);
    }
  }, []);

  const setColor = (value: string, i: number) => {
    setColors((oldColors) => [...oldColors.slice(0, i), value, ...oldColors.slice(i + 1, colors.length)]);
  };

  const addColor = () => {
    if (colors.length < 5) {
      setColors((oldColors) => [...oldColors, generateRandomColor()]);
    }
  };

  const clickLink = () => {
    copyUrlToClipboard();
  };

  const isMobile = useMobileDevice();

  const direction = isMobile ? 'column' : 'row';

  return (
    <Flex direction={direction} width="100%" height="calc(100vh - size-200)" gap="size-10">
      <View width="100%" height="100%">
        <Flex direction={direction} width="100%" height="100%">
          {colors.map((color, i) => (
            <ColorPanel color={color} setColor={(value) => setColor(value, i)} key={i} />
          ))}
        </Flex>
        <View position="absolute" bottom="size-500" right="size-500" zIndex={100}>
          <TooltipTrigger>
            <ActionButton aria-label="Link Only" onPress={clickLink} data-testid="link-button">
              <Link aria-label="LinkIcon" />
            </ActionButton>
            <Tooltip>Share this color schema with link</Tooltip>
          </TooltipTrigger>
        </View>
      </View>
      <View alignSelf="center" justifySelf="center">
        <ActionButton aria-label="Icon Only" onPress={addColor} data-testid="add-button">
          <Add aria-label="AddIcon" />
        </ActionButton>
      </View>
    </Flex>
  );
};

export default ColorPanels;
