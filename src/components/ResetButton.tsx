import {} from "react";

import { Button } from "@adobe/react-spectrum";

import useFilterStore from "../stores/filter";

type ResetButtonProps = {};

function ResetButton(props: ResetButtonProps) {
  const { reset } = useFilterStore();
  return (
    <Button variant="primary" onPress={reset}>
      Reset
    </Button>
  );
}

export type { ResetButtonProps };
export default ResetButton;
