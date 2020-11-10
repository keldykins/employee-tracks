import React, { useContext } from "react";
import TracksContext from "../utils/TracksContext";
import styled from "styled-components";

const StyledSearchForm = styled.form`
  display: flex;
  /* border: 1px solid #333333; */
  padding: 10px;
  margin-top: 20px;
  width: 65%;
  .form-group {
    display: flex;
    flex-direction: column;
    width: 100%;
    label {
      font-weight: bold;
      margin-bottom: 10px;
    }
    input {
      height: 40px;
      outline: none;
    }
    button {
      height: 40px;
      width: 65px;
      border-radius: 1px;
      background-color: #eeeeee;
      color: #333333;
      font-size: 20px;
    }
  }
`;

const SearchForm = () => {
  const { search, handleInputChange, handleFormSubmit } = useContext(
    TracksContext
  );
  return (
    <StyledSearchForm>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={handleInputChange}
          value={search}
          name="search"
          type="text"
          placeholder="Search For Employee"
          id="search"
        />
        <br />
        <button onClick={handleFormSubmit}>Sort</button>
      </div>
    </StyledSearchForm>
  );
};

export default SearchForm;
