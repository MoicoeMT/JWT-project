import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const Login = () => {
    const navigate = useNavigate();
    const { actions } = useContext(Context);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      let response = await actions.login({
        email: e.target.email.value,
        password: e.target.password.value,
      });
      console.log(response);
      if (response.ok) {
        navigate("/private");
      } else {
        return;
      }
    };

  return (
    <div className="container-fluid">
      <div className="row">
        <form  onSubmit={handleSubmit} id="register-right" className="col-md-4 d-flex flex-column justify-content-center p-5">
          <h1 className="pb-5">Login</h1>
          <div className="row mb-3">
            <label   className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="">
              <input name="email" type="email" className="form-control"/>
            </div>
          </div>
          <div className="row mb-3">
            <label  className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="">
              <input name="password" type="password" className="form-control"/>
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-25 rounded-pill btn-lg mt-5">
            Sign in
          </button>
        </form>

        <div id="register-left" className="col-md-8">
        </div>
      </div>
    </div>
  )
}

export default Login