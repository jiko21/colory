import { atom } from 'recoil';

export const colorState = atom<string[]>({
  key: 'colorState',
  default: [],
});
