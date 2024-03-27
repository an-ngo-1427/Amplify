import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Library from '../Library';
import Playlist from '../Playlist';
import './HomePage.css';
import { getUserPlaylistsThunk } from '../../redux/playlist';
import ProfileButton from './ProfileButton';
import AllAlbums from '../AllAlbums/AllAlbums';
// import MusicPlayer from '../MusicPlayer/MusicPlayer';
import OpenModalButton from '../OpenModalButton';
import LoginModal from './LoginModal';

function HomePage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const playlists = useSelector((state) => Object.values(state.playlists));
    const [selectedPlaylist, setSelectedPlaylist] = useState(null);

    useEffect(() => {
        dispatch(getUserPlaylistsThunk())
    }, [Library])

    const login = async e => {
        e.preventDefault();
        navigate('/login');
    };

    const signup = async e => {
        e.preventDefault();
        navigate('/signup');
    };

    const handlePlaylistClick = playlist => {
        if (playlist === null) {
            setSelectedPlaylist(null);
        } else {
            setSelectedPlaylist(playlist);
        }
    };

    const handlePlaylistDelete = () => {
        setSelectedPlaylist(null);
    };

    const newPlaylist = async (e) => {
        e.preventDefault();
        // window.alert('Log in or Sign up to create and share playlists.')


    };

    const handleSearch  = (e)=>{
        e.preventDefault();
        window.alert('feature comming soon')
    }
    return (
        <>
            <div className="main-homepage">
                <div className="left-sidebar">
                    <div className="left-sidebar-main">
                        <div className="left-sidebar-top">
                            <ul>
                                <li className="list-label">
                                    <NavLink className='link-home' to='/' onClick={() => handlePlaylistClick(null)}>
                                        <span className="link-label"><span className="home-icon"><i className="fa-solid fa-house" /></span> Home</span>
                                    </NavLink>
                                </li>
                                <li className="list-label">
                                    <div className = 'search' onClick={handleSearch}>
                                        <span className="link-label"><span className="search-icon"><i className="fa-solid fa-magnifying-glass" /> </span>Search</span>

                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="left-sidebar-bottom">
                            {sessionUser ? (
                                <Library playlists={playlists} onPlaylistClick={handlePlaylistClick} />
                            ) : (
                                <div className='library-container'>
                                    <div className='library-labels'>
                                        <div className="library-icon-text-container"><span className="library-icon"><i className="fa-solid fa-folder" /></span><span>Your Library</span></div>
                                        <OpenModalButton onClick={newPlaylist} className="library-new-icon" modalComponent={<LoginModal />} buttonText={<i className='fa-solid fa-plus'></i>}></OpenModalButton>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="main-view">
                    <div className="main-header">
                        {!sessionUser ? (
                            <div className='main-header-buttons'>
                                <button onClick={signup} className="signup-button">
                                    Sign up
                                </button>
                                <button onClick={login} className="login-button">
                                    Log in
                                </button>
                            </div>
                        ) : (
                            <ProfileButton user={sessionUser} />
                        )}
                    </div>
                    {selectedPlaylist && sessionUser ? (
                        <div className='main-page-details'>
                            <div className='playlist-details'>
                                <Playlist playlist={selectedPlaylist} onDelete={handlePlaylistDelete} />
                            </div>
                        </div>
                    ) : (
                        <div className='main-page-details'>
                            <div className='album-details'>
                                <AllAlbums />
                            </div>
                        </div>
                    )}
                </div>
                {/* <div className="now-playing-bar">
                    <MusicPlayer />
                </div> */}
            </div>
        </>
    );
}

export default HomePage;
