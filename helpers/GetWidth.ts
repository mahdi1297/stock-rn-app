import {valueCacher} from '../utils/Cacher';
import {windowSize} from './../utils/WindowSize';

type GetWidth = (WIDTH_MINES_FROM?: number) => any;

export const getWidth: GetWidth = WIDTH_MINES_FROM => {
  const CACHE_NAME = `${WIDTH_MINES_FROM}`

  if (valueCacher.exists(CACHE_NAME)) {
    return valueCacher?.get(`${WIDTH_MINES_FROM}`);
  }

  const getResultNumber = () => WINDOW_WIDTH - WIDTH_MINES_FROM; 

  const {WINDOW_WIDTH} = windowSize();

  const resultValue = getResultNumber();

  valueCacher.add(CACHE_NAME, resultValue);

  return resultValue;
};
