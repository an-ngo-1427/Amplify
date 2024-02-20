import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, NavLink } from "react-router-dom";
import { thunkSignup } from "../../redux/session";
import "./SignupForm.css";
import AmplifyLogo from "../../../public/amplifylogo.jpeg";

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
    let newErrors = {};

    if (password !== confirmPassword) {
      return setErrors({
        confirmPassword: "Confirm Password field must be the same as the Password field.",
      });
    }

    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (firstName.length > 20) {
      newErrors.firstName = "First Name must be less than 21 characters.";
    }
    if (lastName.length > 20) {
      newErrors.lastName = "Last Name must be less than 21 characters.";
    }

    if (username.length > 40) {
      newErrors.username = "Username must be less than 41 characters.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const serverResponse = await dispatch(thunkSignup({
        email,
        firstName,
        lastName,
        username,
        password,
      }));

      if (serverResponse) {
        setErrors(serverResponse);
      } else {
        navigate("/");
      }
    }
  };

  return (
    <div className="page-background">
      <div id="amplify-signup-wrapper">
        <div className="amplify-navigation-bar">
          <NavLink to='/'>
            <img className="amplify-logo" src={AmplifyLogo} />
          </NavLink>
        </div>
        <div className="signup-section">
          <div className="amplify-signup-container">
            <div id="amplify-signup-box">
              <h1 id="amplify-signup-header">Sign Up</h1>
              {errors.server && <p className="amplify-error-message">{errors.server}</p>}
              <form className="amplify-signup-form" onSubmit={handleSubmit}>
                {errors.email && <p className="amplify-error-message">{errors.email}</p>}
                <label className="amplify-signup-labels">
                  <p className="signup-form-labels">Email Address</p>
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
                  <p className="signup-form-labels">First Name</p>
                  <input
                    className="amplify-signup-inputs"
                    placeholder="First Name"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </label>
                {errors.firstName && <p className="amplify-error-message">{errors.firstName}</p>} 
                <label className="amplify-signup-labels">
                  <p className="signup-form-labels">Last Name</p>
                  <input
                    className="amplify-signup-inputs"
                    placeholder="Last Name"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </label>
                {errors.lastName && <p className="amplify-error-message">{errors.lastName}</p>} 
                <label className="amplify-signup-labels">
                  <p className="signup-form-labels">Username</p>
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
                  <p className="signup-form-labels">Password</p>
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
                  <p className="signup-form-labels">Confirm Password</p>
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
              <hr className="horizontal-line"></hr>
              <div className="amplify-login-link-container">
                <p>Already have an account?</p>
                <NavLink to="/login" className="amplify-login-link">Log in here.</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupFormPage;