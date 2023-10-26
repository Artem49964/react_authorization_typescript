import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <div>

      <Routes>
          <Route path={'/'} element={<MainLayout/>}>
              <Route index element={<Navigate to={'login'}/>}></Route>
              <Route path={'login'} element={<LoginPage/>}></Route>
              <Route path={'register'} element={<RegisterPage/>}></Route>
          </Route>
      </Routes>

    </div>
  );
}

export default App;
