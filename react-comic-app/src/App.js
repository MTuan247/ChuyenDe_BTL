import "./App.css";
import Home from "./components/screen/Home";
import Genre from "./components/screen/Genre";
import Overview from "./components/screen/Overview";
import Login from "./components/screen/Login";
import Admin from "./components/screen/Admin";
import TheHeader from "./components/layout/TheHeader";
import TheIntro from "./components/layout/TheIntro";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./plugin/ProtectedRoute";
import TheFooter from "./components/layout/TheFooter";
import TheSearchBar from "./components/layout/TheSearchBar";

import './css/layout/app.css'

function App() {
  return (
    <>
      <Router basename="Novel">
        <TheHeader />
        <TheIntro />
        <TheSearchBar />
        <div className="container-xl">
          <Routes>
            <Route
              index
              path="/"
              element={
                <div className="body-container">
                  <Home />
                </div>
              }
            />
            <Route path="/Genre" element={<Genre />} />
            <Route
              path="/Overview"
              element={
                <div className="body-container">
                  <Overview />
                </div>
              }
            />
            <Route path="/About" element={<div>About</div>} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </div>
        <TheFooter />
      </Router>
      <Router basename="Admin">
        <TheHeader />
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route index path="/" element={<Admin />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
