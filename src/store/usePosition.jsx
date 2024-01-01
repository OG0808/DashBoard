import create from 'zustand';


const usePosition = create((set, get) => ({
  
  position: false,
  
  setPosition: () => set(({ position: !get().position })),
}));

// Exportar la función useStore
export default usePosition;