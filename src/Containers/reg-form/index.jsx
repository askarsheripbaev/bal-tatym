import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import styles from './styles.module.css';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import style from "../../Containers/reg-form/styles.module.css";

const schema = yup.object({
   fullName: yup.string().required('Пустой Name'),
   email: yup.string().required('Пустой email'),
   password: yup.string().required('Пустой пароль').min(8, 'Пароль должен составлять больше 8 символов'),
   passwordConfirm: yup.string().required('Подтвердите пароль')
       .oneOf([yup.ref('password')], 'Пароль не совпадает'),}).required();

const FormModule = () => {
   const {
      register,
      handleSubmit,
      formState:{ errors } }
       = useForm({
      resolver: yupResolver(schema)
   });
   const onSubmit = data => console.log(data);

   return (
       <div className={styles.container}>
          <span className={styles.logo}></span>
          <h2>Create an Account</h2>
          <h4>Sign up now to get started with an account</h4>
          <Button
              sx={{marginBottom: 3}}
              variant="outlined"
              className={styles.buttonG}
              // startIcon={<Avatar src={googleLogo} size="small"/>}
          >Sign up with Google</Button>
          <Divider>OR</Divider>
          <form onSubmit={handleSubmit(onSubmit)}>
             <div>
                <p>Full Name<span style={{color:"red"}}>*</span></p>
                <input
                    {...register("fullName")}
                />
                {errors.fullName && <p style={{color:"red"}}>{errors.fullName.message}</p>}
             </div>
             <div>
                <p>Email Address<span style={{color:"red"}}>*</span></p>
                <input
                    {...register("email")}
                />
                {errors.email && <p style={{color:"red"}}>{errors.email.message}</p>}
             </div>
             <div className={styles.passwordWrap}>
                <p>Password<span style={{color:"red"}}>*</span></p>
                <input
                    name="password"
                    type="password"
                    {...register('password')}
                />
                <RemoveRedEyeOutlinedIcon
                    className={styles.eyeButton}
                    color="action"
                />
                {errors.password && <p style={{color:"red"}}>{errors.password.message}</p>}
             </div>
             <div className={styles.passwordWrap}>
                <p>Confirm Password<span style={{color:"red"}}>*</span></p>
                <input
                    // name="passwordConfirm"
                    type="password"
                    {...register('passwordConfirm')}
                />

                <RemoveRedEyeOutlinedIcon
                    color="action"
                    className={styles.eyeButton}
                />
                {errors.passwordConfirm && <p style={{color:"red"}}>{errors.passwordConfirm.message}</p>}
             </div>
             <Checkbox/> <label>I have read and agree to the <a href='https://policies.google.com/terms?hl=en-US'>Terms of Service</a></label>

             {/* <input type="submit"/> */}
             <Button
                 type="submit"
                 variant="contained"
                 sx={{width: 400, marginTop: 3, padding: "15px 15px"}}
             >
                Get Started
             </Button>
          </form>
          <h4>Already have an account? <Link to='/login'>Log in</Link></h4>
       </div>
   );
};

export default FormModule;