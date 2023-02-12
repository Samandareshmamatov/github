import React from "react";
import { Link } from "react-router-dom";
import "./user.css";
import axios from "axios";

const User = ({ pathName, setPathName }) => {
  const [state, setState] = React.useState([]);
  React.useEffect(() => {
    axios("https://api.github.com/users/samandareshmamatov").then((res) => {
      setState(res.data);
    });
  }, []);
  return (
    <div className="user">
      <div className="user-box-img-title">
        <div className="user-img-box">
          <Link to="https://github.com/samandareshmamatov">
            <img src={state.avatar_url} alt="User Img" />
          </Link>
          <div className="user-status"></div>
        </div>
        <div>
          <h2 className="user-title">{state.login}</h2>
          <p className="user-name">{state.name}</p>
        </div>
      </div>
      <button className="user-edit">
        <Link to={state.html_url} className="user-edit-link">
          Edit profile
        </Link>
      </button>
      <div className="user-follow-box">
        <Link
          onClick={() => setPathName(6)}
          to={"/inner/followers"}
          className={"user-followers"}
        >
          <span>{state.followers}</span> followers{" "}
        </Link>
        <Link
          onClick={() => setPathName(7)}
          to={"/inner/following"}
          className={"user-following"}
        >
          <span>• {state.following}</span> following
        </Link>
      </div>
    </div>
  );
};

export default User;
