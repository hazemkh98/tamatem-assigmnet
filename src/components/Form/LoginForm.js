import { useState } from "react";
import "./LoginForm.css"; // Import your CSS file for styling
import WelcomPage from "../../Pages/WelcomPage";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Validate email
    if (!email) {
      setEmailError("Email cannot be empty");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }

    // Validate password
    if (!password) {
      setPasswordError("Password cannot be empty");
    } else {
      setPasswordError("");
    }

    if (email && password) {
      setLoggedIn(true);
    }
  };

  return (
    <div className="login-form-container">
      {loggedIn ? (
        <WelcomPage email={email}/>
      ) : (
        <form onSubmit={handleSubmit} className="login-form">
          {email ? (
            <label className={`label-form  ${email ? "active" : ""}`}>
              Email
            </label>
          ) : (
            ""
          )}

          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={emailError ? "error" : ""}
          />
          {emailError && <span className="error-message">{emailError}</span>}

          {password ? (
            <label className={`label-form  ${password ? "active" : ""}`}>
              Password
            </label>
          ) : (
            ""
          )}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={passwordError ? "error" : ""}
          />
          {passwordError && (
            <span className="error-message">{passwordError}</span>
          )}

          <div className="button-container">
            <button type="submit">Login</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
