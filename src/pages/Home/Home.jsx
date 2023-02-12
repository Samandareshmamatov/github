import React from "react";
import { Link } from "react-router-dom";
import HeaderTop from "../../components/Header/HeaderTop/HeaderTop";
import "./Home.css";
import axios from "axios";
import Desc from "../overview/components/desc/Desc";

const Home = () => {
  const [state, setState] = React.useState([]);
  const [state2, setState2] = React.useState([]);
  const [more, setMore] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios("https://api.github.com/users/samandareshmamatov/repos").then(
      (res) => {
        setState(res.data);
        setState2(res.data);
        setLoading(false);
      }
    );
  }, []);

  const searchItems = (e) => {
    setState(state2);
    setState(
      state2?.filter((el) =>
        el.name.toLowerCase().includes(e.target.value.toLowerCase()) ? el : ""
      )
    );
  };

  return (
    <div>
      <HeaderTop />
      <div className="home-container">
        {loading ? (
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <div className="home-left">
            <div className="home-top-block">
              <h2 className="home-left-title">Top Repositories</h2>
              <Link
                to="https://github.com/new"
                className="home-top-btn new-drop"
              >
                New
              </Link>
            </div>
            <input
              className="header-search"
              style={{ width: "100%", marginLeft: 0 }}
              type="text"
              name="search"
              autoComplete="off"
              id="search"
              onChange={searchItems}
              placeholder="Find a Repository... 📝"
            />
            {more
              ? state?.map((el) => (
                  <div className="home-item">
                    <img
                      src={el.owner.avatar_url}
                      alt="rasm avatar"
                      className="home-img"
                    />
                    <Link className="home-item-text">{el.full_name}</Link>
                  </div>
                ))
              : state?.slice(0, 7).map((el) => (
                  <div className="home-item">
                    <img
                      src={el.owner.avatar_url}
                      alt="rasm avatar"
                      className="home-img"
                    />
                    <Link className="home-item-text">{el.full_name}</Link>
                  </div>
                ))}
            {state?.length > 7 ? (
              more ? (
                <button onClick={() => setMore(false)} className="packages-btn">
                  Show Short
                </button>
              ) : (
                <button onClick={() => setMore(true)} className="packages-btn">
                  Show More
                </button>
              )
            ) : (
              <p className="home-left-title" style={{color: "red"}}>Repository not found 😕</p>
            )}
            <h2 className="home-left-title">Recent Activities</h2>
            <p className="home-left-text">
              When you take actions across GitHub, we’ll provide links to that
              activity here.
            </p>
          </div>
        )}
        <div className="home-right">
              <Desc />
        <Link to={"inner"} className="home-right-btn">My GitHub ➡️</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
