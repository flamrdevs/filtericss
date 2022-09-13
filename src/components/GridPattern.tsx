import { useCallback, useEffect, useMemo, useState } from "react";

import { View } from "@adobe/react-spectrum";

import useUnsafeStyle from "../hooks/useUnsafeStyle";

function Cell(props: { size: number }) {
  const style = useUnsafeStyle({
    root: {
      borderStyle: "dashed",
      userSelect: "none",
    },
  });

  return <View width={props.size} height={props.size} borderColor="gray-200" borderWidth="thin" UNSAFE_style={style.root} />;
}

function GridPattern() {
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);
  const [size, setSize] = useState(256);

  const setSizeByBrowserZoomLevel = useCallback((value: number) => {
    if (value <= 70) {
      return 384;
    } else if (value <= 40) {
      return 512;
    } else if (value >= 200) {
      return 128;
    } else {
      return 256;
    }
  }, []);

  useEffect(() => {
    const calculateGrid = () => {
      const columnCount = Math.ceil(window.innerWidth / size);
      setColumns(columnCount);
      const rowCount = Math.ceil(window.innerHeight / size);
      setRows(rowCount);
      setSize(setSizeByBrowserZoomLevel(Math.round(window.devicePixelRatio * 100)));
    };

    calculateGrid();

    window.addEventListener("resize", calculateGrid);
    return () => {
      window.removeEventListener("resize", calculateGrid);
    };
  }, [size]);

  const length = useMemo(() => columns * rows, [columns, rows]);

  return (
    <View
      position="absolute"
      top={0}
      left={0}
      width="100%"
      height="100%"
      overflow="hidden"
      UNSAFE_style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {Array.from({ length }).map((_, i) => (
        <Cell key={i} size={size} />
      ))}
    </View>
  );
}

export default GridPattern;
