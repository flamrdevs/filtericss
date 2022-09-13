import {} from "react";

import { Slider } from "@adobe/react-spectrum";

import useFilterStore, { options } from "../stores/filter";

type GrayscaleSliderProps = {};

function GrayscaleSlider(props: GrayscaleSliderProps) {
  const { grayscale, setGrayscale } = useFilterStore();

  return (
    <Slider
      width="100%"
      label={options.grayscale.label}
      minValue={options.grayscale.minValue}
      maxValue={options.grayscale.maxValue}
      formatOptions={options.grayscale.formatOptions}
      step={options.grayscale.step}
      value={grayscale}
      onChange={setGrayscale}
      isFilled
    />
  );
}

export type { GrayscaleSliderProps };
export default GrayscaleSlider;
