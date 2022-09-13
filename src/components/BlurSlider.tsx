import {} from "react";

import { Slider } from "@adobe/react-spectrum";

import useFilterStore, { options } from "../stores/filter";

type BlurSliderProps = {};

function BlurSlider(props: BlurSliderProps) {
  const { blur, setBlur } = useFilterStore();

  return (
    <Slider
      width="100%"
      label={options.blur.label}
      getValueLabel={options.blur.getValueLabel}
      minValue={options.blur.minValue}
      maxValue={options.blur.maxValue}
      step={options.blur.step}
      value={blur}
      onChange={setBlur}
      isFilled
    />
  );
}

export type { BlurSliderProps };
export default BlurSlider;
