import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { thunkCreateSong } from "../../redux/createSong";
import { useNavigate } from "react-router-dom";

function SongForm() {
    const [audio, setAudio] = useState(null)
    const [title, setTitle] = useState(null)
    const [album, setAlbum] = useState(null)
    const [image_url, setImageUrl] = useState(null)
    const [errorObj, setErrorObj] = useState({})
    const [formErr, setFormError] = useState(false)


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.values(errorObj).length) setFormError(true)
        else {
            const formData = new FormData();

            formData.append("audio", audio);
            formData.append("title", title)
            formData.append('album', album)
            formData.append('image_url', image_url)
            formData.append('submit', true)
            // formData.append('fileName',audio.name)
            // aws uploads can be a bit slow—displaying
            // some sort of loading message is a good idea


            dispatch(thunkCreateSong(formData))
                .then(result=>{navigate(`/songs/${result.id}`)})
        }

    }

    useEffect(() => {

        let errors = {}
        if (!audio) errors.audio = 'Audio file is required'
        if (!title) errors.title = 'Song title is required'

        setErrorObj(errors)
    }, [audio, title, formErr])
    return (
        <>
            <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
            >
                {/* <input placeholder="Song title"/> */}
                <div>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title of the song"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    {formErr && <div style={{ 'color': 'red' }}>{errorObj.title}</div>}

                </div>
                <div>
                    <select
                        name="album"
                        value=""
                        onChange={(e) => setAlbum(e.target.value)}
                    >
                        <option>Select an album</option>
                    </select>

                </div>
                <div>
                    <input
                        name='image_url'
                        onChange={(e) => setImageUrl(e.target.value)}
                    />

                </div>
                <div>
                    <input type='file' placeholder="song file"
                        name='audio'
                        accept=".mp3"
                        onChange={(e) => setAudio(e.target.files[0])}

                    />
                    {formErr && <div style={{ 'color': 'red' }}>{errorObj.audio}</div>}

                </div>
                <button type='submit'
                >Submit</button>
            </form>
        </>
    )
}

export default SongForm;
