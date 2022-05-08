import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { ProtectedRoute } from './plugin/ProtectedRoute';

import Home from './components/screen/Home';
import TheHeader from './components/layout/TheHeader';
import Login from './components/screen/Login'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
        <TheHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<div>About</div>} />
          <Route exact path="/Login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/Protected" element={<div>Protected</div>} />
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
