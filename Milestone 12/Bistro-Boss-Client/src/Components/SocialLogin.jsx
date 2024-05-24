import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const handleGoogleLogin = () => {
    googleSignIn().then((res) => {
      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };
  return (
    <div>
      <button onClick={handleGoogleLogin} className="btn btn-ghost text-xl">
        <FaGoogle />
      </button>
    </div>
  );
};

export default SocialLogin;
