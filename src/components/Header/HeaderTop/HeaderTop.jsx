import React from "react";
import { headerLogo } from "../../../assets";
import "./HeaderTop.css";
import axios from "axios";
import { Link } from "react-router-dom";
import HeaderDrop from "./HeaderTopDrop";

const HeaderTop = () => {
  const [state, setState] = React.useState([]);
  const [valueSearch, setValueSearch] = React.useState("");
  React.useEffect(() => {
    axios("https://api.github.com/users/samandareshmamatov").then((res) => {
      setState(res.data);
      setValueSearch("")
    });
  }, []);

  const handleSearch = (e) => {
    setValueSearch(e.target.value);
  };

  const newDropArr = [
    {
      name: "New Repository",
      link: "https://github.com/new",
    },
    {
      name: "Import Repository",
      link: "https://github.com/new/import",
    },
    {
      name: "New Codespace",
      link: "https://github.com/codespaces/new",
    },
    {
      name: "New Gist",
      link: "https://gist.github.com/",
    },
    {
      name: "New Organization",
      link: "https://github.com/organizations/plan",
    },
    {
      name: "New Project",
      link: "https://github.com/users/Samandareshmamatov/projects/1",
    },
  ];

  const ownDropArr = [
    {
      name: "Your Profile",
      link: "https://github.com/Samandareshmamatov",
    },
    {
      name: "Your Repositories",
      link: "https://github.com/Samandareshmamatov?tab=repositories",
    },
    {
      name: "Your Projects",
      link: "https://github.com/Samandareshmamatov?tab=projects",
    },
    {
      name: "Your Stars",
      link: "https://github.com/Samandareshmamatov?tab=stars",
    },
    {
      name: "Your Gists",
      link: "https://gist.github.com/Samandareshmamatov",
    },
    {
      name: "Your Sponsors",
      link: "https://github.com/sponsors/accounts",
    },
  ];

  return (
    <div className="header-top">
      <div className="header-top-container">
        <div className="header-top-left">
          <div className="header-logo-box">
            <img src={headerLogo} alt="Logo" />
          </div>
          <div className="header-search-block">
            <input
              className="header-search"
              type="text"
              name="search"
              onChange={handleSearch}
              value={valueSearch}
              autoComplete="off"
              id="search"
              placeholder="Search or jump to..."
            />
            <Link
              to={"https://github.com/" + valueSearch.toLowerCase()}
              className="header-search-icon"
            ></Link>
          </div>
          <ul className="header-top-list">
            <li>
              <Link className="header-to-link" to="https://github.com/pulls">
                Pull requests
              </Link>
            </li>
            <li>
              <Link className="header-to-link" to="https://github.com/issues">
                Issues
              </Link>
            </li>
            <li>
              <Link
                className="header-to-link"
                to="https://github.com/codespaces"
              >
                CodeSpace
              </Link>
            </li>
            <li>
              <Link
                className="header-to-link"
                to="https://github.com/marketplace"
              >
                MarketPlace
              </Link>
            </li>
            <li>
              <Link className="header-to-link" to="https://github.com/explore">
                Explore
              </Link>
            </li>
          </ul>
        </div>
        <div className="header-top-right">
          <Link
            to="https://github.com/notifications"
            className="header-notif"
          ></Link>
          <div className="header-plus">
            <HeaderDrop arr={newDropArr} name="" />
          </div>
          <div className="header-avatar">
            <img src={state.avatar_url} alt="Avatar User" />
            <HeaderDrop name="avatar" arr={ownDropArr} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
