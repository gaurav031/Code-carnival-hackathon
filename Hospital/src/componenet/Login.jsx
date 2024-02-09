import { Outlet, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>Login Page</h1>
        <button
          type="button"
          className="btn btn-outline-info button"
          onClick={() => navigate("doctor")}
        >
          Doctor Login
        </button>

        <button
          type="button"
          className="btn btn-outline-warning button"
          onClick={() => navigate("patient")}
        >
          Patient Login
        </button>
      </div>
      <Outlet />
    </>
  );
}

export default Login;
