import { useDispatch, useSelector } from "react-redux"
import { getSongsThunk } from "../../redux/song"
import { useEffect } from "react"
import './Playlist.css'

function Songs() {
    const dispatch = useDispatch()
    const allSongs = useSelector(state => state.songs)
    const allSongsArray = Object.values(allSongs)

    useEffect(() => {
        dispatch(getSongsThunk())
    }, [dispatch])

    console.log('allSongs', allSongs)
    console.log('allSongsArray', allSongsArray)

    return (
        <div className="add-song-container">
            <h2>Let's find something for your playlist</h2>
            {allSongsArray.map(song => (
                <li>{song?.title}</li>
            ))}
        </div>
    )
}

export default Songs
