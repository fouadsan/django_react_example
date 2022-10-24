import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { createDoctor } from "../store/actions/doctors";

import { updateDoctor } from "../store/actions/doctors";

function DoctorForm({ doctor }) {
  let emailVal = "";
  let fnameVal = "";
  let lnameVal = "";
  let phoneVal = "";
  let clinicVal = "";

  if (doctor) {
    emailVal = doctor.email;
    fnameVal = doctor.first_name;
    lnameVal = doctor.last_name;
    phoneVal = doctor.phone_number;
    clinicVal = doctor.clinic;
  }

  const [email, setEmail] = useState(emailVal);
  const [fname, setFname] = useState(fnameVal);
  const [lname, setLname] = useState(lnameVal);
  const [phone, setPhone] = useState(phoneVal);
  const [clinic, setClinic] = useState(clinicVal);

  const dispatch = useDispatch();

  const handleCreateDoctor = () => {
    dispatch(
      createDoctor({
        email,
        first_name: fname,
        last_name: lname,
        phone_number: phone,
        clinic,
      })
    );
  };

  const handleUpdateDoctor = () => {
    dispatch(
      updateDoctor(doctor.id, {
        email,
        first_name: fname,
        last_name: lname,
        phone_number: phone,
        clinic,
      })
    );
  };

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
      {doctor ? (
        <button type="button" onClick={handleUpdateDoctor}>
          Update
        </button>
      ) : (
        <button type="button" onClick={handleCreateDoctor}>
          Create
        </button>
      )}
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

export default DoctorForm;
