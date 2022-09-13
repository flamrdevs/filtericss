import {} from "react";

import { Slider } from "@adobe/react-spectrum";

import useFilterStore, { options } from "../stores/filter";

type BrightnessSliderProps = {};

function BrightnessSlider(props: BrightnessSliderProps) {
  const { brightness, setBrightness } = useFilterStore();

  return (
    <Slider
      width="100%"
      label={options.brightness.label}
      minValue={options.brightness.minValue}
      maxValue={options.brightness.maxValue}
      formatOptions={options.brightness.formatOptions}
      step={options.brightness.step}
      value={brightness}
      onChange={setBrightness}
      isFilled
      fillOffset={options.brightness.fillOffset}
    />
  );
}

export type { BrightnessSliderProps };
export default BrightnessSlider;
