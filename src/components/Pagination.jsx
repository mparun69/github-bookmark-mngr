import React from "react";

import { Button, ButtonGroup } from "react-bootstrap";

const Pagination = ({ totalRepos, reposPerPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ButtonGroup className="mr-2" aria-label="First group">
        {pageNumbers.map((number) => (
          <Button variant="secondary" onClick={() => paginate(number)}>
            {number}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
};

export default Pagination;
