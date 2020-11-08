import React, { useState } from "react";
import API from "../utils/API";
import TracksContext from "../utils/TracksContext";
import Header from "./Header";
import Main from "./Main";
import ShowEmployees from "./ShowEmployees";
import Footer from "./Footer";
import styled from "styled-components";

const Layout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
`;

const OmdbContainer = () => {
  const [result, setResult] = useState({});
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   searchEmployees("The Matrix");
  // }, []);

  const searchEmployees = async (query) => {
    try {
      const res = await API.search(query);
      setResult(res.data);
    } catch (error) {
      console.log(
        "There was an error processing your results, please try again",
        error
      );
    }
  };

  // const searchEmployees = async (query) => {
  //   try {
  //     const res = await API.search(query);
  //     setResult(res.data);
  //   } catch (error) {
  //     console.log(
  //       "There was an error processing your results, please try again",
  //       error
  //     );
  //   }
  // };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    searchEmployees(search);
  };

  return (
    <TracksContext.Provider
      value={{
        search,
        result,
        handleInputChange,
        handleFormSubmit,
      }}
    >
      <Layout>
        <Header />
        <Main>
          <ShowEmployees />
        </Main>
        <Footer />
      </Layout>
    </TracksContext.Provider>
  );
};

export default OmdbContainer;
