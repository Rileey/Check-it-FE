
import React, { useState, useRef, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from './stylesheets/login.module.css'
import { CircularProgress } from "@material-ui/core";
import { loginCall } from "./apiCalls";
import { AuthContext } from "./context/AuthContext";

const LogIn = () => {
  // const dispatch = useDispatch();
  // const history = useHistory();
  // const [signinData, setsigninData] = useState({
  //   email: "",
  //   password: "",
  // });

  // const { email, password } = signinData;
  const email = useRef();
  const password = useRef();
  const {user, isFetching, error, dispatch} = useContext(AuthContext);

  // const handleInput = (e) => {
  //   const { name, value } = e.target;
  //   setsigninData({
  //     ...signinData,
  //     [name]: value,
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall({email: email.current.value, password: password.current.value}, dispatch)
    // dispatch(login(email, password, history));

  };
  return (
    <div>
    <div className={styles["login-page"]}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 style={{color: "white"}}>Sign In</h2>
        <div className={styles["form-control"]}>
          <label htmlFor="email" style={{color: "white"}}>Your email</label>
          <input
            type="email"
            id="email"
            ref={email}
            name="email"
            placeholder="email"
            // onChange={handleInput}
            required
          />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="password" style={{color: "#fff"}}>Your password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            ref={password}
            // onChange={handleInput}
            id="password"
            required
          />
        </div>
        <div className={styles["form-control"]}>
          <button type="submit">{isFetching ? <CircularProgress color="#fff" size="10px" /> : "Login"}</button>
        </div>
        <span className={styles["span"]} style={{color: "#fff"}}>No account? <Link to="/signup"> Create An Account </Link></span>
      </form>
    </div>
    </div>
  );
};

export default LogIn;
