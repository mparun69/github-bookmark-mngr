import React, { useState, useEffect } from "react";

import RenderRepo from "./RenderRepo";
import Pagination from "./Pagination";

import "./search.css";

const Search = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(5);
  const [isLoading, setIsLoading] = useState(false);
  const [repos, setRepos] = useState([]);

  const query = props.query;

  useEffect(() => {
    if (props.user === false && props.repo === false) {
      return (
        <p className="error-alert">please select either user or repository</p>
      );
    } else {
      try {
        if (props.user === true && isLoading === false) {
          setIsLoading(true);
          userQueryFetch();
          setTimeout(() => {
            setIsLoading(false);
          }, 2000);
        }
      } catch (error) {
        return <h1>{error}</h1>;
      }
      try {
        if (props.repo === true && isLoading === false) {
          setIsLoading(true);
          repoQueryFetch();
          setTimeout(() => {
            setIsLoading(false);
          }, 2000);
        }
      } catch (error) {
        return <h1>{error}</h1>;
      }
    }
  }, [props.flag, query]);

  const userQueryFetch = async () => {
    let data = await fetch(`https://api.github.com/users/${query}/repos`);
    const user = await data.json();

    setRepos(user);
  };

  const repoQueryFetch = async () => {
    let data = await fetch(
      `https://api.github.com/search/repositories?q=${query}`
    );
    const repo = await data.json();

    setRepos((user) => [...user, ...repo.items]);
  };

  const indexOfLastRepos = currentPage * reposPerPage;
  const indexOfFirstRepos = indexOfLastRepos - reposPerPage;
  const currentRepos = repos
    ? repos.slice(indexOfFirstRepos, indexOfLastRepos)
    : 0;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <RenderRepo repos={currentRepos} loading={isLoading} />
      <Pagination
        reposPerPage={reposPerPage}
        totalRepos={repos.length}
        paginate={paginate}
        className="paginate-button"
      />
    </div>
  );
};

export default Search;
