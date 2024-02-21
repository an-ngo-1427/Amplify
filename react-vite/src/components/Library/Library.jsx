import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserPlaylistsThunk, createPlaylistThunk } from '../../redux/playlist'
import { Link } from "react-router-dom"

function Library() {
    const dispatch = useDispatch()
    const playlists = useSelector(state => Object.values(state.playlists))

    useEffect(() => {
        dispatch(getUserPlaylistsThunk())
    }, [dispatch])

    const newPlaylist = async e => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('image_url', '')
        formData.append('title', `My Playlist ${playlists.length + 1}`)
        formData.append('description', '')
        formData.append('submit', true)
        dispatch(createPlaylistThunk(formData))
    }

    return (
        <>
            <div>Library</div>
            <button onClick={newPlaylist}>New Playlist</button>
            <ul>
                {playlists.map(playlist => (
                    <li key={playlist.id}>
                        <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Library
