import React from "react";
import Header from "./components/header";
import UserDirectory from "./components/userDirectory";

function App() {
  return (
    <div>
      <Header />            {/* Application name and high-level instructions */}
      <UserDirectory />     {/* Employee data */}
    </div>
  );
}

export default App;
