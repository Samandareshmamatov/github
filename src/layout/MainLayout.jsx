import { Header, Footer,User } from "../components";
import React from "react";
import { Outlet } from "react-router-dom";
import "./layout.css";

const MainLayout = () => {
  const [pathName, setPathName] = React.useState(0);

  return (
    <>
      <Header pathName={pathName} setPathName={setPathName} />
      <div className="container layout-container">
        <User pathName={pathName} setPathName={setPathName} />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
