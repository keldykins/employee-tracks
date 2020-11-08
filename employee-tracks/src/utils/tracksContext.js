import React from "react";

const tracksContext = React.createContext({
  result: {},
  search: "",
  handleInputChange: () => {},
  handleFormSubmit: () => {},
});

export default tracksContext;
