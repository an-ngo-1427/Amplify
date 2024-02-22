import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Library from '../Library';
import Playlist from '../Playlist';
import './HomePage.css';
import { getUserPlaylistsThunk } from '../../redux/playlist';
import ProfileButton from './ProfileButton';

function HomePage() {
    const navigate = useNavigate();
    const sessionUser = useSelector((state) => state.session.user);
    const playlists = useSelector((state) => Object.values(state.playlists));
    const [selectedPlaylist, setSelectedPlaylist] = useState(null);

    useEffect(() => {
        dispatch(getUserPlaylistsThunk())
    }, [dispatch])

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

    const handlePlaylistDelete = () => {
        setSelectedPlaylist(null);
    };

    const newPlaylist = async (e) => {
        e.preventDefault();
        window.alert('Log in to create and share playlists.')
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
                            {sessionUser ? (
                                <Library playlists={playlists} onPlaylistClick={handlePlaylistClick} />
                            ) : (
                                <>
                                    <div>Your Library</div>
                                    <button onClick={newPlaylist}>New Playlist</button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="main-view">
                    <div className="main-header">
                        {!sessionUser ? (
                            <div>
                                <button onClick={signup} className="signup-button">
                                    Sign up
                                </button>
                                <button onClick={login} className="login-button">
                                    Login in
                                </button>
                            </div>
                        ) : (
                            <ProfileButton user={sessionUser} />
                        )}
                    </div>
                    {selectedPlaylist ? (
                        <Playlist playlist={selectedPlaylist} onDelete={handlePlaylistDelete} />
                    ) : (
                        <div>
                            {/* Default content when no playlist is selected */}
                            <div>Home Page</div>
                        </div>
                    )}
                </div>
                <div className="now-playing-bar"></div>
            </div>
        </>
    );
}

export default HomePage;
