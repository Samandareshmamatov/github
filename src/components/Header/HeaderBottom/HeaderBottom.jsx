import React from "react";
import "./header-bottom.css";
import { Link } from "react-router-dom";
import axios from "axios";

const HeaderBottom = ({ userFixed, pathName, setPathName }) => {
  const [state, setState] = React.useState([]);
  const [stateRepo, setStateRepo] = React.useState(0);
  const [stateStar, setStateStar] = React.useState(0);


  React.useEffect(() => {
    axios("https://api.github.com/users/samandareshmamatov").then((res) => {
      setState(res.data);
    });
    axios("https://api.github.com/users/samandareshmamatov/repos").then(
      (res) => {
        setStateRepo(res.data);
      }
    );
    axios("https://api.github.com/users/samandareshmamatov/starred").then(
      (res) => {
        setStateStar(res.data);
      }
    );
    if (window.location.pathname === "/inner") {
      setPathName(0);
    } else if (window.location.pathname === "/inner/repositories") {
      setPathName(1);
    } else if (window.location.pathname === "/inner/projects") {
      setPathName(2);
    } else if (window.location.pathname === "/inner/packages") {
      setPathName(3);
    } else if (window.location.pathname === "/inner/stars") {
      setPathName(4);
    } else {
      setPathName(65)
    }
  });

  return (
    <div className={"header-bottom"}>
      {userFixed ? (
        <div className="user-fixed">
          <img src={state.avatar_url} alt="logo" />
          <h3 className="user-fixed-title">{state.name}</h3>
        </div>
      ) : (
        ""
      )}
      <ul className="header-list">
        <li
          onClick={() => setPathName(0)}
          className={pathName === 0 ? "active-page" : "ds"}
          id="1"
        >
          <Link to={"/inner"} className="header-link ">
            Overview
          </Link>
        </li>
        <li
          onClick={() => setPathName(1)}
          className={pathName === 1 ? "active-page" : "ds"}
          id="2"
        >
          <Link to={"/inner/repositories"} className="header-link">
            Repositories <span>{stateRepo?.length}</span>
          </Link>
        </li>
        <li
          onClick={() => setPathName(2)}
          className={pathName === 2 ? "active-page" : "ds"}
          id="3"
        >
          <Link to={"/inner/projects"} className="header-link">
            Projects
          </Link>
        </li>
        <li
          onClick={() => setPathName(3)}
          className={pathName === 3 ? "active-page" : "ds"}
          id="4"
        >
          <Link to={"/inner/packages"} className="header-link">
            Packages
          </Link>
        </li>
        <li
          onClick={() => setPathName(4)}
          className={pathName === 4 ? "active-page" : "ds"}
          id="5"
        >
          <Link to={"/inner/stars"} className="header-link">
            Stars <span>{stateStar?.length}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderBottom;
