import create from "zustand";
import { persist } from "zustand/middleware";

type ColorScheme = "light" | "dark";

type AppStoreType = {
  colorScheme: ColorScheme;
  toggleColorScheme: () => void;
};

const useAppStore = create(
  persist<AppStoreType>(
    (set, get) => ({
      colorScheme: "light",
      toggleColorScheme() {
        set({ colorScheme: get().colorScheme === "dark" ? "light" : "dark" }, undefined);
      },
    }),
    {
      name: "app-store",
    }
  )
);

export type { AppStoreType };
export default useAppStore;
