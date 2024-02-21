import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { thunkLogout } from '../../redux/session';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Library from '../Library';
import Playlist from '../Playlist'; // Import Playlist component
import './HomePage.css';

function HomePage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const playlists = useSelector((state) => Object.values(state.playlists));
    const [selectedPlaylist, setSelectedPlaylist] = useState(null);

    const logout = async e => {
        e.preventDefault();
        await dispatch(thunkLogout());
        navigate('/');
    };

    const login = async e => {
        e.preventDefault();
        navigate('/login');
    };

    const signup = async e => {
        e.preventDefault();
        navigate('/signup');
    };

    const handlePlaylistClick = playlist => {
        setSelectedPlaylist(playlist);
    };

    return (
        <>
            <div className="main-homepage">
                <div className="left-sidebar">
                    <div className="left-sidebar-main">
                        <div className="left-sidebar-top">
                            <ul>
                                <li className="list-label">
                                    <NavLink className='link-home' to='/'>
                                        <span className="link-label"><span className="home-icon"><i className="fa-solid fa-house" /></span> Home</span>
                                    </NavLink>
                                </li>
                                <li className="list-label">
                                    <span className="link-label"><span className="search-icon"><i className="fa-solid fa-magnifying-glass" /> </span>Search</span>
                                </li>
                            </ul>
                        </div>
                        <div className="left-sidebar-bottom">
                            <Library playlists={playlists} onPlaylistClick={handlePlaylistClick} />
                        </div>
                    </div>
                </div>
                <div className="main-view">
                    <div className="main-header">
                        {!sessionUser && (
                            <div>
                                <button onClick={signup} className="signup-button">
                                    Sign up
                                </button>
                                <button onClick={login} className="login-button">
                                    Login in
                                </button>
                            </div>
                        )}
                    </div>
                    {selectedPlaylist ? (
                        <Playlist playlist={selectedPlaylist} />
                    ) : (
                        <div>
                            {/* Default content when no playlist is selected */}
                        </div>
                    )}
                </div>
                <div className="now-playing-bar"></div>
            </div>
            {sessionUser && (
                <button onClick={logout}>Log Out</button>
            )}
        </>
    );
}

export default HomePage;
