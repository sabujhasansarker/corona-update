import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import CoronaContext from "../../context/CoronaContext";
import Filter from "../layout/Filter";

const Total = () => {
  const coronaContext = useContext(CoronaContext);
  const { totalData, filter } = coronaContext;
  const data = filter == null ? totalData : filter;
  let url = "";
  return (
    <Fragment>
      <Filter />
      <table className="striped">
        <thead>
          <tr>
            <th>Country</th>
            <th>Province</th>
            <th>Confirmed</th>
            <th>recovered</th>
            <th>deaths</th>
          </tr>
        </thead>

        <tbody>
          {data.map(e => (
            <tr key={e.id}>
              <td>
                <Link to={e.country}>{e.country}</Link>
              </td>
              <td>
                <Link to={`province/${e.province}`}>{e.province}</Link>
              </td>
              <td>{e.latest.confirmed}</td>
              <td>{e.latest.recovered}</td>
              <td>{e.latest.deaths}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Total;
