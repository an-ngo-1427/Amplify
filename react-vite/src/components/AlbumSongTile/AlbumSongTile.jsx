import { useDispatch, useSelector } from "react-redux";
import { getCurrSong } from "../../redux/currSong";
import './AlbumSongTile.css';
import { useNavigate } from "react-router-dom";
import { removeSongFromAlbum } from "../../redux/album";

const AlbumSongTile = ({ song, album }) => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlePlaySong = (e) => {
        e.preventDefault();
        dispatch(getCurrSong(song));
    };

    const removeAlbumSong = async (e) => {
        e.stopPropagation();
        await dispatch(removeSongFromAlbum(song.id, album.id));
    };

    return (
        <div className="album-song-tile">
            <div onClick={() => navigate(`/songs/${song.id}`)} className="album-song-info">
                <span className="album-song-title">{song.title}</span>
                <span className="album-song-artist">{song.artist.first_name} {song.artist.last_name}</span>
            </div>
            <div className="song-actions">
                {sessionUser?.id === album?.user_id && (
                    <button onClick={removeAlbumSong} className="album-remove-button">Remove</button>
                )}
                <div onClick={handlePlaySong} className="album-play-button">Play</div>
            </div>
        </div>
    );
}

export default AlbumSongTile;
