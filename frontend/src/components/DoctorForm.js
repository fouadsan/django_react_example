import React, { useState } from "react";
import styled from "styled-components";

function UpdateForm() {
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [clinic, setClinic] = useState("");

  return (
    <Wrapper>
      <div className="input-container">
        <label>email</label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="input-container">
        <label>first name</label>
        <input
          type="text"
          placeholder="Enter first name"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          required
        />
      </div>
      <div className="input-container">
        <label>last name</label>
        <input
          type="text"
          placeholder="Enter last name"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
          required
        />
      </div>
      <div className="input-container">
        <label>phone number</label>
        <input
          type="text"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div className="input-container">
        <label>clinic</label>
        <input
          type="text"
          placeholder="Enter clinic name"
          value={clinic}
          onChange={(e) => setClinic(e.target.value)}
          required
        />
      </div>
      <button type="submit">Update</button>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;

  .input-container {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
  }

  label {
    text-align: left;
  }

  button {
    margin-top: 2rem;
    padding: 0.5rem;
  }
`;

export default UpdateForm;
