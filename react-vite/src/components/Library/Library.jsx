import { useDispatch } from "react-redux";
import { createPlaylistThunk } from '../../redux/playlist';
import { useNavigate } from "react-router-dom";

function Library({ playlists, onPlaylistClick }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const newPlaylist = async (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('image_url', '')
        formData.append('title', `My Playlist ${playlists.length + 1}`)
        formData.append('description', '')
        formData.append('submit', true)
        dispatch(createPlaylistThunk(formData))
    };

    const newSong = async (e)=>{
        e.preventDefault();
        navigate('/songs/new')
    }

    return (
        <>
            <div>Your Library</div>
            <button onClick={newPlaylist}>New Playlist</button>
            <ul>
                {playlists.map((playlist) => (
                    <li key={playlist.id}>
                        <button onClick={() => onPlaylistClick(playlist)}>
                            {playlist.title}
                        </button>
                    </li>
                ))}
            </ul>
            <button onClick={newSong}>New Song</button>
        </>
    );
}

export default Library;
