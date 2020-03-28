import React from "react";
// default context object with properties corresponding to Provider values

const UserContext = React.createContext({
  title: "",
  image: "",
  language: "",
  
  onClick: () => undefined
});

export default AlertContext;
