import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { thunkLogout } from "../../redux/session";
import './HomePage.css';

function ProfileButton() {
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

    const newSong = (e) => {
        e.preventDefault();
        closeMenu();
        navigate("/songs/new");
    };

    const manageAlbums = (e) => {
        e.preventDefault();
        closeMenu();
        navigate('/albums/manage')
    }

    const manageSongs = (e) => {
        e.preventDefault();
        closeMenu();
        navigate('/songs/manage')
    }

    const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

    return (
        <>
            <button className='profile-menu' onClick={toggleMenu}>
                <i className="fa-regular fa-circle-user"></i>
            </button>
            <ul className={ulClassName} ref={ulRef}>
                <div id="profile-login-drop-down">
                    <li className="new-song-label" onClick={newSong}>
                        <span className="dropdown-label-names">New Song</span>
                    </li>
                    <li className="manage-albums-label" onClick={manageAlbums}>
                        <span className="dropdown-label-names">Manage Albums</span>
                    </li>
                    <li className="manage-songs-label" onClick={manageSongs}>
                        <span className="dropdown-label-names">Manage Songs</span>
                    </li>
                    <li className='logout-label' onClick={logout}>
                        <span className="dropdown-label-names">Logout</span>
                    </li>
                </div>
            </ul>
        </>
    );
}

export default ProfileButton;
