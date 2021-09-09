
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./redux/action/userAction";
import { Link, useHistory } from "react-router-dom";
import { initialState } from "./redux/reducer/loginReducer";
import styles from './stylesheets/login.module.css'
import { CircularProgress } from "@material-ui/core";

const LogIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [signinData, setsigninData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = signinData;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setsigninData({
      ...signinData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(email, password, history));
  };

  return (
    <div>
    <div className={styles["login-page"]}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 style={{color: "#fff"}}>Sign In</h2>
        <div className={styles["form-control"]}>
          <label htmlFor="email" style={{color: "#fff"}}>Your email</label>
          <input
            type="email"
            id="email"
            value={email}
            name="email"
            placeholder="email"
            onChange={handleInput}
            required
          />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="password" style={{color: "#fff"}}>Your password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={handleInput}
            id="password"
            required
          />
        </div>
        <div className={styles["form-control"]}>
          <button type="submit">{initialState.isLoading ? <CircularProgress /> : "Login"}</button>
        </div>
        <span className={styles["span"]} style={{color: "#fff"}}>No account? <Link to="/signup"> Create An Account </Link></span>
      </form>
    </div>
    </div>
  );
};

export default LogIn;
