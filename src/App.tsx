import { useMemo } from "react";

import { Flex, Image, View } from "@adobe/react-spectrum";
import { useHover } from "@react-aria/interactions";

import useCSSStore, { defaultCss } from "./stores/css";

import AppLayout from "./components/AppLayout";
import CSSDialog from "./components/CSSDialog";
import ResetButton from "./components/ResetButton";
import BlurSlider from "./components/BlurSlider";
import BrightnessSlider from "./components/BrightnessSlider";
import ContrastSlider from "./components/ContrastSlider";
import GrayscaleSlider from "./components/GrayscaleSlider";
import HueRotateSlider from "./components/HueRotateSlider";
import InvertSlider from "./components/InvertSlider";
import OpacitySlider from "./components/OpacitySlider";
import SaturateSlider from "./components/SaturateSlider";
import SepiaSlider from "./components/SepiaSlider";

function App() {
  const src = "/images/image.webp";

  const cssStore = useCSSStore();

  let { hoverProps, isHovered } = useHover({});

  const css = useMemo(() => (isHovered ? defaultCss : cssStore), [isHovered, JSON.stringify(cssStore)]);

  return (
    <AppLayout>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        direction={{ base: "column", L: "row" }}
        gap="size-100"
        width="100%"
        height="100%"
        minHeight={700}
      >
        <View flexShrink={1} flexGrow={1} width="100%" height="100%" padding="size-200">
          <Flex justifyContent="center" alignItems="center" width="100%" height="100%">
            <div {...hoverProps} style={{ width: "100%", maxWidth: 700, height: "100%", maxHeight: 700 }}>
              <Image
                src={src}
                alt="Source"
                width="100%"
                height="100%"
                objectFit="cover"
                UNSAFE_style={{
                  WebkitFilter: css.style,
                  filter: css.style,
                  transition: "filter 0.25s",
                }}
              />
            </div>
          </Flex>
        </View>

        <View flexShrink={0} flexGrow={0} width={{ base: "100%", L: 384 }} height={{ base: 400, L: "100%" }} padding="size-200">
          <Flex justifyContent="center" alignItems={{ base: "stretch", L: "center" }} width="100%" height="100%">
            <View
              width="100%"
              maxWidth={700}
              paddingX="size-400"
              paddingY="size-300"
              backgroundColor="gray-75"
              borderRadius="regular"
              UNSAFE_style={{ overflow: "auto" }}
            >
              <Flex direction="column" gap="size-200">
                <Flex justifyContent="space-between" marginBottom="size-200">
                  <CSSDialog />
                  <ResetButton />
                </Flex>

                <BlurSlider />
                <BrightnessSlider />
                <ContrastSlider />
                <GrayscaleSlider />
                <HueRotateSlider />
                <InvertSlider />
                <OpacitySlider />
                <SaturateSlider />
                <SepiaSlider />
              </Flex>
            </View>
          </Flex>
        </View>
      </Flex>
    </AppLayout>
  );
}

export default App;
