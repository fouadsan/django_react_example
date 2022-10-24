import React from "react";
import styled from "styled-components";

function Search({ searchValue, setSearchValue }) {
  return (
    <Wrapper>
      <b>search:</b>
      <input
        type="text"
        placeholder="Enter search keyword"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;

  b {
    margin-right: 1rem;
  }

  input {
    height: 20px;
  }
`;

export default Search;
