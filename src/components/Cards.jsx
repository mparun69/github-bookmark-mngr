import React from "react";

import "./card.css";
import { Button } from "react-bootstrap";

const Cards = (props) => {
  return (
    <div className="card-container">
      {props.repos.map((repo, key) => (
        <div key={key} className="card">
          <div className="card-title">
            <p>{repo.name}</p>
          </div>
          <div className="card-body">
            <p>{repo.desc}</p>
          </div>
          <div className="card-footer">
            <a href={repo.url}>
              <Button className="git-link-button">Visit GiHub</Button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
