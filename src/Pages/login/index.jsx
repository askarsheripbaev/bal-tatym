import React from 'react';
import FormModule from "../../Containers/form";
import style from './style.module.css'

const Login = () => {
   return (
       <div className={style.main}>
          <span className={style.logo}></span>
          <h3>Log in to your Account</h3>
          <h5>Welcome back, please enter your details.</h5>

          <FormModule/>
       </div>
   );
};

export default Login;