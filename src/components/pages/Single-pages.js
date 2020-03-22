import React, { useContext, Fragment } from "react";
import CoronaContext from "../../context/CoronaContext";
import { Link } from "react-router-dom";

const SinglePages = props => {
  const coronaContext = useContext(CoronaContext);
  const { totalData, clearFilter } = coronaContext;
  let province = props.match.url;
  let singleData = [];
  if ("/province/" === province.substring(0, 10)) {
    singleData = totalData.filter(single =>
      single.province === province.slice(10) ? totalData : ""
    );
  } else {
    singleData = totalData.filter(single =>
      single.country === props.match.params.slug ? totalData : ""
    );
  }
  const hendelClick = () => {
    clearFilter();
  };
  return (
    <div>
      <Link
        to="/"
        className="waves-effect waves-light btn btn-text"
        onClick={hendelClick}
      >
        Back to All
      </Link>
      {singleData.map(e => (
        <div className="single" key={e.id}>
          <h3 className="text-center">{e.country}</h3>
          <h6>Confirmed : {e.latest.confirmed}</h6>
          <h6>Recover : {e.latest.recovered}</h6>
          <h6>Deaths : {e.latest.deaths}</h6>
          {e.province && (
            <h6 className="">
              Province : <b>{e.province}</b>
            </h6>
          )}
        </div>
      ))}
    </div>
  );
};

export default SinglePages;
