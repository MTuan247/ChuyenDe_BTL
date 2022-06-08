import "./App.css";
import Home from "./components/screen/Home";
import Genre from "./components/screen/Genre";
import Overview from "./components/screen/Overview";
import Login from "./components/screen/Login";
import TheHeader from "./components/layout/TheHeader";
import TheIntro from "./components/layout/TheIntro";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./plugin/ProtectedRoute";
import TheFooter from "./components/layout/TheFooter";
import TheSearchBar from "./components/layout/TheSearchBar";

function App() {
  return (
    <>
      <Router>
        <TheHeader />
        <TheIntro />
        <TheSearchBar />
        <div className="container-xl">
          <div className="body-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Genre" element={<Genre />} />
              <Route path="/Overview" element={<Overview />} />
              <Route path="/About" element={<div>About</div>} />
              <Route path="/Login" element={<Login />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/Protected" element={<div>Protected</div>} />
              </Route>
            </Routes>
          </div>
        </div>
      </Router>
      <TheFooter />
    </>
  );
}

export default App;
