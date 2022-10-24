import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { fetchDoctors, deleteDoctor } from "../store/actions/doctors";
import * as modalActions from "../store/actions/modal";
import {
  Loading,
  Alert,
  DoctorItem,
  Modal,
  Search,
  PaginationCmp,
} from "../components";

function Homepage() {
  const {
    doctors_loading: loading,
    doctors_error: error,
    doctors,
    message,
  } = useSelector((state) => state.doctors);

  const { is_open, id } = useSelector((state) => state.modal);

  const [searchValue, setSearchValue] = useState("");

  const [pagination, setPagination] = useState({
    next: null,
    previous: null,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDoctors(searchValue, pagination));
  }, [dispatch, doctors.list.length, searchValue, pagination, message]);

  const handleDelete = (docId) => {
    if (window.confirm("Are you sure you want to delete this doctor")) {
      dispatch(deleteDoctor(docId));
    }
  };

  const handleCreate = () => {
    dispatch(modalActions.openModal());
  };

  const handleUpdate = (docId) => {
    dispatch(modalActions.openModal(docId));
  };

  const handleOnClose = () => {
    dispatch(modalActions.closeModal());
  };

  return (
    <Wrapper className="page">
      <div className="page-container">
        {is_open && <Modal id={id} closeModal={handleOnClose} />}
        <h2>CRUD APP using DRF & React JS</h2>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        {loading ? (
          <div>
            <Loading />
          </div>
        ) : error.status ? (
          <div>
            <Alert type={"danger"} text={error.msg} />
          </div>
        ) : (
          <>
            {message && <Alert type={"success"} text={message} />}

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
                {doctors.list.length
                  ? doctors.list.map((doc) => {
                      return (
                        <DoctorItem
                          key={doc.id}
                          doc={doc}
                          handleDelete={handleDelete}
                          handleUpdate={handleUpdate}
                        />
                      );
                    })
                  : null}
              </tbody>
            </table>
          </>
        )}
        <PaginationCmp
          nextUrl={doctors.next}
          previousUrl={doctors.previous}
          setPagination={setPagination}
        />
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
