import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
  const { actions } = useContext(Context);
  const [registered, setRegistered] = useState(false);
  

  const handleRegister = async (event) => {
    event.preventDefault();
    let person = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    console.log(person);
    const response = await actions.register(person);
    if (response.ok) {
      navigate("/login");
    }
  };

  // Si el registro fue exitoso, redirigir al usuario a la página de inicio de sesión

    
  return (
    <div className="container-fluid">
      <div className="row">
        <form onSubmit={handleRegister} id="register-right" className="col-md-4 d-flex flex-column justify-content-center p-5">
          <h1 className="pb-5">Register</h1>
          <div className="row mb-3">
            <label  className="col-sm-2 col-form-label">
            Name
            </label>
            <div className="">
              <input name="name" type="text" className="form-control"  />
            </div>
          </div>
          <div className="row mb-3">
            <label   className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="">
              <input name="email" type="email" className="form-control"  />
            </div>
          </div>
          <div className="row mb-3">
            <label  className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="">
              <input name="password" type="password" className="form-control"  />
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
  );
};

export default Register;
