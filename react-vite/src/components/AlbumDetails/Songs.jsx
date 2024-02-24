import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSongsThunk } from "../../redux/song"
import { addSongToAlbum } from "../../redux/album"
import './AddSongs.css'

function Songs({album}) {
    const dispatch = useDispatch()
    const allSongs = useSelector(state => Object.values(state.songs))
    const songsNoAlbum = allSongs.filter(song => song.album_id === 0 || song.album_id == null)

    useEffect(() => {
        dispatch(getSongsThunk())
    }, [dispatch])

    const addToAlbum = async (song) => {
        await dispatch(addSongToAlbum(song, album.id))
    }

    return (
        <div className="album-song-modal-container">
        <h2 className="album-song-modal-title">Add Songs to Your Album</h2>
        <ul className="album-song-list">
            {songsNoAlbum.map(song => (
                <li key={song.id} className="album-song-item">
                    <span className="album-song-title">{song.title}</span>
                    <button onClick={() => addToAlbum(song)} className="album-song-add-btn">Add to Album</button>
                </li>
            ))}
        </ul>
    </div>
    )
}

export default Songs
