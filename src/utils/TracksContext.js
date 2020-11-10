import React from "react";

const TracksContext = React.createContext({
  result: [],
  handleInputChange: () => {},
  handleFormSubmit: () => {},
});

export default TracksContext;
