import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase.init";

const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (event) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
    event.preventDefault();
  };

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const hanldePassBlur = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div>
      <form onClick={handleFormSubmit}>
        <input
          onBlur={handleEmailBlur}
          type="email"
          id="email"
          name="email"
          placeholder="Your email address"
        />
        <br />
        <input
          onBlur={hanldePassBlur}
          type="password"
          name="password"
          id="password"
          placeholder="Your password"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;
