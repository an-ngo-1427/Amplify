import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkCreateSong, thunkUpdateSong } from "../../redux/createSong";
import { useNavigate, NavLink } from "react-router-dom";
import { getUserAlbumsThunk } from "../../redux/album";
import AmplifyLogo from "../../image/amplifylogo.jpeg";

function SongForm({ song }) {
    // console.log('song -----',song)
    const [audio, setAudio] = useState()
    const [title, setTitle] = useState()
    const [album, setAlbum] = useState("")
    const [image_url, setImageUrl] = useState("")
    const [errorObj, setErrorObj] = useState({})
    const [formErr, setFormError] = useState(false)
    const user = useSelector(state=>state.session.user)
    const userAlbums = useSelector(state=>state.userAlbums.Albums)

    // console.log('user album',userAlbums)

    useEffect(()=>{
        if(!userAlbums){
            dispatch(getUserAlbumsThunk(user.id))
        }
        if (song) {
            setTitle(song.title)

            if(!song.album_id){
                setAlbum("")
            }else{
                setAlbum(song.album_id)
            }
            setImageUrl(song.image_url)
        }
    }, [userAlbums])

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

            if (song) {
                dispatch(thunkUpdateSong(formData, song.id))
                    .then(result => { navigate(`/songs/${result.id}`) })
            } else {
                dispatch(thunkCreateSong(formData))
                    .then(result => { navigate(`/songs/${result.id}`) })
            }
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
            <div className="amplify-navigation-bar">
                <NavLink to='/'>
                    <img className="amplify-logo" src={AmplifyLogo} />
                </NavLink>
            </div>
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
                        onChange={(e) => { setTitle(e.target.value) }}
                        value={title}
                    />
                    {formErr && <div style={{ 'color': 'red' }}>{errorObj.title}</div>}

                </div>
                <div>
                    <select
                        name="album"
                        value={album}
                        onChange={(e) => { setAlbum(e.target.value) }}
                    >
                        <option value ={""} >Select an album</option>
                        {userAlbums && userAlbums.map(album=><option key = {album.id} value = {album.id}>{album.title}</option>)}
                    </select>

                </div>
                <div>
                    <input
                        name='image_url'
                        onChange={(e) => { setImageUrl(e.target.value) }}
                        value={image_url}
                        placeholder="image_url"
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
                {song && <button type='submit'>Update song</button>}
                {!song && <button type='submit'>Create song</button>}
            </form>
            {song && <NavLink to={`/songs/${song.id}`}>Back to song</NavLink>}
        </>
    )
}

export default SongForm;
