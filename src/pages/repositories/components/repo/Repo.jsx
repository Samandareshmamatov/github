import React from "react";
import DropDown from "../dropdown/DropDown";
import "./repo.css";
import blackStar from "../../../../assets/img/header-star.svg";
import { Link } from "react-router-dom";

const Repo = ({ data, starred }) => {
  const [star, setStar] = React.useState(() => {
    return starred ? true : false 
  });
  const repoArr = ["🔮 Future ideas", "🚀 My stack", "✨ Inspiration"];
  console.log(starred);

  return (
    <div className="repo">
      <div className="repo-left">
        <Link to={data?.html_url} className="repo-title">
          {data?.name} <span>{data?.private ? "Private" : "Public"}</span>
        </Link>
        <div className="repo-left-box">
          <p className="repo-tech">
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
          <p>{data?.updated_at}</p>
        </div>
      </div>
      <div className="repo-right">
        <div className="repo-btn-box">
          <button onClick={() => setStar(!star)}>
            {star ? (
              <>⭐ Starred</>
            ) : (
              <>
                <img src={blackStar} alt="star" />
                ㅤStar
              </>
            )}
          </button>
          <DropDown key={5} name={"repo"} arr={repoArr} />
        </div>
        <div className="repo-line"></div>
      </div>
    </div>
  );
};

export default Repo;
