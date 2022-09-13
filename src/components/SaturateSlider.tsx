import {} from "react";

import { Slider } from "@adobe/react-spectrum";

import useFilterStore, { options } from "../stores/filter";

type SaturateSliderProps = {};

function SaturateSlider(props: SaturateSliderProps) {
  const { saturate, setSaturate } = useFilterStore();

  return (
    <Slider
      width="100%"
      label={options.saturate.label}
      minValue={options.saturate.minValue}
      maxValue={options.saturate.maxValue}
      formatOptions={options.saturate.formatOptions}
      step={options.saturate.step}
      value={saturate}
      onChange={setSaturate}
      isFilled
    />
  );
}

export type { SaturateSliderProps };
export default SaturateSlider;
