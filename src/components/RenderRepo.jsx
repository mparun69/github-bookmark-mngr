import React, { useState, useEffect } from "react";

import "./search.css";
import { Button, Modal } from "react-bootstrap";

const RenderRepo = (props) => {
  const [isNull, setIsNull] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [addedRepos, setAddedRepos] = useState(() => {
    const localData = localStorage.getItem("localrepos");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("localrepos", JSON.stringify(addedRepos));
  }, [addedRepos]);

  const addRepoToLocal = (id, name, desc, url) => {
    setAddedRepos((prevRepos) => [
      ...prevRepos,
      {
        id: id,
        name: name,
        desc: desc,
        url: url
      }
    ]);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  };

  useEffect(() => {
    if (props.repos.length !== 0) {
      setIsNull(true);
    }
  }, [props.repos]);

  const handleClose = () => setShowAlert(false);

  if (props.loading === true) {
    return <h3>Loading...</h3>;
  } else {
    return (
      <div className="result-container">
        {isNull ? (
          props.repos.map((repo) => (
            <div key={repo.id} className="repo-container">
              <a href={repo.html_url}>
                <h3>{repo.name}</h3>
              </a>
              <p>{repo.description ? repo.description.slice(0, 80) : ""}</p>
              <Button
                onClick={() =>
                  addRepoToLocal(
                    repo.id,
                    repo.name,
                    repo.description,
                    repo.html_url
                  )
                }
                variant="dark"
              >
                Add
              </Button>
            </div>
          ))
        ) : (
          <h1 className="not-found-error">
            Nothing here yet! Search to see more...
          </h1>
        )}
        <Modal
          show={showAlert}
          onHide={handleClose}
          animation={true}
          className="add-alert"
        >
          <Modal.Body className="alert-text">Repository Added!</Modal.Body>
        </Modal>
      </div>
    );
  }
};

export default RenderRepo;
