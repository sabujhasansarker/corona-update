import React, { useContext, Fragment } from "react";
import CoronaContext from "../../context/CoronaContext";
import { Link } from "react-router-dom";

const SinglePages = props => {
  const coronaContext = useContext(CoronaContext);
  const { totalData } = coronaContext;
  const province = props.match.params.slug;
  const country = props.match.params.slug;
  let singleData = province
    ? totalData.filter(single =>
        single.province === props.match.params.slug ? totalData : ""
      )
    : totalData.filter(single =>
        single.country === props.match.params.slug ? totalData : ""
      );
  return (
    <div>
      <Link to="/">Back</Link>
      {singleData.map(e => (
        <Fragment key={e.id}>
          <h3>Country Name : {e.country}</h3>
          <h6>Confirmed : {e.latest.confirmed}</h6>
          <h6>Recover : {e.latest.recover}</h6>
          <h6>Deaths : {e.latest.deaths}</h6>
        </Fragment>
      ))}
    </div>
  );
};

export default SinglePages;
