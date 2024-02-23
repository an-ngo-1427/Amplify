import { useDispatch } from "react-redux";
import { getCurrSong } from "../../redux/currSong";
import './AlbumSongTile.css';
import { useNavigate } from "react-router-dom";

const AlbumSongTile = ({ song }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handlePlaySong = (e) => {
        e.preventDefault()
        dispatch(getCurrSong(song));
    };

    return (
        <div className="album-song-tile" >
            <div
                onClick={()=>navigate(`/songs/${song.id}`)}
                className="album-song-info">
                <span className="album-song-title">{song.title}</span>
                <span className="album-song-artist">{song.artist.first_name} {song.artist.last_name}</span>
            </div>
            <div onClick={(e)=>handlePlaySong(e)} className="album-play-button">Play</div>
        </div>
    );
}

export default AlbumSongTile;
