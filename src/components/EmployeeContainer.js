import React, { useState, useEffect } from "react";
import API from "../utils/API";
import TracksContext from "../utils/TracksContext";
import Header from "./Header";
import Main from "./Main";
import ShowEmployees from "./ShowEmployees";
import Footer from "./Footer";
import styled from "styled-components";
import SearchForm from "./SearchForm";

const Layout = styled.div`
  display: grid;
  height: 100vh;
  /* grid-template-rows: auto 1fr auto; */
`;

const EmployeeContainer = () => {
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState(1);

  useEffect(() => {
    API.getEmployees()
      .then((employees) => setResult(employees))
      .catch((error) =>
        console.log(
          "There was an error processing your results, please try again",
          error
        )
      );
  }, []);
  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearch(value.toLowerCase());
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSortOrder(-sortOrder);
  };
  console.log(result);
  return (
    <TracksContext.Provider
      value={{
        result: result
          .filter(({ name }) =>
            `${name.first} ${name.last}`.toLowerCase().includes(search)
          )
          .sort((a, b) => {
            if (a.name.first < b.name.first) return -sortOrder;
            else if (a.name.first > b.name.first) return sortOrder;
            else if (a.name.last < b.name.last) return -sortOrder;
            else if (a.name.last > b.name.last) return sortOrder;
            else return 0;
          }),
        handleInputChange,
        handleFormSubmit,
      }}
    >
      <Layout>
        <Header />
        <Main>
          <SearchForm />
          <ShowEmployees />
        </Main>
        <Footer />
      </Layout>
    </TracksContext.Provider>
  );
};

export default EmployeeContainer;
