import {create} from 'zustand';


const useStoreNamaeCity = create(set => ({
  text: '',
  flag: false,
  setText: (newText) => set(({ text: newText })),
  setFlag: (newFlag) => set(({ flag: newFlag })),
}));


export default useStoreNamaeCity;