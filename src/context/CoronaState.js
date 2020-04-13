import React, { useEffect, useReducer } from "react";
import CoronaContext from "./CoronaContext";
import CoronaReducer from "./CoronaReducer";
import { GET_DATA, FILTER_DATA, CLEAR_FILTER, GET_DATA_COUNTRY } from "./Type";
const CoronaState = (props) => {
  const initialState = {
    totalData: [],
    countrys: [],
    filter: null,
  };
  const [state, dispatch] = useReducer(CoronaReducer, initialState);
  useEffect(() => {
    allData();
    countryData();
  }, []);

  // * new data

  const allData = async () => {
    const response = await fetch(`https://corona.lmao.ninja/v2/all`);
    const data = await response.json();
    dispatch({
      type: GET_DATA,
      payload: data,
    });
  };

  const countryData = async () => {
    const response = await fetch(`https://corona.lmao.ninja/v2/countries`);
    const data = await response.json();
    dispatch({
      type: GET_DATA_COUNTRY,
      payload: data,
    });
  };
  const addFilter = (data) => {
    dispatch({
      type: FILTER_DATA,
      payload: data,
    });
  };
  const clearFilter = () => {
    dispatch({
      type: CLEAR_FILTER,
    });
  };
  return (
    <CoronaContext.Provider
      value={{
        totalData: state.totalData,
        filter: state.filter,
        countrys: state.countrys,
        countryData,
        addFilter,
        clearFilter,
      }}
    >
      {props.children}
    </CoronaContext.Provider>
  );
};

export default CoronaState;
