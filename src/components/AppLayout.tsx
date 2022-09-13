import type { PropsWithChildren } from "react";

import { ActionButton, defaultTheme, Flex, Provider, Text, View } from "@adobe/react-spectrum";

import { IconMoon, IconSun } from "@tabler/icons";

import useAppStore from "../stores/app";
import useUnsafeStyle from "../hooks/useUnsafeStyle";

import GridPattern from "./GridPattern";

function AppHeader() {
  const { colorScheme, toggleColorScheme } = useAppStore();

  const style = useUnsafeStyle({
    title: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    actionButton: {
      borderRadius: "100%",
    },
  });

  return (
    <View paddingX="size-300" width="100%" height="100%">
      <Flex justifyContent="center" alignItems="center" gap="size-300" width="100%" height="100%">
        <Text UNSAFE_style={style.title}>filtericss</Text>

        <View flexGrow={1} />

        <ActionButton isQuiet onPress={toggleColorScheme} UNSAFE_style={style.actionButton}>
          {colorScheme === "dark" ? <IconSun /> : <IconMoon />}
        </ActionButton>
      </Flex>
    </View>
  );
}

type AppLayoutProps = PropsWithChildren<{}>;

function AppLayout(props: AppLayoutProps) {
  const { colorScheme } = useAppStore();

  const style = useUnsafeStyle({
    provider: {
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
    },
    gridLayer: {
      inset: "0",
      overflow: "hidden",
    },
    editorLayer: {
      inset: "0",
      overflow: "hidden",
    },
    main: {
      overflow: "auto",
    },
  });

  return (
    <Provider theme={defaultTheme} colorScheme={colorScheme} position="relative" UNSAFE_style={style.provider}>
      <View position="absolute" UNSAFE_style={style.gridLayer} zIndex={0}>
        <GridPattern />
      </View>

      <View position="absolute" UNSAFE_style={style.editorLayer} zIndex={1}>
        <View position="relative" width="100%" maxWidth={1536} height="100%" marginX="auto">
          <Flex direction="column" width="100%" height="100%">
            <View flexShrink={0} flexGrow={0} width="100%" height="size-1000">
              <AppHeader />
            </View>

            <View flexShrink={1} flexGrow={1} width="100%" height="100%" UNSAFE_style={style.main}>
              {props.children}
            </View>
          </Flex>
        </View>
      </View>
    </Provider>
  );
}

export type { AppLayoutProps };
export default AppLayout;
