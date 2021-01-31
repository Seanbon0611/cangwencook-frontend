import React, { useState } from "react";
import CustomButton from "../../components/custom-button/CustomButton";
import FormInput from "../../components/form-input/FormInput";
import { Link } from "react-router-dom";
import "./sign-up.styles.scss";
import api from "../../services/api";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const config = {
      method: "POST",
      credentials: "include",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        passwordConfirmation: passwordConfirmation,
      }),
    };
    if (password !== passwordConfirmation) {
      return setErrors("Passwords do not match");
    }
    api.user.signUp(config).then((res) => {
      console.log(res);
      if (res.msg === "Successfully Created") {
        setSuccess(true);
      } else if (res.error) {
        console.log(res);
        setErrors(res.error);
      }
    });
  };
  if (success === true) {
    return <h1>Success</h1>;
  } else {
    return (
      <div className="sign-up-container">
        <form onSubmit={handleSubmit}>
          <div>
            <div className="form-container">
              <h1 className="sign-up-title">Create Account</h1>
              <p style={{ padding: "10px 0 0 0" }}>
                Already have an account?{" "}
                <Link to="/signin" className="link-to">
                  Click here to sign in
                </Link>
                .
              </p>
              <p style={{ paddingTop: "5px" }}>*Required</p>
              <div className="full-name">
                <div className="first-name">
                  <FormInput
                    asterisk
                    type="text"
                    label="First Name"
                    name="firstName"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="last-name">
                  <FormInput
                    asterisk
                    type="text"
                    label="Last Name"
                    required
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <FormInput
                asterisk
                type="email"
                label="Email"
                required
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormInput
                asterisk
                type="password"
                required
                label="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormInput
                asterisk
                type="password"
                required
                label="Confirm Password"
                name="passwordConfirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
              {Object.entries(errors).map((err, idx) => (
                <h2
                  style={{ color: "red" }}
                  key={idx}
                  className="error"
                >{`Error: ${err[0]} ${err[1][0]}`}</h2>
              ))}
              <div style={{ padding: "10px 0" }}>
                <CustomButton type="submit">Create Account</CustomButton>
              </div>
              <p style={{ padding: "10px 0" }}>
                By signing up you accept the{" "}
                <span className="link-to">
                  Terms of Service and Privacy Policy
                </span>
                .
              </p>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default SignUp;
