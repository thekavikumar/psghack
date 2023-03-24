import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = ({ user, setUser }) => {
  const handleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <h1 className="font-bold text-gray-900 text-[28px]">DIGI-CS</h1>
      </Link>
      <div className="flex items-center justify-between gap-8">
        <Link to="/">
          <h1 className="font-bold text-gray-900 text-[18px]">Home</h1>
        </Link>
        <Link to="/about">
          <h1 className="font-bold text-gray-900 text-[18px]">About Us</h1>
        </Link>
        <Link to="/contact">
          <h1 className="font-bold text-gray-900 text-[18px]">Contact Us</h1>
        </Link>
        {user && (
          <Link to="/profile">
            <h1 className="font-bold text-gray-900 text-[18px]">Profile</h1>
          </Link>
        )}
        {!user ? (
          <button className="btn" onClick={handleLogin}>
            Login
          </button>
        ) : (
          <img
            class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src={user.photoURL}
            alt="profilepic"
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
