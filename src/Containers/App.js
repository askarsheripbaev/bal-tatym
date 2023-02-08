import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from '../Pages/HomePage'
import AboutPage from '../Pages/AboutPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
