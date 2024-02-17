import { useState } from "react";
import "./App.css";
import Input from "./components/Inputs"; // Ensure this path matches your file structure
import "./style.css"

function App() {
  const [user, setUser] = useState({ email: "", password: "", confirmPassword: "" });
  const [validation, setValidation] = useState({ emailValid: null, passwordValid: null, confirmPasswordValid: null });

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePassword = (password) => password.length >= 8;
  const validateConfirmPassword = (confirmPassword, password) => confirmPassword === password;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      setValidation((prev) => ({ ...prev, emailValid: validateEmail(value) }));
    } else if (name === "password") {
      setValidation((prev) => ({ ...prev, passwordValid: validatePassword(value), confirmPasswordValid: validateConfirmPassword(user.confirmPassword, value) }));
    } else if (name === "confirmPassword") {
      setValidation((prev) => ({ ...prev, confirmPasswordValid: validateConfirmPassword(value, user.password) }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { emailValid, passwordValid, confirmPasswordValid } = validation;
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert("Form submitted successfully");
      setUser({ email: "", password: "", confirmPassword: "" });
      setValidation({ emailValid: null, passwordValid: null, confirmPasswordValid: null });
    } else {
      alert("Can’t submit the form");
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
        <label>Email : </label>
        <Input inputName="email" inputType="email" id="email" value={user.email} onChange={handleChange} isValid={validation.emailValid} />
        </div>
        <div>
        <label>Password : </label>
        <Input inputName="password" inputType="password" id="password" value={user.password} onChange={handleChange} isValid={validation.passwordValid} />
        </div>
        <div>
        <label>Confirm Password : </label>
        <Input inputName="confirmPassword" inputType="password" id="confirmPassword" value={user.confirmPassword} onChange={handleChange} isValid={validation.confirmPasswordValid} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
