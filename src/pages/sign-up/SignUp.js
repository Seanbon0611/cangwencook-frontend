import React, { useState } from "react";
import CustomButton from "../../components/custom-button/CustomButton";
import FormInput from "../../components/form-input/FormInput";
import "./sign-up.styles.scss";
import api from "../../services/api";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordConfirmation: "",
};
const SignUp = () => {
  const [
    { firstName, lastName, email, password, passwordConfirmation },
    setState,
  ] = useState(initialState);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState([]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => {
    setState({ ...initialState });
  };

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
    api.user.signUp(config).then((res) => {
      if (res.msg === "Successfully Created") {
        console.log(res);
        setSuccess(true);
      } else if (res.error) {
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
          {Object.entries(errors).map((err) => (
            <h4 className="error">{`Error: ${err[0]} ${err[1][0]}`}</h4>
          ))}
          <div>
            <div className="form-container">
              <h1 className="sign-up-title">Create Account</h1>
              <p>Already have an account? Click here to sign in.</p>
              <p>*Required</p>
              <div className="full-name">
                <div className="first-name">
                  <FormInput
                    asterisk
                    type="text"
                    label="First Name"
                    name="firstName"
                    required
                    value={firstName}
                    onChange={onChange}
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
                    onChange={onChange}
                  />
                </div>
              </div>
              <FormInput
                asterisk
                type="text"
                label="Email"
                required
                name="email"
                value={email}
                onChange={onChange}
              />
              <FormInput
                asterisk
                type="password"
                required
                label="Password"
                name="password"
                value={password}
                onChange={onChange}
              />
              <FormInput
                asterisk
                type="password"
                required
                label="Confirm Password"
                name="passwordConfirmation"
                value={passwordConfirmation}
                onChange={onChange}
              />
              <CustomButton type="submit">Create Account</CustomButton>
              <p>Forgot your password? Click here to reset.</p>
              <p>
                By signing up you accept the Terms of Service and Privacy
                Policy.
              </p>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default SignUp;
