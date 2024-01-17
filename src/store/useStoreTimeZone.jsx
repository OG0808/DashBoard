import {create} from "zustand";

// Definir la tienda
const useStorecityLatLon = create((set) => ({
  cityLatLon: "",
  flag: false,
  setcityLatLon: (newText) => set(({ cityLatLon: newText })),
  setFlag: (newFlag) => set((state) => ({ flag: newFlag })),
}));


export default useStorecityLatLon;
