import React from "react";
import "./Follow.css";
import { Link } from "react-router-dom";

const Follow = ({data}) => {
  const [state, setState] = React.useState(false);
  return (
    <div className="follow">
      <div className="follow-left">
        <div className="follow-img-block">
          <img src={data?.avatar_url} alt="Avatar" className="follow-img" />
        </div>
        <div className="follow-desc-box">
          <div className="follow-name-box">
            <Link to={data?.html_url} className="follow-title">
              {data?.login}
            </Link>
          </div>
          <div className="follow-hover">
            <div>
              <div className="follow-img-block">
                <img
                  src={data?.avatar_url}
                  alt="Avatar"
                  className="follow-img"
                />
              </div>
              <Link to={data?.html_url} className="follow-title">
                {data?.login}
              </Link>
            </div>
            <button onClick={() => setState(!state)} className="follow-btn">
              {state ? "Follow" : "Unfollow"}
            </button>
            <span></span>
          </div>
          <p className="follow-company">Uzbekistan</p>
        </div>
      </div>
      <div className="follow-btn-box">
        <button onClick={() => setState(!state)} className="follow-btn">
          {state ? "Follow" : "Unfollow"}
        </button>
      </div>
    </div>
  );
};

export default Follow;
