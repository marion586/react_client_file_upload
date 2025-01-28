import React, { useState } from "react";
import Container from "@mui/material/Container";
import Playground from "./components/Playgound";
import EmployeeForm from "./components/Employee/EmployeeForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <EmployeeForm />
      </Container>
    </div>
  );
}

export default App;
