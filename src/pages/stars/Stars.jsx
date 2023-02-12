import React from "react";
import DropDown from "../repositories/components/dropdown/DropDown";
import Repo from "../repositories/components/repo/Repo";
import axios from "axios";
import "./Stars.css";

const Stars = () => {
  const [state, setState] = React.useState([]);
  const [state2, setState2] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios("https://api.github.com/users/samandareshmamatov/starred").then(
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
    };

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
  const newArr = ["Public Repository", "Private Repository"];
  return (
    <div className="repositories">
      <div className="repositories-header">
        <form>
          <input
            className="repository-input stars-input"
            type="text"
            onChange={searchItems}
            name="repo-input"
            id="repo-input"
            placeholder="Find a repository..."
          />
        </form>
        <div className="drop-box">
          <DropDown key={1} name={"Type : All"} arr={typeArr} />
          <DropDown key={2} name={"Language"} arr={langArr} />
          <DropDown key={3} name={"Sort by : Recently Starred"} arr={sortArr} />
        </div>
        <DropDown key={4} name={"New"} arr={newArr} />
      </div>

      {loading ? (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        state?.map((el) => {
          return <Repo key={el.id} data={el} starred={true} />;
        })
      )}
    </div>
  );
};

export default Stars;
