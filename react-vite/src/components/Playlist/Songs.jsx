import { useDispatch, useSelector } from "react-redux"
import { getSongsThunk } from "../../redux/song"
import { useEffect } from "react"
import './Playlist.css'

function Songs() {
    const dispatch = useDispatch()
    const allSongs = useSelector(state => Object.values(state.songs))

    useEffect(() => {
        dispatch(getSongsThunk())
    }, [dispatch])

    const addToPlaylist = async e => {
        e.preventDefault()
    }

    return (
        <div className="add-song-container">
            <h2>Let&apos;s find something for your playlist</h2>
            {allSongs.map(song => (
                <div key={song.id}>
                    <li>{song?.title}</li>
                    <button onClick={addToPlaylist}>Add to playlist</button>
                </div>
            ))}
        </div>
    )
}

export default Songs
