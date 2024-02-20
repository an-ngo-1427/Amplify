import { useState } from "react";
import { useDispatch } from "react-redux";
import { createSongThunk } from "../../redux/createSong";

function SongForm(){
    const [audio,setAudio] = useState(null)
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        console.log(audio)
        formData.append("audio", audio);
        // formData.append('fileName',audio.name)
        // aws uploads can be a bit slow—displaying
        // some sort of loading message is a good idea
        for (var key of formData.entries()) {
			console.log(key)
		}

        await dispatch(createSongThunk(formData))
        // history.push("/images");
    }
    return(
        <>
            <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
            >
                <input placeholder="Song title"/>


                <input type='file' placeholder="song file"
                    name='file'
                    accept=".mp3"
                    onChange={(e)=>{setAudio(e.target.files[0]);console.log(e.target.files[0])}}

                ></input>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default SongForm
