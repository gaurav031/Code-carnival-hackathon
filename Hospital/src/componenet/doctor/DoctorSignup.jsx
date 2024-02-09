const DoctorSignup = () => {
  const onRegister = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <div class="container-fluid">
        <form class="mx-auto">
          <h4 class="text-center">Doctor Signup</h4>
          <div class="mb-3 mt-5">
            <label for="DoctorId" class="form-label">
              Doctor Id
            </label>
            <input type="text" class="form-control" id="doctorId" />
          </div>

          <div class="mb-3 mt-5">
            <label for="DoctorName" class="form-label">
              Doctor Name
            </label>
            <input type="text" class="form-control" id="doctorName" />
          </div>

          <div class="mb-3 mt-5">
            <label for="doctorName" class="form-label">
              Hospital Name
            </label>
            <input type="text" class="form-control" id="hospitalName" />
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email Id
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <div class="mb-3 mt-5">
            <label for="PhonNumbar" class="form-label">
              Phon Number
            </label>
            <input type="text" class="form-control" id="phonNumbar" />
            <div className="NumberBox">
              <button type="button" class="btn btn-info">
                Get Otp
              </button>{" "}
              <input type="text" placeholder="Enter Otp" className="inp" />{" "}
              <button type="button" class="btn btn-success">
                Verify Otp
              </button>
            </div>
          </div>

          <div class="mb-3 mt-5">
            <label for="AddharNumbar" class="form-label">
              Addhar Number
            </label>
            <input type="text" class="form-control" id="addharNumbar" />
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
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Conform Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button class="btn btn-primary mt-5" onClick={(e) => onRegister(e)}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default DoctorSignup;
