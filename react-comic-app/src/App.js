import "./App.css";
import Home from "./components/screen/Home";
import Login from "./components/screen/Login";
import TheHeader from "./components/layout/TheHeader";
import TheIntro from "./components/layout/TheIntro";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./plugin/ProtectedRoute";
import TheFooter from "./components/layout/TheFooter";

function App() {
  return (
    <>
      <Router>
        <TheHeader />
        <TheIntro />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<div>About</div>} />
          <Route path="/Login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/Protected" element={<div>Protected</div>} />
          </Route>
        </Routes>
      </Router>
      <TheFooter />
    </>
  );
}

export default App;
