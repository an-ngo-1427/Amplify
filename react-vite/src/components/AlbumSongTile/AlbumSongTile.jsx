import { useDispatch, useSelector } from "react-redux";
import { getCurrSong } from "../../redux/currSong";
import './AlbumSongTile.css';
import { removeSongFromAlbum } from "../../redux/album";

const AlbumSongTile = ({ song, album }) => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(getCurrSong(song));
    };

    const removeAlbumSong = (e) => {
        e.preventDefault()
        dispatch(removeSongFromAlbum(song.id, album.id))
    }

    return (
        <>
            <div className="album-song-tile" onClick={handleClick}>
                <div className="album-song-info">
                    <span className="album-song-title">{song.title}</span>
                    <span className="album-song-artist">{song.artist.first_name} {song.artist.last_name}</span>
                </div>
                <div className="album-play-button">Play</div>
            </div>
            {sessionUser.id === album.user_id && (
                <button onClick={removeAlbumSong}>Remove</button>
            )}
        </>
    );
}

export default AlbumSongTile;
