import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useStoreNmaeCity from "../../store/useStoreNmaeCity";
import "../Search/Search.css";
import Toggle from "../Toggle/Toggle";
import usePosition from "../../store/usePosition";
import { useCurrenPosition } from "../../hooks/useCurrentposition";

const Search = () => {
  const { setPosition } = usePosition();
  const { setText } = useStoreNmaeCity();
  const { reset, register, handleSubmit } = useForm();
  const { position } = usePosition();
  const { currentposition } = useCurrenPosition();
  
  const onSubmit = (data) => {
    
    setText(data?.nameCityes);
    reset();
  };
  
  useEffect(() => {
    
    setText(currentposition?.name);
  }, [position])
  

  return (
    <div className="search__container">
      <Toggle />
      <form className="search__form" onSubmit={handleSubmit(onSubmit)}>
        <i className="bx bx-search-alt bx-md"></i>
        <input
          className="search__search"
          {...register("nameCityes")}
          type="text"
        />
        <button>Buscar</button>
      </form>
      <button onClick={setPosition} className="search__current__location">
        <i className="bx bx-target-lock bx-md"></i>
        Current Location
      </button>
    </div>
  );
};

export default Search;
