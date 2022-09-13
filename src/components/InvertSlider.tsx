import {} from "react";

import { Slider } from "@adobe/react-spectrum";

import useFilterStore, { options } from "../stores/filter";

type InvertSliderProps = {};

function InvertSlider(props: InvertSliderProps) {
  const { invert, setInvert } = useFilterStore();

  return (
    <Slider
      width="100%"
      label={options.invert.label}
      minValue={options.invert.minValue}
      maxValue={options.invert.maxValue}
      formatOptions={options.invert.formatOptions}
      step={options.invert.step}
      value={invert}
      onChange={setInvert}
      isFilled
    />
  );
}

export type { InvertSliderProps };
export default InvertSlider;
