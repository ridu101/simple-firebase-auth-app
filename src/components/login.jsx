import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

const googleProvider = new GoogleAuthProvider();
const login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [user, setUser] = useState(null);
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
            <span className="text-2xl">🔐</span>
          </div>
          <h1 className="text-3xl font-bold text-slate-900">Please Login</h1>
          <p className="mt-2 text-slate-500">
            Login to continue to your account
          </p>
        </div>
        <button
          onClick={handleGoogleSignIn}
          className="flex w-full items-center justify-center gap-2 bg-gray-100 border p-3 rounded-lg font-semibold hover:bg-gray-200"
        >
          <FcGoogle className="text-xl" />
          Sign in with Google
        </button>
        {user && (
          <div>
            <h3>{user.displayName}</h3>
            <h2>Email:{user.email}</h2>
        
          </div>
        )}
      </div>
    </div>
  );
};

export default login;
