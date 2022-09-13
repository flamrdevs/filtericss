import {} from "react";

import { Slider } from "@adobe/react-spectrum";

import useFilterStore, { options } from "../stores/filter";

type OpacitySliderProps = {};

function OpacitySlider(props: OpacitySliderProps) {
  const { opacity, setOpacity } = useFilterStore();

  return (
    <Slider
      width="100%"
      label={options.opacity.label}
      minValue={options.opacity.minValue}
      maxValue={options.opacity.maxValue}
      formatOptions={options.opacity.formatOptions}
      step={options.opacity.step}
      value={opacity}
      onChange={setOpacity}
      isFilled
    />
  );
}

export type { OpacitySliderProps };
export default OpacitySlider;
