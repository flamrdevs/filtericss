import create from "zustand";

import useFilterStore, { options, getInitialValue } from "./filter";
import type { Filter } from "./filter";

type CSSSegment = {
  value: string;
  active: boolean;
};
function createSegment(value: string, active: boolean): CSSSegment {
  return {
    value,
    active,
  };
}
function cssMapValueFn(css: CSSSegment) {
  return css.value;
}
function cssFilterActiveFn(css: CSSSegment) {
  return css.active;
}
function cssJoinString(array: string[]) {
  return array.join(" ");
}
function getCSS<T extends Filter>(filter: T): CSSStoreType {
  let css: CSSSegment[] = [];

  const { blur, brightness, contrast, grayscale, hueRotate, invert, opacity, saturate, sepia } = options;

  css.push(createSegment(blur.__getCss(filter.blur), filter.blur !== blur.__inactiveValue));
  css.push(createSegment(brightness.__getCss(filter.brightness), filter.brightness !== brightness.__inactiveValue));
  css.push(createSegment(contrast.__getCss(filter.contrast), filter.contrast !== contrast.__inactiveValue));
  css.push(createSegment(grayscale.__getCss(filter.grayscale), filter.grayscale !== grayscale.__inactiveValue));
  css.push(createSegment(hueRotate.__getCss(filter.hueRotate), filter.hueRotate !== hueRotate.__inactiveValue));
  css.push(createSegment(invert.__getCss(filter.invert), filter.invert !== invert.__inactiveValue));
  css.push(createSegment(opacity.__getCss(filter.opacity), filter.opacity !== opacity.__inactiveValue));
  css.push(createSegment(saturate.__getCss(filter.saturate), filter.saturate !== saturate.__inactiveValue));
  css.push(createSegment(sepia.__getCss(filter.sepia), filter.sepia !== sepia.__inactiveValue));

  return {
    style: cssJoinString(css.map(cssMapValueFn)),
    output: cssJoinString(css.filter(cssFilterActiveFn).map(cssMapValueFn)),
  };
}

const defaultCss = getCSS(getInitialValue());

type CSSStoreType = {
  style: string;
  output: string;
};

const useCSSStore = create<CSSStoreType>(() => getCSS(useFilterStore.getState()));

useFilterStore.subscribe((state) => {
  useCSSStore.setState(getCSS(state));
});

export type { CSSStoreType };
export { defaultCss };
export default useCSSStore;
