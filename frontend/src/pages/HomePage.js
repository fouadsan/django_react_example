import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import * as doctorsActions from "../store/actions/doctors";
import * as modalActions from "../store/actions/modal";
import { Loading, Alert, DoctorItem, UpdateModal } from "../components";

function Homepage() {
  const {
    doctors_loading: loading,
    doctors_error: error,
    doctors,
  } = useSelector((state) => state.doctors);

  const { is_open } = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(doctorsActions.fetchDoctors());
  }, [dispatch]);

  const handleDelete = (docId) => {
    if (window.confirm("Are you sure you want to delete this doctor")) {
      // dispatch(deleteUser(userId));
      console.log(`deleted doctor ${docId}`);
    }
  };

  const handleCreate = () => {
    dispatch(modalActions.openModal());
  };

  const handleUpdate = (docId) => {
    console.log(`updated doctor ${docId}`);
    dispatch(modalActions.openModal());
  };

  const handleOnClose = () => {
    dispatch(modalActions.closeModal());
  };

  return (
    <Wrapper className="page">
      <div className="page-container">
        {is_open && <UpdateModal onClose={handleOnClose} />}
        <h2>CRUD APP using DRF & React JS</h2>
        {loading ? (
          <div>
            <Loading />
          </div>
        ) : error.status ? (
          <div>
            <Alert type={"danger"} text={error.msg} />
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>EMAIL</th>
                <th>FNAME</th>
                <th>LNAME</th>
                <th>PHONE</th>
                <th>CLINIC</th>
                <th>
                  <button type="button" onClick={handleCreate}>
                    Add Doctor
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {doctors.length
                ? doctors.map((doc) => {
                    return (
                      <DoctorItem
                        key={JSON.stringify(doc.id)}
                        doc={doc}
                        handleDelete={handleDelete}
                        handleUpdate={handleUpdate}
                      />
                    );
                  })
                : null}
            </tbody>
          </table>
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  .page-container {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & h2 {
      padding: 1rem;
    }
  }

  table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  table td,
  table th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  table tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  table tr:hover {
    background-color: #ddd;
  }

  table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04aa6d;
    color: white;
  }
`;

export default Homepage;
