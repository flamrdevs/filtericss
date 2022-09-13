import {} from "react";

import { Slider } from "@adobe/react-spectrum";

import useFilterStore, { options } from "../stores/filter";

type ContrastSliderProps = {};

function ContrastSlider(props: ContrastSliderProps) {
  const { contrast, setContrast } = useFilterStore();

  return (
    <Slider
      width="100%"
      label={options.contrast.label}
      minValue={options.contrast.minValue}
      maxValue={options.contrast.maxValue}
      formatOptions={options.contrast.formatOptions}
      step={options.contrast.step}
      value={contrast}
      onChange={setContrast}
      isFilled
      fillOffset={options.contrast.fillOffset}
    />
  );
}

export type { ContrastSliderProps };
export default ContrastSlider;
