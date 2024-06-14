// src/theme/Root.js
import React, { useState, useEffect } from "react";
import { signInWithGoogle, logout, auth } from "./firebase";
import "../css/login.css";
import Loading from "./Loading";

export default function Root({ children }) {
  const [userAuth, setUserAuth] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    // Subscribe to auth state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user && user.email.endsWith("@fabaf.in")) {
        setUserAuth(user);
      } else {
        if (user) {
          alert("You must sign in with a @fabaf.in email address.");
          logout();
        }
        setUserAuth(null);
      }
      setAuthLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (authLoading) {
    return (
      <>
        <Loading />
        <div style={{ display: "none" }}>{children}</div>
      </>
    );
  }

  return (
    <React.Fragment>
      {userAuth ? (
        <>{children}</>
      ) : (
        <div className="login">
          <div className="login__container">
            <button
              className="login__btn login__google"
              onClick={signInWithGoogle}
            >
              Login with Google
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
