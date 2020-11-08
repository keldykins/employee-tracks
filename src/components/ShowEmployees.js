import React, { useContext } from "react";
import TracksContext from "../utils/TracksContext";
import SearchForm from "./SearchForm";
import styled from "styled-components";

const StyledEmployees = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 60%;
    padding: 40px;
    background-color: #ffffff;
    border-radius: 10px;
    margin-bottom: 40px;

    h3 {
      font-size: 16px;
      line-height: 24px;
      margin: 0;
      text-align: center;
    }

    img {
      margin: 20px auto;
      max-width: 100%;
      height: auto;
    }
  }
  @media (max-width: 600px) {
    .card {
      width: 100%;
      border-radius: 0;
    }
  }
`;
const ShowEmployees = () => {
  const {
    result: { Name, Picture },
  } = useContext(TracksContext);

  return (
    <StyledEmployees>
      <div className="card">
        {Name ? (
          <>
            <h1>{Name || "Search for an Employee to Begin"}</h1>
            <img alt={Name} src={Picture} />
          </>
        ) : (
          <h3>No Results to Display</h3>
        )}
        <SearchForm />
      </div>
    </StyledEmployees>
  );
};

export default ShowEmployees;
