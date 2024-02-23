import { useDispatch } from "react-redux";
import { getCurrSong } from "../../redux/currSong";
import './AlbumSongTile.css';

const AlbumSongTile = ({ song }) => {
    const dispatch = useDispatch();
    
    const handleClick = () => {
        dispatch(getCurrSong(song));
    };

    return (
        <div className="album-song-tile" onClick={handleClick}>
            <div className="album-song-info">
                <span className="album-song-title">{song.title}</span>
                <span className="album-song-artist">{song.artist.first_name} {song.artist.last_name}</span>
            </div>
            <div className="album-play-button">Play</div>
        </div>
    );
}

export default AlbumSongTile;
