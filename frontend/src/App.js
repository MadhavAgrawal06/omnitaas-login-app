import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Welcome from "./Welcome";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/welcome" element={<Welcome />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;