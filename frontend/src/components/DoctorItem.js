import React from "react";
import styled from "styled-components";

function DoctorItem({ doc, handleDelete, handleUpdate }) {
  return (
    <Wrapper>
      <td>{doc.id}</td>
      <td>{doc.email}</td>
      <td>{doc.firstName}</td>
      <td>{doc.lastName}</td>
      <td>{doc.phoneNumber}</td>
      <td>{doc.clinic}</td>
      <td>
        <button type="button" onClick={() => handleDelete(doc.id)}>
          delete
        </button>
        <button type="button" onClick={() => handleUpdate(doc.id)}>
          update
        </button>
      </td>
    </Wrapper>
  );
}

const Wrapper = styled.tr``;

export default DoctorItem;
