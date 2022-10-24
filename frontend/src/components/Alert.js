import React from "react";
import styled from "styled-components";

function Alert({ type, text }) {
  return (
    <Wrapper type={type}>
      <div className={`alert alert-${type}`}>{text}.</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 700px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  background-color: ${(props) => (props.type === "danger" ? "red" : "green")};
  color: white;
  font-weight: 600;
`;

export default Alert;
