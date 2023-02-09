import {Link, Route} from 'react-router-dom';
import Switch from "react-router-dom/es/Switch";
import './App.css';
import Login from "./../Pages/login";
import Password from "./../Pages/register";
import AboutPage from '../Pages/AboutPage';
import "./App.css";
import HomePage from "../Pages/Home/HomePage";
function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<HomePage />} />
    //   <Route path="/about" element={<AboutPage />} />
    // </Routes>
      <div className={'background'}>
         <div className={'link'}>
            <Link label='Home' to='/'> Home </Link>
            <Link label='login' to='/login'>Login</Link>
            <Link label='reg' to='/password'>Password</Link>
         </div>
         <Switch>
            <Route exact path='/' component={HomePage}>
            </Route>
            <Route exact path='/login' component={Login}>
            </Route>
            <Route exact path='/password' component={Password}>
            </Route>
         </Switch>


      </div>


  );
}

export default App;
