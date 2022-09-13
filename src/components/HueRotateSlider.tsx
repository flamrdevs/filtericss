import {} from "react";

import { Slider } from "@adobe/react-spectrum";

import useFilterStore, { options } from "../stores/filter";

type HueRotateSliderProps = {};

function HueRotateSlider(props: HueRotateSliderProps) {
  const { hueRotate, setHueRotate } = useFilterStore();

  return (
    <Slider
      width="100%"
      label={options.hueRotate.label}
      getValueLabel={options.hueRotate.getValueLabel}
      minValue={options.hueRotate.minValue}
      maxValue={options.hueRotate.maxValue}
      step={options.hueRotate.step}
      value={hueRotate}
      onChange={setHueRotate}
      isFilled
    />
  );
}

export type { HueRotateSliderProps };
export default HueRotateSlider;
