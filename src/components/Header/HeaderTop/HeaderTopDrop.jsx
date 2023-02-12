import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";

function HeaderDrop({name, arr}) {

  return (
    <Dropdown>
      <Dropdown.Toggle
        className={"header-drop"}
        variant="dark"
        id={"dropdown-autoclose-true"}
      >
      </Dropdown.Toggle>

      <Dropdown.Menu className="header-drop-menu" id="dropdownArea">
        {
          name === "avatar" ? <Dropdown.Item
              key={50}
              className="header-drop-item"
              disabled
            > Signed in as <br /><b>Samandareshmamamatov</b>
            </Dropdown.Item>  : ""
        }
        {arr?.map((el, index) => {
          return (
            <Dropdown.Item
              id={index + 1}
              key={index + 1}
              className="header-dropdown-item"
              href={el.link}
            >
              {el.name}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default HeaderDrop;
