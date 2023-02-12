import React from "react";
import Popular from "./components/popular/Popular";
import "./overview.css";
import { panel, panel2 } from "../../assets";
import Desc from "./components/desc/Desc";
import axios from "axios";

const Overview = () => {
  const [state, setState] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [panelNum, setPanelNum] = React.useState(1)

  React.useEffect(() => {
    axios("https://api.github.com/users/samandareshmamatov/repos").then(
      (res) => {
        setState(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 300);
      }
    );
  }, []);
  return (
    <div className="overview">
      <Desc />
      <h2>Popular repositories</h2>
      <div className="popular-box">
        {loading ? (
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          state?.slice(0, 6).map((el) => {
            return <Popular key={el.id} data={el} />;
          })
        )}
      </div>
      <h2>1,262 contributions in the last year</h2>
      <div className="panel-block">
        <div className="panel">
          <img src={panelNum === 1 ? panel : panel2} alt="img" />
        </div>
        <div className="panel-btns">
          <button
            className={panelNum === 2 ? "panel-btn" : "active-panel"}
            onClick={() => setPanelNum(1)}
          >
            2023
          </button>
          <button
            className={panelNum === 1 ? "panel-btn" : "active-panel"}
            onClick={() => setPanelNum(2)}
          >
            2022
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
