import create from "zustand";

// Definir la tienda
const useLayers = create((set) => ({
  layer: "",

  setLayer: (newLayer) => set({ layer: newLayer }),
}));

export default useLayers;
