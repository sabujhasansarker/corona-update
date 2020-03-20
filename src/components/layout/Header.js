import React, { Fragment, useContext } from "react";
import CoronaContext from "../../context/CoronaContext";

const Header = () => {
  const coronaContext = useContext(CoronaContext);
  const { totalData } = coronaContext;
  return (
    <Fragment>
      <div className="blue lighten-4 text-center">
        <h1 className="heading">
          <span className="red-text">Corona</span> Virus Update
        </h1>
      </div>
      <div className="row">
        <div className="col s4">
          <h6 className="total_numbr indigo lighten-5">
            Total Confirmed <br />
            {eval(totalData.map(e => e.latest.confirmed).join("+"))}
          </h6>
        </div>
        <div className="col s4">
          <h6 className="total_numbr green darken-1">
            Total Recover <br />{" "}
            {eval(totalData.map(e => e.latest.recovered).join("+"))}
          </h6>
        </div>
        <div className="col s4">
          <h6 className="total_numbr red darken-1">
            Total Deaths <br />
            {eval(totalData.map(e => e.latest.deaths).join("+"))}
          </h6>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
