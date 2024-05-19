import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    
    createUser(data.email, data.password)
    .then(result => console.log(result.user))
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && <span>This Name field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email")}
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
                placeholder="password"
                {...register("password", {required:true, 
                    pattern: /(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}/
                })}
                className="input input-bordered"
                
              />
              {errors.password?.type ==='pattern' && <p className="text-red-600">one digit , one lower case, one upper case, least 8 from the mentioned characters</p>}
              <label className="label">
                <a href="login" className="label-text-alt link link-hover">
                  Already have an account? Login
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sign Up" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
