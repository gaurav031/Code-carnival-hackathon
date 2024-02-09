import { NavLink, useNavigate } from "react-router-dom";
const DoctorLogin = () => {
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    // Add your login logic here
  };
  return (
    <div className="login">
      <div class="container-fluid">
        <form class="mx-auto">
          <h4 class="text-center">Doctor Login</h4>
          <div class="mb-3 mt-5">
            <label for="exampleInputEmail1" class="form-label">
              Doctor Id
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
            <span id="emailHelp" className="form-text mt-3">
              <NavLink to="/">Forget password</NavLink>
            </span>{" "}
            <span
              id="emailHelp"
              className="form-text mt-4 m-1"
              onClick={() => navigate("/login/doctorsignup")}
            >
              <NavLink to="/">Dont Have Account Signup</NavLink>
            </span>
          </div>

          <button class="btn btn-primary mt-5" onClick={(e) => handleLogin(e)}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default DoctorLogin;
