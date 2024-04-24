import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from "../../Firebase/firebase.config";


const Regester = () => {
  const [userData, setUserData] = useState([]);
  const [registerError, setRegisterError] = useState('');

  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  const handleRegester = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    console.log(terms);
    setRegisterError('');
    if (password.length < 6){
      toast.warning('Password Must be 6 char.');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // console.log(user);
        setUserData(user);
        setSuccess('User created Successfully.')
        toast('User created Successfully.')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setRegisterError(errorMessage);
        toast(errorMessage);
        // ..
      });
  };
  return (
    <div>
      <form onSubmit={handleRegester}>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="email"
            className="grow"
            placeholder="Email"
            name="email"
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input type={showPassword ? "text" : "password"} className="grow" name="password" />
          <span onClick={()=>{setShowPassword(!showPassword)}}>{showPassword ? <FaRegEyeSlash />
 : <FaEye />
}</span>
        </label>
        <label htmlFor="terms"><input type="checkbox" name="terms" id="terms" /> Accept Our Terms</label>
        
        <br />
        <button className="btn btn-primary">Regester</button>
      </form>
      {/* {
        registerError && <p>{registerError}</p>
      } */}
      {/* {
        success && toast(success)
      } */}
       <ToastContainer />
    </div>
  );
};

export default Regester;
