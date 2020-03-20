import React, { useEffect, useReducer } from "react";
import CoronaContext from "./CoronaContext";
import CoronaReducer from "./CoronaReducer";
import { GET_DATA, FILTER_DATA, CLEAR_FILTER } from "./Type";
import demodata from "./demo.json";
const CoronaState = props => {
  const initialState = {
    totalData: [],
    filter: null
  };
  const [state, dispatch] = useReducer(CoronaReducer, initialState);
  useEffect(() => {
    getMount();
    dispatch({
      type: GET_DATA,
      payload: demodata.locations
    });
  }, []);
  const getMount = async () => {
    const response = await fetch(
      `https://coronavirus-tracker-api.herokuapp.com/v2/locations`
    );
    const data = await response.json();
    // dispatch({
    //   type: GET_DATA,
    //   payload: data.locations
    // });
  };
  const addFilter = data => {
    dispatch({
      type: FILTER_DATA,
      payload: data
    });
  };
  const clearFilter = () => {
    dispatch({
      type: CLEAR_FILTER
    });
  };
  return (
    <CoronaContext.Provider
      value={{
        totalData: state.totalData,
        filter: state.filter,
        addFilter,
        clearFilter
      }}
    >
      {props.children}
    </CoronaContext.Provider>
  );
};

export default CoronaState;
