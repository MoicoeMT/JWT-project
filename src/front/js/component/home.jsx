import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-center align-items-center m-5">
      <div id="Card-home1" className="container mt-5">
        <div id="Card-home" className="card p-5 d-flex justify-content-center align-items-center flex-column gap-4">
          <h1>Bienvenido a JWT</h1>
          <button
            onClick={() => navigate("/login")}
            className="btn btn-primary "
          >
            Go to login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="btn btn-primary "
          >
            Go to register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
