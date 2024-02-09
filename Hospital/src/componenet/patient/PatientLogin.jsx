import { NavLink, useNavigate } from "react-router-dom";

const PatientLogin = () => {
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    // Add your login logic here
  };

  return (
    <div className="login">
      <div className="container-fluid">
        <form className="mx-auto">
          <h4 className="text-center">Patient Login</h4>
          <div className="mb-3 mt-5">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Patient Addhar Number
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
            <span id="emailHelp" className="form-text mt-3">
              <NavLink to="/">Forget password</NavLink>
            </span>{" "}
            <span
              id="emailHelp"
              className="form-text mt-4 m-1"
              onClick={() => navigate("/login/patientsignup")}
            >
              <NavLink to="/">Dont Have Account Signup</NavLink>
            </span>
          </div>

          <button
            type="submit"
            onClick={(e) => handleLogin(e)}
            className="btn btn-primary mt-5"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default PatientLogin;
