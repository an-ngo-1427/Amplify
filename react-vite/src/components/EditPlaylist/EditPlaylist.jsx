import { useDispatch } from 'react-redux'
import './EditPlaylist.css'
import { useEffect, useState } from 'react'
import { editPlaylistThunk } from '../../redux/playlist'
import { useModal } from '../../context/Modal'

function EditPlaylist({ playlist }) {
    const dispatch = useDispatch()
    const { closeModal } = useModal()
    const [title, setTitle] = useState(playlist?.title)
    const [description, setDescription] = useState(playlist?.description)
    const [errors, setErrors] = useState({})

    useEffect(() => {
        const err = {}
        if(!title) err.title = 'Playlist name is required'
        setErrors(err)
    }, [title])

    const handleSubmit = async e => {
        e.preventDefault()
        if(!Object.keys(errors).length) {
            playlist.title = title
            playlist.description = description
            dispatch(editPlaylistThunk(playlist))
            closeModal()
        }
    }

    return (
        <div className="edit-playlist-container">
            <h2 className='edit-playlist-header'>Edit details</h2>
            <div className='edit-playlist-errors'>{errors.title && `${errors.title}`}</div>
            <form onSubmit={handleSubmit}>
                <fieldset className="spotify-fieldset">
                    <legend className="spotify-legend">Name</legend>
                    <input className="spotify-input" placeholder="Add a name" value={title} onChange={e => setTitle(e.target.value)} />
                </fieldset>
                <fieldset className="spotify-fieldset">
                    <legend className="spotify-legend">Description</legend>
                    <textarea className="spotify-textarea" placeholder="Add an optional description" value={description} onChange={e => setDescription(e.target.value)} />
                </fieldset>
                <button type='submit' className='spotify-save-btn'>Save</button>
            </form>
            <p className="spotify-edit-disclaimer">By proceeding, you are agreeing to give Amplify access to the image you chose to upload.</p>
            <p className="spotify-edit-disclaimer">Please make sure you have the right to upload the image.</p>
        </div>
    );
}

export default EditPlaylist
