import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { createPlaylistThunk } from "../../redux/playlist"

function PlaylistForm() {

    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [validationErrors, setValidationErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        const errors = {}
        if(!name.length) errors.name = 'Playlist Name is required'
        setValidationErrors(errors)
    }, [name])

    const handleSubmit = async e => {
        e.preventDefault()
        setSubmitted(true)
        const playlist = {name, description}
        if(!Object.keys(validationErrors).length) {
            return dispatch(createPlaylistThunk(playlist))
        }
    }

    return (
        <>
            <div>PlaylistForm</div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="file" placeholder="playlist image"/>
                </label>
                <label>
                    {submitted && validationErrors.name && `${validationErrors.name}`}
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </label>
                <label>
                    <textarea
                        type="text"
                        placeholder="Add an optional description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </label>
                <button type="submit">Save</button>
            </form>
        </>
    )
}

export default PlaylistForm
