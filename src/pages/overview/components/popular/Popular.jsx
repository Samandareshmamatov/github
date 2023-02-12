import React from "react";
import { Link } from "react-router-dom";
import "./popular.css";

const Popular = ({data}) => {
  return (
    <div className="popular">
      <Link to={data?.html_url} className="popular-title">
        {data?.name} <span>{data?.private ? "Private" : "Public"}</span>
      </Link>
      <p className="popular-text">Lorem ipsum dolor sit amet.</p>
      <div className="popular-rating-block">
        <div className="popular-tech">
          <p>
            {data?.language === "JavaScript" ? (
              <span className="javascript"></span>
            ) : data?.language === "CSS" ? (
              <span className="css"></span>
            ) : data?.language === "HTML" ? (
              <span className="html"></span>
            ) : data?.language === "SCSS" ? (
              <span></span>
            ) : (
              ""
            )}
            {data?.language ? data.language : "Last Updated"}
          </p>
        </div>
        {data?.stargazers_count ? (
          <div className="popular-star">{data?.stargazers_count}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Popular;
