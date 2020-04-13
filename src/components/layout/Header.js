import React, { Fragment, useContext } from "react";
import moment from "moment";

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
          <div className="total_numbr indigo lighten-5">
            <h6>
              Total Confirmed <br />
              {totalData.cases}
            </h6>
            <p>
              Last Updated By {moment(totalData.updated).format("LLLL")} <br />{" "}
              (Bangladesh stander time)
            </p>
          </div>
        </div>
        <div className="col s4">
          <div className="total_numbr green darken-1">
            <h6>
              Total Recover <br /> {totalData.recovered}
              <span className="per">
                (
                {(
                  (totalData.recovered / totalData.cases) *
                  100
                ).toLocaleString()}
                %)
              </span>
            </h6>
            <p>
              Last Updated By {moment(totalData.updated).format("LLLL")} <br />{" "}
              (Bangladesh stander time)
            </p>
          </div>
        </div>
        <div className="col s4">
          <div className="total_numbr red darken-1">
            <h6>
              Total Deaths <br />
              {totalData.deaths}
              <span className="per">
                ({((totalData.deaths / totalData.cases) * 100).toLocaleString()}
                %)
              </span>
            </h6>
            <p>
              Last Updated By {moment(totalData.updated).format("LLLL")} <br />{" "}
              (Bangladesh stander time)
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
