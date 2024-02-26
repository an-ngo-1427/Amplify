import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { updateAlbumThunk } from "../../redux/album"
import { useModal } from '../../context/Modal'

function EditAlbum({album}) {
    const dispatch = useDispatch()
    const { closeModal } = useModal()

    const [title, setTitle] = useState(album?.title)
    const [imageUrl, setImageurl] = useState(album?.image_url)
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
            album = {...album, title, imageUrl}

            dispatch(updateAlbumThunk(album))
            closeModal()
        }
    }

    return (
        <div className="album-form-container">
            <form onSubmit={handleSubmit} className="album-form">
                <div>
                    <input
                        placeholder="Album Title"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        type="text"
                        className="album-form-input"
                    />
                    {formErr && errObj.title && <div className="album-form-error">{errObj.title}</div>}
                </div>
                <div>
                    <input
                        placeholder="Album Image URL"
                        onChange={(e) => setImageurl(e.target.value)}
                        value={imageUrl}
                        name="image_url"
                        className="album-form-input"
                    />
                </div>
                <button type="submit" className="album-form-button">Save Changes</button>
            </form>
        </div>
    )
}

export default EditAlbum
