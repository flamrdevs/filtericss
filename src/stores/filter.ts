import create from "zustand";
import { persist } from "zustand/middleware";

type Filter = {
  blur: number;
  brightness: number;
  contrast: number;
  grayscale: number;
  hueRotate: number;
  invert: number;
  opacity: number;
  saturate: number;
  sepia: number;
};

type FilterStoreType = Filter & {
  setBlur: (value: number) => void;
  setBrightness: (value: number) => void;
  setContrast: (value: number) => void;
  setGrayscale: (value: number) => void;
  setHueRotate: (value: number) => void;
  setInvert: (value: number) => void;
  setOpacity: (value: number) => void;
  setSaturate: (value: number) => void;
  setSepia: (value: number) => void;
  reset: () => void;
};

const options = {
  blur: {
    label: "Blur",
    getValueLabel: (value: number) => `${value}px`,
    minValue: 0,
    maxValue: 50,
    initialValue: 0,
    step: 1,

    __inactiveValue: 0,
    __getCss: (value: number) => `blur(${value}px)`,
  },
  brightness: {
    label: "Brightness",
    minValue: 0,
    maxValue: 2,
    initialValue: 1,
    step: 0.01,
    fillOffset: 1,
    formatOptions: {
      style: "percent",
    },

    __inactiveValue: 1,
    __getCss: (value: number) => `brightness(${Number((value * 100).toFixed(0))}%)`,
  },
  contrast: {
    label: "Contrast",
    minValue: 0,
    maxValue: 2,
    initialValue: 1,
    step: 0.01,
    fillOffset: 1,
    formatOptions: {
      style: "percent",
    },

    __inactiveValue: 1,
    __getCss: (value: number) => `contrast(${Number((value * 100).toFixed(0))}%)`,
  },
  grayscale: {
    label: "Grayscale",
    minValue: 0,
    maxValue: 1,
    initialValue: 0,
    step: 0.01,
    formatOptions: {
      style: "percent",
    },

    __inactiveValue: 0,
    __getCss: (value: number) => `grayscale(${Number((value * 100).toFixed(0))}%)`,
  },
  hueRotate: {
    label: "Hue Rotate",
    getValueLabel: (value: number) => `${value}deg`,
    minValue: 0,
    maxValue: 360,
    initialValue: 0,
    step: 1,

    __inactiveValue: 0,
    __getCss: (value: number) => `hue-rotate(${value}deg)`,
  },
  invert: {
    label: "Invert",
    minValue: 0,
    maxValue: 1,
    initialValue: 0,
    step: 0.01,
    formatOptions: {
      style: "percent",
    },

    __inactiveValue: 0,
    __getCss: (value: number) => `invert(${Number((value * 100).toFixed(0))}%)`,
  },
  opacity: {
    label: "Opacity",
    minValue: 0,
    maxValue: 1,
    initialValue: 1,
    step: 0.01,
    formatOptions: {
      style: "percent",
    },

    __inactiveValue: 1,
    __getCss: (value: number) => `opacity(${Number((value * 100).toFixed(0))}%)`,
  },
  saturate: {
    label: "Saturate",
    minValue: 0,
    maxValue: 2,
    initialValue: 1,
    step: 0.01,
    formatOptions: {
      style: "percent",
    },

    __inactiveValue: 1,
    __getCss: (value: number) => `saturate(${Number((value * 100).toFixed(0))}%)`,
  },
  sepia: {
    label: "Sepia",
    minValue: 0,
    maxValue: 1,
    initialValue: 0,
    step: 0.01,
    formatOptions: {
      style: "percent",
    },

    __inactiveValue: 0,
    __getCss: (value: number) => `sepia(${Number((value * 100).toFixed(0))}%)`,
  },
};

function getInitialValue(): Filter {
  return {
    blur: options.blur.initialValue,
    brightness: options.brightness.initialValue,
    contrast: options.contrast.initialValue,
    grayscale: options.grayscale.initialValue,
    hueRotate: options.hueRotate.initialValue,
    invert: options.invert.initialValue,
    opacity: options.opacity.initialValue,
    saturate: options.saturate.initialValue,
    sepia: options.sepia.initialValue,
  };
}

const useFilterStore = create(
  persist<FilterStoreType>(
    (set, get) => ({
      ...getInitialValue(),
      setBlur(blur) {
        set({ blur });
      },
      setBrightness(brightness) {
        set({ brightness });
      },
      setContrast(contrast) {
        set({ contrast });
      },
      setGrayscale(grayscale) {
        set({ grayscale });
      },
      setHueRotate(hueRotate) {
        set({ hueRotate });
      },
      setInvert(invert) {
        set({ invert });
      },
      setOpacity(opacity) {
        set({ opacity });
      },
      setSaturate(saturate) {
        set({ saturate });
      },
      setSepia(sepia) {
        set({ sepia });
      },
      reset() {
        set(getInitialValue());
      },
    }),
    {
      name: "filter-store",
      getStorage: () => sessionStorage,
    }
  )
);

export type { Filter, FilterStoreType };
export { options };
export { getInitialValue };
export default useFilterStore;
