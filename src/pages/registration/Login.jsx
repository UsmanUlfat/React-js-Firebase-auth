import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/FirebaseConfig";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signin = async () => {
    if (email === "" || password === "") {
        return alert("Please fill the all filed");
      }
    try {
      

      const user = await signInWithEmailAndPassword(auth, email, password);
      alert("signIn successful");
      const users = localStorage.setItem('user',JSON.stringify(user));
       navigate('/')
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-800 px-10 py-10 rounded-xl">
        <div className="">
          <h1 className="text-center text-white text-xl mb-4 font-bold">
            Login
          </h1>
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="password"
          />
        </div>
        <div className="flex justify-center mb-3">
          <button 
          onClick={signin}
          className="bg-yellow-500 w-full text-black font-bold px-2 py-2 rounded-lg">
            Login
          </button>
        </div>
        <div>
          <h2 className="text-white">
            Don't have an account{" "}
            <Link className="text-yellow-500 font-bold" to={"/signup"}>
              SingUp
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}
