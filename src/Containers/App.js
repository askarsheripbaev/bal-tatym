<<<<<<< HEAD

import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from '../Pages/HomePage'
import AboutPage from '../Pages/AboutPage';
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "../Pages/Home/HomePage";
>>>>>>> 077d04424365bd9db55e5d17f0c67754a29fa746

function App() {
  return (
<<<<<<< HEAD
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
=======
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
>>>>>>> 077d04424365bd9db55e5d17f0c67754a29fa746
  );
}

export default App;
