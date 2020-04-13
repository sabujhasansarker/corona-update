import React, { useContext } from "react";
import CoronaContext from "../../context/CoronaContext";
import Filter from "../layout/Filter";

const Total = () => {
  const coronaContext = useContext(CoronaContext);
  const { countrys, filter } = coronaContext;
  const data = filter === null ? countrys : filter;

  return (
    <div className="coustom-container">
      <Filter />
      <div className="row">
        {data.map((e, index) => (
          <div className="col s4" key={index}>
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src={e.countryInfo.flag}
                  alt="country flag"
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4 display-flex">
                  {e.country}
                  <i className="material-icons right">more_vert</i>
                </span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4 display-flex">
                  <h4>{e.country}</h4>{" "}
                  <i className="material-icons right">close</i>
                </span>
                <table>
                  <thead>
                    <tr>
                      <th>Cases</th>
                      <th>Recovered</th>
                      <th>Active</th>
                      <th>Critical</th>
                      <th>Deaths</th>
                      <th>Death Rate</th>
                      <th>Total Test</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>{e.cases.toLocaleString()}</td>
                      <td>{e.recovered.toLocaleString()}</td>
                      <td>{e.active.toLocaleString()}</td>
                      <td>{e.critical.toLocaleString()}</td>
                      <td>{e.deaths.toLocaleString()}</td>
                      <td>{((e.deaths / e.cases) * 100).toLocaleString()}%</td>
                      <td>{e.tests.toLocaleString()}</td>
                    </tr>
                  </tbody>
                </table>
                <h6>New Cases</h6>
                <table>
                  <thead>
                    <tr>
                      <th>Cases</th>
                      <th>Deaths</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>{e.todayCases.toLocaleString()}</td>
                      <td>{e.todayDeaths.toLocaleString()}</td>
                    </tr>
                  </tbody>
                </table>

                <h6>Per Million</h6>
                <table>
                  <thead>
                    <tr>
                      <th>Total Test</th>
                      <th>Test In Per Million</th>
                      <th>Cases In Per Million</th>
                      <th>Deaths In Per Million</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>{e.tests.toLocaleString()}</td>
                      <td>{e.testsPerOneMillion.toLocaleString()}</td>
                      <td>{e.casesPerOneMillion.toLocaleString()}</td>
                      <td>{e.deathsPerOneMillion.toLocaleString()}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Total;
