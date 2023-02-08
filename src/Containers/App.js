import { Route, Routes } from 'react-router-dom';
import './App.css';

import AboutPage from '../Pages/AboutPage';
import "./App.css";
import HomePage from "../Pages/Home/HomePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>


  );
}

export default App;
