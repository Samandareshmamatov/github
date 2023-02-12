import React from "react";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import HeaderTop from "./HeaderTop/HeaderTop";
import "./Header.css";

const Header = ({pathName, setPathName}) => {
  const [fixed, setFixed] = React.useState(false);
  const [userFixed, setUserFixed] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 63) {
        setFixed(true);
      } else {
        setFixed(false);
      }
      if (window.scrollY > 415) {
        setUserFixed(true);
      } else {
        setUserFixed(false);
      }
    });
  });

  return (
    <div className={fixed ? "translate-top" : "header-fixed"}>
      <HeaderTop />
      <HeaderBottom
        pathName={pathName}
        setPathName={setPathName}
        userFixed={userFixed}
      />
    </div>
  );
};

export default Header;
