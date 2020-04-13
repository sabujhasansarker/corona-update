import React, { Fragment, useRef, useContext } from "react";
import CoronaContext from "../../context/CoronaContext";

const Filter = () => {
  const coronaContext = useContext(CoronaContext);
  const { addFilter, countrys, clearFilter } = coronaContext;
  let text = useRef("");
  const heldelchange = (e) => {
    text.current.value === ""
      ? clearFilter()
      : addFilter(
          countrys.filter((c) => {
            const regex = new RegExp(`${text.current.value}`, "gi");
            return c.country.match(regex);
          })
        );
  };

  return (
    <Fragment>
      <input
        type="text"
        onChange={heldelchange}
        ref={text}
        placeholder="Enter your country name ..."
      />
    </Fragment>
  );
};

export default Filter;
