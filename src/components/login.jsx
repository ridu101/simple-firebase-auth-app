import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { FcGoogle } from "react-icons/fc";

const googleProvider = new GoogleAuthProvider();
const login = () => {
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
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
        <button onClick={handleGoogleSignIn} className="flex w-full items-center justify-center gap-2 bg-gray-100 border p-3 rounded-lg font-semibold hover:bg-gray-200">
          <FcGoogle className="text-xl" />
          Sign in with Google
        </button>

        {/* <div className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

          <button className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
            Login
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default login;
