import React, { useState } from "react";

import Input from "../UI/Input";
import "./Style.css";

function Register(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [formIsTouched, setFormIsTouched] = useState(false);

  const nameIsValid = enteredName.trim() !== "";
  const passwordIsValid = enteredPassword.trim().length > 3;

  let formIsValid = nameIsValid && passwordIsValid;

  let nameInvalid = enteredName.trim() === "" && formIsTouched === true;
  let passwordInvalid =
    enteredPassword.trim().length < 4 && formIsTouched === true;

  function onSubmit(event) {
    event.preventDefault();
    setFormIsTouched(true);
  }

  function enteredNameHandler(event) {
    setEnteredName(event.target.value);
  }

  function enteredPasswordHandler(event) {
    setEnteredPassword(event.target.value);
  }

  function buttonHandler() {
    if (formIsValid) {
      props.onRoute("QuestionBox");
    }
    setFormIsTouched(true);
  }

  function blurHandler() {
    setFormIsTouched(true);
  }

  return (
    <form className="app" onSubmit={onSubmit}>
      <div className="form-control">
        <Input
          htmlFor="name"
          label="Name"
          onBlur={blurHandler}
          onChange={enteredNameHandler}
          id="name"
          type="text"
        />
        {nameInvalid && (
          <p className="error-text">Name field must not be empty.</p>
        )}
        <Input
          htmlFor="password"
          label="Password"
          onBlur={blurHandler}
          onChange={enteredPasswordHandler}
          id="password"
          type="password"
        />
        {passwordInvalid && (
          <p className="error-text">Password must be more than 3 characters.</p>
        )}
        <Input
          htmlFor="type"
          label="What type you think you are?"
          id="mbti"
          type="text"
          placeholder="ex: ESTP, INFP,.."
        />
      </div>
      <div>
        <button onClick={buttonHandler}>Register</button>
      </div>
    </form>
  );
}

export default Register;

// useEffect(() => {
//   fetch("https://someDatabase/user/passwords/"),
//     {
//       method: "POST",
//       content: "",
//     };
//   // validate the password
//   if (
//     enteredPassword === "DatabasePassword" &&
//     enteredName === "DatabaseName"
//   ) {
//     formIsValid = true;
//   }
// }, [enteredPassword, enteredName]);
