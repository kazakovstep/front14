import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './pages/Login';
import Register from "./pages/register/Register";
import Register_reset from "./pages/password/Password_reset";
import Verify from "./pages/password/Verify";
import New_password from "./pages/password/new_password";
import Advert from "./pages/advert/advert";
import Catalog from "./pages/catalog/Catalog";
import Summary from "./pages/advert/summary";
import AdvertCatalog from "./pages/catalog/advert";
import Task14 from "./pages/task14/task14";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path={"/login"} element={<Login/>} />
            <Route path={"/register"} element={<Register/>} />
            <Route path={"/password_reset"} element={<Register_reset/>} />
            <Route path={"/password_reset/verify"} element={<Verify/>} />
            <Route path={"/password_reset/new_password"} element={<New_password/>} />
            <Route path={"/advert"} element={<Advert/>} />
            <Route path={"/catalog"} element={<Catalog/>} />
            <Route path={"/advert/summary"} element={<Summary/>} />
            <Route path={"/catalog/advert"} element={<AdvertCatalog/>} />
            <Route path={"/Filmheros"} element={<App/>}/>
            <Route path={"/task14"} element={<Task14/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
