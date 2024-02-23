import { useState } from "react";
import { thunkLogin } from "../../redux/session";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, NavLink } from "react-router-dom";
import "./LoginForm.css";
import * as sessionActions from '../../redux/session';
import AmplifyLogo from "../../image/amplifylogo.jpeg";

function LoginFormPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  if (sessionUser) return <Navigate to="/" replace={true} />;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serverResponse = await dispatch(
      thunkLogin({
        email,
        password,
      })
    );

    if (serverResponse) {
      setErrors(serverResponse);
    } else {
      navigate("/");
    }
  };

  const demoUserLogin = async (e) => {
    e.preventDefault()

    return await dispatch(sessionActions.thunkLogin({ email: 'demo@aa.io', password: 'password' }))
      .then(navigate('/'))
  }

  return (
    <div className="page-background">
      <div id="amplify-login-page">
        <div className="navigation-bar">
          <NavLink to='/'>
            <img className="amplify-logo" src={AmplifyLogo}/>
          </NavLink>
        </div>
        <div className="auth-section">
          <div className="auth-container">
            <div id="auth-box">
              <h1 id="auth-header">Log in to Amplify</h1>
              <button className='demo-login' onClick={demoUserLogin}>Continue as Demo User</button>
              <hr className="horizontal-line"></hr>
              <form className="auth-form" onSubmit={handleSubmit}>
                <label className="auth-labels">
                  <p className="form-labels">Email</p>
                  <input
                    className="auth-inputs"
                    placeholder="Email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {errors.email && <p className='error-message'>{errors.email}</p>} 
                </label>
                <label className="auth-labels">
                  <p className="form-labels">Password</p>
                  <input
                    className="auth-inputs"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {errors.password && <p className='error-message'>{errors.password}</p>} 
                </label>
                <div className='login-action-button'>
                  <button id="submit-login" type="submit">Log In</button>
                </div>
              </form>
              <hr className="horizontal-line"></hr>
              <div className="register-link">
                <p>Don&apos;t have an account?</p>
                <NavLink to='/signup' className='amplify-signup-link'>Sign up for Amplify.</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginFormPage;
