import React from 'react';
import { Link } from 'react-router-dom';
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-head">
        <input
          type="text"
          className="projects-search"
          placeholder="Search All Projects"
        />
        <Link
          className="projects-btn"
          to={"https://github.com/users/Samandareshmamatov/projects/4"}
        >
          New Project
        </Link>
      </div>
      <div className="projects-block">
        <div className="projects-item-head">
          <div className="projects-op-cl">
            <Link
              to="https://github.com/Samandareshmamatov?query=is%3Aopen&tab=projects"
              className="projects-open"
            >
              3 Open
            </Link>
            <Link
              to="https://github.com/Samandareshmamatov?query=is%3Aclosed&tab=projects"
              className="projects-close"
            >
              0 Closed
            </Link>
          </div>
          <p className="projects-sort">
            Sort
          </p>
        </div>
        <div className="projects-item">
          <Link
            to={"https://github.com/users/Samandareshmamatov/projects/3"}
            className="projects-item-title"
          >
            @Samandareshmamatov's untitled project
          </Link>
          <span>Private</span>
          <p className="projects-update">#3 update last week</p>
        </div>
        <div className="projects-item">
          <Link
            to={"https://github.com/users/Samandareshmamatov/projects/3"}
            className="projects-item-title"
          >
            @Samandareshmamatov's untitled project
          </Link>
          <span>Private</span>
          <p className="projects-update">#2 update last week</p>
        </div>
        <div className="projects-item">
          <Link
            to={"https://github.com/users/Samandareshmamatov/projects/3"}
            className="projects-item-title"
          >
            @Samandareshmamatov's untitled project
          </Link>
          <span>Private</span>
          <p className="projects-update">#1 update last week</p>
        </div>
      </div>
    </div>
  );
}

export default Projects