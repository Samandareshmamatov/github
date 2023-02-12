import React from "react";
import "./desc.css";

const Desc = () => {
  return (
    <div className="desc">
      <h2>SamandarEshmamatov/README.md</h2>
      <h3>
          <img
            src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=4000&pause=1000&color=E4F71E&background=FFFFFF00&width=435&lines=I+am+a+Frontend+Developer;I+am+a+UI%2FUX+designer;Men+Tursunxonman+😎+"
            alt="Typing SVG"
          />
      </h3>
      <div className="desc-line" />
      <h2 className="desc-title">
        I’m Frontend Developer and tech enthusiast!!
      </h2>
      <ul className="desc-list">
        <li>🌱 I’m currently learning everything about web development</li>
        <li>⚡ Fun fact: I love sports and play guitar</li>
        <li>
          🥅 2023 Goals: Learn more about ReactJS , VueJs and Data structures
        </li>
      </ul>
    </div>
  );
};

export default Desc;
