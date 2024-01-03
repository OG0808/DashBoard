import create from "zustand";

// Definir la tienda
const useDarkmode = create((set, get) => ({
  openMenu: false,
  check: false,
  darkMode: false,
  setDarkmode: () => set({ darkMode: !get().darkMode }),
  setCheck: () => set({ check: !get().Check }),
  setOpenMenu: () => set({ openMenu: !get().openMenu }),
}));

// Exportar la función useStore
export default useDarkmode;
