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

    return (
        <div className="add-song-container">
            <h2>Let's find something for your playlist</h2>
            {allSongs.map(song => (
                <li>{song?.title}</li>
            ))}
        </div>
    )
}

export default Songs
