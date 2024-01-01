import create from 'zustand';

// Definir la tienda
const useDarkmode = create((set, get) => ({
  
  darkMode: false,
  setDarkmode: () => set(({ darkMode: !get().darkMode })),
}));

// Exportar la función useStore
export default useDarkmode;