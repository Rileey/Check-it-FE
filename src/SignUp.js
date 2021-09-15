import style from "./stylesheets/signup.module.css";
import React, { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { register } from './redux/action/signupAction';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { initialState } from "./redux/reducer/loginReducer";
import { CircularProgress } from "@material-ui/core";
import { AuthContext } from "./context/AuthContext";
import axios from "axios"
const SignUp = () => {


  // const dispatch = useDispatch();
  const history = useHistory();

  // const [values, setValues] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  // });
  const name = useRef();
  const password = useRef();
  const email = useRef();
  const confirmPassword = useRef();
  const {user, isFetching, error, dispatch} = useContext(AuthContext);

  // const {name, email, password, confirmPassword} = values;
  const [submitted, setSubmitted] = useState(false);
  const [valid, SetValid] = useState(false);

  // const handleNameInputChange = (event) => {
  //   setValues({ ...values, name: event.target.value });
  // };

  // const handleEmailInputChange = (event) => {
  //   setValues({ ...values, email: event.target.value });
  // };

  // const handlePasswordInputChange = (event) => {
  //   setValues({ ...values, password: event.target.value });
  // };

  // const handleConfirmPasswordInputChange = (event) => {
  //   setValues({ ...values, confirmPassword: event.target.value });
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
    name.current.value &&
    email.current.value &&
    password.current.value  &&
    confirmPassword.current.value  &&
    confirmPassword.current.value  === password.current.value  &&
    password.current.value .length > 6 &&
    password.current.value .match(/^[0-9A-Za-z]+$/)
    ) {
      SetValid(true);
    }
    setSubmitted(true);
    const user = {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value
    }
    try {
      await axios.post("/register", user)
      history.push("/login")
    } catch (err) {
      console.log(err)
    }
    
    // dispatch(register(name, email, password, confirmPassword, history))
  }

  

  return (
    <div className={style.container}>
      <div className={style.second}>                
        <div className={style.details}>
          <div className={style.h5}>
            <h5>CREATE AN ACCOUNT</h5>
          </div>
          <div className={style.form}>
            <form action="/" onSubmit={handleSubmit}>
              {submitted && valid ? (
                <div className={style.success} style={{color:"#fff"}}>
                  Success! See you on the other side.
                </div>
              ) : null}
              <div className={style.section0}>
                <label className={style.name}>
                  Your name <br />
                  {submitted && !name.current.value ? (
                    <span>Please enter your name</span>
                  ) : null}
                </label>
                <input
                  autoComplete="off"
                  ref={name}
                  // onChange={handleNameInputChange}
                  // value={values.name}
                  className={style.inputName}
                  type="text"
                  id="yourname"
                  name="name"
                  placeholder="name"
                />
              </div>
              <div className={style.section1}>
                <label className={style.email}>
                  Your email
                  <br />{" "}
                  {submitted && !email.current.value ? (
                    <span>Please enter your email</span>
                  ) : null}
                </label>
                <input
                  autoComplete="off"
                  ref={email}
                  // onChange={handleEmailInputChange}
                  // value={values.email}
                  className={style.inputEmail}
                  type="email"
                  id="mail"
                  name="email"
                  placeholder="stuff@gmail.com.."
                />
              </div>
              <div className={style.section2}>
                <label className={style.password}>
                  Your password
                  <br />{" "}
                  {submitted && !password.current.value ? (
                    <span>Please enter a password</span>
                  ) : submitted && (password.current.value.length < 7) ? 
                  <span> Password should not be less than 7 characters</span>
                   : submitted && (!password.current.value.match(/^[0-9A-Za-z]+$/)) ? 
                   <span className={style.alpha}> Password must be alpha numeric characters</span> : null}
                </label>
                <input
                  autoComplete="off"
                  ref={password}
                  // onChange={handlePasswordInputChange}
                  // value={values.password}
                  type="password"
                  id="pword"
                  name="password"
                  placeholder="password"
                  className={style.inputPassword}
                />
              </div>
              <div className={style.section3}>
                <label className={style.confirmPassword}>
                  Confirm password
                  <br />{" "}
                  {submitted && !confirmPassword.current.value ? (
                    <span>Please confirm your password</span>
                  ) : submitted && confirmPassword.current.value !== password.current.value ?
                   <span> Password not a match</span> : submitted && (!password.current.value.match(/^[0-9A-Za-z]+$/)) ? 
                   <span className={style.alpha}> Password must be alpha numeric characters</span> : null}
                </label>
                <input
                  autoComplete="off"
                  ref={confirmPassword}
                  // onChange={handleConfirmPasswordInputChange}
                  // value={values.confirmPassword}
                  type="password"
                  id="Cpword"
                  name="confirmPassword"
                  placeholder="confirm password"
                  className={style.inputConfirmPassword}
                />
              </div>
              <div className={style.section4}>
                <button onClick={register} type="submit" className={style.btn2}>
                {isFetching ? <CircularProgress color="#fff" size="10px" /> : "Sign Up"}
                </button>
              </div>
              <span className={style.loginrdr}>Already have an account? <Link to="/login">Login Here</Link></span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

//Don't forget to wrap the code inside the return statement in parentheses.
