import React, { useState } from "react";

import Search from "./Search";

import "./search.css";

const AddRepos = () => {
  const [userFlag, setUserFlag] = useState(false);
  const [repoFlag, setRepoFlag] = useState(false);
  const [submitFlag, setSubmitFlag] = useState(false);
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleRepoCheckBox = () => {
    setRepoFlag(!repoFlag);
  };
  const handleUserCheckBox = () => {
    setUserFlag(!userFlag);
  };
  const handleSearchQueryUpdate = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchButton = (e) => {
    e.preventDefault();
    setSubmitFlag(!submitFlag);
    setSearchQuery(query);
    
  };

  return (
    <div className="add-repos">
      <div className="search-bar">
        <form>
          <label className="search-opt">user</label>
          <input
            type="checkbox"
            onChange={handleUserCheckBox}
            className="check-box"
          />
          <label className="search-opt">repository</label>
          <input
            type="checkbox"
            onChange={handleRepoCheckBox}
            className="check-box"
          />
          <input
            type="text"
            value={query}
            onChange={handleSearchQueryUpdate}
            className="search-box"
          />
          <button
            type="submit"
            onClick={handleSearchButton}
            className="search-button"
          >
            Search
          </button>
        </form>
      </div>
      {!userFlag && !repoFlag ? (
        <p style={{ color: "red" }}>Select at least one one or both!!</p>
      ) : (
        ""
      )}

      <div className="search-result">
        <Search
          user={userFlag}
          repo={repoFlag}
          query={searchQuery.replace(/ /g, '')}
          flag={submitFlag}
        />
      </div>
    </div>
  );
};

export default AddRepos;
