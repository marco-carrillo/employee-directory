import React from "react";
import Header from "./components/header";
import UserList from "./components/userlist";
import UserDirectory from "./components/userDirectory";


function App() {
  return (
    <div>
      <Header />            {/* Application name and high-level instructions */}
      <UserDirectory />     {/* Wrapper for dataTable */}
    </div>
  );
}

export default App;
