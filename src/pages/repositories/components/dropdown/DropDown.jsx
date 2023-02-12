import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dropdown.css";

function DropDown({name, arr}) {
  return (
    <Dropdown>
      <Dropdown.Toggle
        className={name === "repo" ? "repo-star" : (name === "New" ? "new-drop" : "repo-drop")}
        variant="dark"
        id={"dropdown-basic"}
      >
        {name !== "repo" ? name : ""}
      </Dropdown.Toggle>

      <Dropdown.Menu id="dropdownArea">
        <Dropdown.Item disabled className="dropdown-item">Select Type 🤔</Dropdown.Item>
        {arr?.map((el, index) => {
          return <Dropdown.Item id={index+1} key={index+1} className="dropdown-item">{el}</Dropdown.Item>;
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;
