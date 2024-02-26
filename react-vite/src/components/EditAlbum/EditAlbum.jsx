import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { loadOneAlbumThunk, updateAlbumThunk } from "../../redux/album"
import { useModal } from '../../context/Modal'
import './EditAlbum.css'

function EditAlbum({album}) {
    const dispatch = useDispatch()
    const { closeModal } = useModal()

    const [title, setTitle] = useState(album?.title)
    const [errObj, setErrobj] = useState({})
    const [formErr, setFormErr] = useState(false)

    useEffect(() => {
        const obj = {}
        if (!title) obj.title = 'Title is required'

        setErrobj(obj)
    }, [title])

    const handleSubmit = async e => {
        e.preventDefault()
        if (Object.keys(errObj).length) setFormErr(true)
        else {
            album = {...album, title}

            dispatch(updateAlbumThunk(album))
            .then(() => dispatch(loadOneAlbumThunk(album.id)))
            .then(() => closeModal())
        }
    }

    return (
        <div className="edit-album-form-container">
            <form onSubmit={handleSubmit} className="edit-album-form">
                <div>
                    <label>Album Title</label>
                    <input
                        placeholder="Album Title"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        type="text"
                        className="edit-album-form-input"
                    />
                    {formErr && errObj.title && <div className="edit-album-form-error">{errObj.title}</div>}
                </div>
                <button type="submit" className="edit-album-form-button">Save Changes</button>
            </form>
        </div>
    )
}

export default EditAlbum
