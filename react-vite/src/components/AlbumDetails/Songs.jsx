import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSongsThunk } from "../../redux/song"
import { addSongToAlbum } from "../../redux/album"

function Songs({album}) {
    const dispatch = useDispatch()
    const allSongs = useSelector(state => Object.values(state.songs))

    useEffect(() => {
        dispatch(getSongsThunk())
    }, [dispatch])

    const addToAlbum = async (song) => {
        await dispatch(addSongToAlbum(song, album.id))
    }

    return (
        <div className="add-song-container">
            <h2>Add songs to your album</h2>
            {allSongs.map(song => (
                <div key={song.id}>
                    <li>{song.title}</li>
                    <button onClick={() => addToAlbum(song)}>Add to album</button>
                </div>
            ))}
        </div>
    )
}

export default Songs
