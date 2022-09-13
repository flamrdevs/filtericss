import { useRef } from "react";
import type { CSSProperties } from "react";

function useUnsafeStyle<T extends { [key: string]: CSSProperties }>(css: T): T {
  const ref = useRef(css);
  return ref.current;
}

export default useUnsafeStyle;
