import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { thunkLogout } from "../../redux/session";
import './HomePage.css';

function ProfileButton({ user }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const ulRef = useRef();

    const toggleMenu = (e) => {
        e.stopPropagation(); // Keep from bubbling up to document and triggering closeMenu
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = (e) => {
            if (ulRef.current && !ulRef.current.contains(e.target)) {
                setShowMenu(false);
            }
        };

        document.addEventListener("click", closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const closeMenu = () => setShowMenu(false);

    const logout = (e) => {
        e.preventDefault();
        dispatch(thunkLogout());
        closeMenu();
        navigate("/");
    };


    const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

    return (
        <>
            <button className='profile-menu' onClick={toggleMenu}>
                <i className="fa-regular fa-circle-user"></i>
            </button>
            <ul className={ulClassName} ref={ulRef}>
                    <div id="profile-login-drop-down">
                        <li>Hello, {user.first_name}</li>
                        <li>{user.email}</li>
                        <li>
                            <NavLink to='/songs/new'>New Song</NavLink>
                        </li>
                        <li>
                            <NavLink to='/songs/manage'>Manage Songs</NavLink>
                        </li>
                        <li className='logout-button-list-space'>
                            <button className='logout-button' onClick={logout}>Log Out</button>
                        </li>
                    </div>
            </ul>
        </>
    );
}

export default ProfileButton;
