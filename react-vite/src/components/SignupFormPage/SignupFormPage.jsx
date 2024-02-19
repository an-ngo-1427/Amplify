import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, NavLink } from "react-router-dom";
import { thunkSignup } from "../../redux/session";
import "./SignupForm.css";

function SignupFormPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  if (sessionUser) return <Navigate to="/" replace={true} />;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setErrors({
        confirmPassword: "Confirm Password field must be the same as the Password field.",
      });
    }

    if (String(password).length < 6) {
      return setErrors({
        password: "Password must be at least 6 characters.",
      });
    }

    const serverResponse = await dispatch(
      thunkSignup({
        email,
        firstName,
        lastName,
        username,
        password,
      })
    );

    if (serverResponse) {
      setErrors(serverResponse);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="page-background">
    <div id="amplify-signup-wrapper">
      <div className="amplify-navigation-bar">
        <NavLink to="/" className="amplify-home-link">
          <h3>Amplify</h3>
        </NavLink>
      </div>
      <div className="amplify-signup-container">
        <div id="amplify-signup-box">
          <h1 id="amplify-signup-header">Sign Up</h1>
          {errors.server && <p className="amplify-error-message">{errors.server}</p>}
          <form className="amplify-signup-form" onSubmit={handleSubmit}>
            {errors.email && <p className="amplify-error-message">{errors.email}</p>}
            <label className="amplify-signup-labels">
              Email Address
              <input
                className="amplify-signup-inputs"
                placeholder="Email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </label>
            <label className="amplify-signup-labels">
              First Name
              <input
                className="amplify-signup-inputs"
                placeholder="First Name"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                />
            </label>
            <label className="amplify-signup-labels">
              Last Name
              <input
                className="amplify-signup-inputs"
                placeholder="Last Name"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                />
            </label>
            <label className="amplify-signup-labels">
              Username
              <input
                className="amplify-signup-inputs"
                placeholder="Username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                />
            </label>
            {errors.username && <p className="amplify-error-message">{errors.username}</p>}
            <label className="amplify-signup-labels">
              Password
              <input
                className="amplify-signup-inputs"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </label>
            {errors.password && <p className="amplify-error-message">{errors.password}</p>}
            <label className="amplify-signup-labels">
              Confirm Password
              <input
                className="amplify-signup-inputs"
                placeholder="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                />
            </label>
            {errors.confirmPassword && <p className="amplify-error-message">{errors.confirmPassword}</p>}
            <div className="amplify-signup-action-button">
              <button id="amplify-signup-submit" type="submit">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
      <div className="amplify-login-link-container">
        <p>Already have an account?</p>
        <NavLink to="/login" className="amplify-login-link">Log in here.</NavLink>
      </div>
    </div>
  </div>
  );
}

export default SignupFormPage;