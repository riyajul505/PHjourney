import { useContext, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const { logIn } = useContext(AuthContext);
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  const handleCapthavalidation = (e) => {
    const value = e.target.value;
    if (validateCaptcha(value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email,password)
    logIn(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire("Logged in");
        navigate(from, {replace:true});
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                onBlur={handleCapthavalidation}
                name="captcha"
                placeholder="type captcha"
                className="input input-bordered"
              />
              {/* <input type="submit"  className='btn btn-primary btn-xs mt-2' value="Validate Captcha" /> */}
              <label className="label">
                <a href="register" className="label-text-alt link link-hover">
                  New To this website? Register
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button disabled={false} className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
