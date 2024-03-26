import { useDispatch } from "react-redux";
import { createPlaylistThunk } from '../../redux/playlist';
import playlistIcon from '../../image/playlist.png';
import './Library.css';

function Library({ playlists, onPlaylistClick }) {
    const dispatch = useDispatch();
    const newPlaylist = async (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('image_url', '')
        formData.append('title', `My Playlist ${playlists.length + 1}`)
        formData.append('description', '')
        formData.append('submit', true)
        dispatch(createPlaylistThunk(formData))
    };

    return (
        <div className="library-container">
            <div className="library-labels">
                <div className="library-icon-text-container"><span className="library-icon"><i className="fa-solid fa-folder" /></span><span>Your Library</span></div>
                <button onClick={newPlaylist} className="library-new-icon"><i className="fa-solid fa-plus"></i></button>
            </div>
            <ul className='playlist-holder'>
                {playlists.map((playlist) => (
                    <li className='playlist-tile' key={playlist.id} onClick={() => onPlaylistClick(playlist)}>
                        <img className='playlist-image' src={playlistIcon}></img>
                        <button className='playlist-name'>
                            {playlist.title}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Library;
