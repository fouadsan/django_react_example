import React from "react";
import styled from "styled-components";

import UpdateForm from "./DoctorForm";

function UpdateModal({ onClose }) {
  return (
    <Wrapper>
      <div className="modal-container">
        <div className="msg-container">
          <UpdateForm />
        </div>
        <button className="close-modal-btn" onClick={onClose}>
          {/* <button className="close-modal-btn" onClick={closeModal}> */}
          close
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
  z-index: 3;
  animation: fadeIn 0.5s;

  .modal-container {
    background: white;
    width: 40vw;
    height: 60vh;
    text-align: center;
    display: grid;
    place-items: center;
    position: relative;
  }

  .close-modal-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    border-color: transparent;
    color: #000;
    cursor: pointer;
  }
`;

export default UpdateModal;
