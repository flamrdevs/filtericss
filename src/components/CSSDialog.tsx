import {} from "react";

import { Button, Content, Dialog, DialogTrigger, Divider, Heading, Text } from "@adobe/react-spectrum";

import useCSSStore from "../stores/css";

type CSSDialogProps = {};

function CSSDialog(props: CSSDialogProps) {
  const cssStore = useCSSStore();

  return (
    <DialogTrigger type="popover" placement="left top">
      <Button variant="primary">CSS</Button>
      <Dialog width={640}>
        <Heading>Generated CSS</Heading>
        <Divider />
        <Content>
          <Text>{cssStore.output}</Text>
        </Content>
      </Dialog>
    </DialogTrigger>
  );
}

export type { CSSDialogProps };
export default CSSDialog;
