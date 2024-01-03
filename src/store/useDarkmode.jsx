import create from 'zustand';

// Definir la tienda
const useDarkmode = create((set, get) => ({
  check: false, 
  darkMode: false,
  setDarkmode: () => set(({ darkMode: !get().darkMode })),
  setCheck: ()=> set(({check: !get().Check}))
}));

// Exportar la función useStore
export default useDarkmode;