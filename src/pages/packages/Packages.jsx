import React from "react";
import "./Packages.css";
import { packages } from "../../assets";
import { Link } from "react-router-dom";

const Packages = () => {
  return (
    <div className="packages">
      <div className="packages-top">
        <div>
          <img src={packages} alt="rasm" />
        </div>
        <h2 className="packages-title">Get started with GitHub Packages</h2>
        <p className="packages-text">
          Safely publish packages, store your packages alongside your code, and
          share your packages privately with your team.
        </p>
      </div>
      <div className="packages-bottom">
        <h3 className="packages-choose">Choose a Registry</h3>
        <div className="packages-block">
          <div className="packages-item">
            <h4 className="packages-inner-title">
              <span></span> Docker
            </h4>
            <p className="packages-inner-text">
              A software platform used for building applications based on
              containers — small and lightweight execution environments.
            </p>
            <Link
              to="https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-apache-maven-registry"
              className="packages-btn"
            >
              Learn More
            </Link>
          </div>
          <div className="packages-item">
            <h4 className="packages-inner-title">
              <span></span> Apache Maven
            </h4>
            <p className="packages-inner-text">
              A default package manager used for the Java programming language
              and the Java runtime environment.
            </p>
            <Link
              to="https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-apache-maven-registry"
              className="packages-btn"
            >
              Learn More
            </Link>
          </div>
          <div className="packages-item">
            <h4 className="packages-inner-title">
              <span></span> NuGet
            </h4>
            <p className="packages-inner-text">
              A free and open source package manager used for the Microsoft
              development platforms including .NET.
            </p>
            <Link
              to="https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-apache-maven-registry"
              className="packages-btn"
            >
              Learn More
            </Link>
          </div>
          <div className="packages-item">
            <h4 className="packages-inner-title">
              <span></span> RubyGems
            </h4>
            <p className="packages-inner-text">
              A standard format for distributing Ruby programs and libraries
              used for the Ruby programming language.
            </p>
            <Link
              to="https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-apache-maven-registry"
              className="packages-btn"
            >
              Learn More
            </Link>
          </div>
          <div className="packages-item">
            <h4 className="packages-inner-title">
              <span></span> npm
            </h4>
            <p className="packages-inner-text">
              A package manager for JavaScript, included with Node.js. npm makes
              it easy for developers to share and reuse code.
            </p>
            <Link
              to="https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-apache-maven-registry"
              className="packages-btn"
            >
              Learn More
            </Link>
          </div>
          <div className="packages-item">
            <h4 className="packages-inner-title">
              <span></span> Containers
            </h4>
            <p className="packages-inner-text">
              A single place for your team to manage Docker images and decide
              who can see and access your images.
            </p>
            <Link
              to="https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-apache-maven-registry"
              className="packages-btn"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
