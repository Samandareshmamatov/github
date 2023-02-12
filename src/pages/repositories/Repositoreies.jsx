import React from "react";
import "./Repositories.css";
import DropDown from "./components/dropdown/DropDown";
import Repo from "./components/repo/Repo";
import axios from "axios";
import { Link } from "react-router-dom";
const Repositories = () => {
  // https://api.github.com/users/${user_name}/repos
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
    console.log(state);
    setState(
      state2?.filter((el) => (el.name.toLowerCase().includes(e.target.value.toLowerCase()) ? el : ""))
    );
  }

  const typeArr = [
    "All",
    "Public",
    "Private",
    "Source",
    "Forks",
    "Archived",
    "Mirrors",
    "Templates",
  ];
  const langArr = ["All", "JavaScript", "HTML", "CSS", "SCSS", "React JS"];
  const sortArr = ["Last Updated", "Name", "Stars"];

  return (
    <div className="repositories">
      <div className="repositories-header">
        <form>
          <input
            className="repository-input"
            type="text"
            onChange={searchItems}
            name="repo-input"
            id="repo-input"
            placeholder="Find a repository..."
          />
        </form>
        <div className="drop-box">
          <DropDown key={1} name={"Type"} arr={typeArr} />
          <DropDown key={2} name={"Language"} arr={langArr} />
          <DropDown key={3} name={"Sort"} arr={sortArr} />
        </div>
        <Link className="new-drop">New</Link>
      </div>

      {loading ? (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : more ? (
        state?.slice(20, 40).map((el) => {
          return (
            <Repo
              key={el.id}
              data={el}
              starred={el.stargazers_count !== 0 ? true : false}
            />
          );
        })
      ) : (
        state?.slice(0, 20).map((el) => {
          return (
            <Repo
              key={el.id}
              data={el}
              starred={el.stargazers_count !== 0 ? true : false}
            />
          );
        })
      )}
      {state?.length > 20 ? (
        loading ? (
          ""
        ) : (
          <div className="repo-buttons">
            {more ? (
              <button className="repo-btn" onClick={() => setMore(false)}>
                Previous
              </button>
            ) : (
              <button className="repo-btn-dis">Previous</button>
            )}
            {more ? (
              <button className="repo-btn-dis">Next</button>
            ) : (
              <button className="repo-btn" onClick={() => setMore(true)}>
                Next
              </button>
            )}
          </div>
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default Repositories;
