import React from "react";

const TracksContext = React.createContext({
  result: {},
  search: "",
  handleInputChange: () => {},
  handleFormSubmit: () => {},
});

export default TracksContext;
