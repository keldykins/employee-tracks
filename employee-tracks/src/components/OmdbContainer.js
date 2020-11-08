import React, { useState, useEffect } from "react";
import API from "../utils/API";
import tracksContext from "../utils/tracksContext";
import Header from "./Header";
import Main from "./Main";
import showEmployees from "./showEmployees";
import Footer from "./Footer";
import styled from "styled-components";

const Layout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
`;

const OmdbContainer = () => {
  const [results, setResults] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    searchEmployees("The Matrix");
  }, []);

const showEmployees = async () => {
  try {
    const res = await API.results();
      setResults(res.data);
  } catch (error) {
    console.log(
      "There was an error processing your results, please try again",
      error
    );
  }
};

  const searchEmployees = async (query) => {
    try {
      const res = await API.search(query);
      setResults(res.data);
    } catch (error) {
      console.log(
        "There was an error processing your results, please try again",
        error
      );
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    searchMovies(search);
  };

  return (
    <tracksContext.Provider
      value={{
        search,
        results,
        handleInputChange,
        handleFormSubmit,
      }}
    >
      <Layout>
        <Header />
        <Main>
          <showEmployees />
        </Main>
        <Footer />
      </Layout>
    </tracksContext.Provider>
  );
};

export default OmdbContainer;
