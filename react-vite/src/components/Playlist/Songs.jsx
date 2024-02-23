import { useDispatch, useSelector } from "react-redux"
import { getSongsThunk } from "../../redux/song"
import { useEffect } from "react"
import './Playlist.css'
import { addSongToPlaylist, getUserPlaylistsThunk } from "../../redux/playlist"
// import { loadOneAlbumThunk} from "../../redux/album"
function Songs({playlist}) {
    const dispatch = useDispatch()
    const allSongs = useSelector(state => Object.values(state.songs))
    const allAlbums = useSelector(state => Object.values(state.newAlbum))

    // console.log("THIS IS THE ALBUMS >>>>>>>>>>>>>>", allAlbums)


    useEffect(() => {
        dispatch(getSongsThunk())
        // dispatch(loadAlbumsThunk())
    }, [dispatch])

    console.log('songs wahoo')

    const addToPlaylist = async (song) => {
        console.log("ADD SONG TO PLAYLIST")
        await dispatch(addSongToPlaylist(song, playlist.id));
        await dispatch(getUserPlaylistsThunk());
    }

    return (
        <div className="add-song-container">
            <h2>Let&apos;s find something for your playlist</h2>
            {allSongs.map(song => {
                const album = allAlbums.findIndex(al => al.id === song.id)
                console.log("THIS IS THE ALBUM ALBUM >>>>>>", album)
                return (
                <div key={song.id}>
                    <img src={song.image_url} alt={song.title} className="playlist-song-image" />
                    <li className="playlist-song-title">{song.title}</li>
                    <button className="add-playlist-button" onClick={() => addToPlaylist(song)}>Add to playlist</button>
                    {album >= 0 && (
                        <div>
                            {allAlbums[album].title}
                            HELLLLLLOOOOOOO
                        </div>
                    )}
                </div>
            )})}
        </div>
    )
}

export default Songs
