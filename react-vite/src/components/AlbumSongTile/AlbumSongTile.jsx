import { useDispatch } from "react-redux";
import { getCurrSong } from "../../redux/currSong";

const AlbumSongTile = ({song}) => {
    const dispatch = useDispatch();
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(getCurrSong(song))
        
    };
    return (
        <div>
            <div>
                <div>
                    {song.title}
                </div>
                <div>
                    {song.artist.first_name} {song.artist.last_name} 
                </div>
            </div>
            <button onClick={handleSubmit}>Play</button>
        </div>
    )
}

export default AlbumSongTile;