import { useDispatch } from "react-redux";
import { createPlaylistThunk } from '../../redux/playlist';

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
        <>
            <div>Library</div>
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
        </>
    );
}

export default Library;
