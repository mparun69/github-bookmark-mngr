import React, { useState, useEffect } from "react";

import Cards from "./Cards";
import Pagination from "./Pagination";

import "./card.css";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(12);
  const [localRepos, setLocalRepos] = useState([]);
  const [isNull, setIsNull] = useState(false);
  useEffect(() => {
    const localData = localStorage.getItem("localrepos");
    setLocalRepos(localData ? JSON.parse(localData) : []);
  }, []);
  useEffect(() => {
    if (localRepos.length !== 0) {
      setIsNull(true);
    }
    console.log(isNull);
  }, [localRepos]);

  const indexOfLastRepos = currentPage * reposPerPage;
  const indexOfFirstRepos = indexOfLastRepos - reposPerPage;
  const currentRepos = localRepos.slice(indexOfFirstRepos, indexOfLastRepos);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="main-container">
      {isNull ? (
        <Cards repos={currentRepos} />
      ) : (
        <h1>Nothing here yet! Please add some Repositories..</h1>
      )}
      <div>
        <Pagination
          reposPerPage={reposPerPage}
          totalRepos={localRepos.length}
          paginate={paginate}
          className="paginate-button"
        />
      </div>
    </div>
  );
};

export default Home;
