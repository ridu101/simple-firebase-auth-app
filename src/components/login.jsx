import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
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

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
        setUser(null);
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
          <h1 className="text-3xl font-bold text-slate-900">
            Please Login
          </h1>
          <p className="mt-2 text-slate-500">
            Login to continue to your account
          </p>
        </div>
        {user ?
          <button
            onClick={handleSignout}
            className="w-full rounded-lg bg-red-500 px-5 py-3 font-semibold text-white transition hover:bg-red-600 active:scale-95"
          >Sign out
          </button>
          :
          <><button
            onClick={handleGoogleSignIn}
            className="flex w-full items-center justify-center gap-2 rounded-lg border bg-gray-100 p-3 font-semibold hover:bg-gray-200"
          >
            <FcGoogle className="text-xl" />
            Sign in with Google
          </button>
          <button className="btn"> i am google</button></>
        }
        {user && (
          <div className="mt-6 rounded-lg bg-slate-50 p-4">
            <h3 className="text-lg font-semibold text-slate-800">
              {user.displayName}
            </h3>
            <h2 className="mt-1 text-sm text-slate-600">
              Email: {user.email}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};
export default login;