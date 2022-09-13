import {} from "react";

import { Slider } from "@adobe/react-spectrum";

import useFilterStore, { options } from "../stores/filter";

type SepiaSliderProps = {};

function SepiaSlider(props: SepiaSliderProps) {
  const { sepia, setSepia } = useFilterStore();

  return (
    <Slider
      width="100%"
      label={options.sepia.label}
      minValue={options.sepia.minValue}
      maxValue={options.sepia.maxValue}
      formatOptions={options.sepia.formatOptions}
      step={options.sepia.step}
      value={sepia}
      onChange={setSepia}
      isFilled
    />
  );
}

export type { SepiaSliderProps };
export default SepiaSlider;
