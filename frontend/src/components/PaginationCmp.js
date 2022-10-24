import React from "react";
import styled from "styled-components";

function PaginationCmp({ nextUrl, previousUrl, setPagination }) {
  return (
    <Wrapper>
      <button
        onClick={() =>
          previousUrl && setPagination({ next: null, previous: previousUrl })
        }
      >
        previous
      </button>
      <button
        onClick={() =>
          nextUrl && setPagination({ next: nextUrl, previous: null })
        }
      >
        next
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;

  button {
    margin-right: 0.5rem;
  }
`;

export default PaginationCmp;
