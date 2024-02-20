import { useState } from "react";
import { useDispatch } from "react-redux";
import { createSongThunk } from "../../redux/createSong";

function SongForm() {
  const [audio, setAudio] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("audio", audio);
    // AWS uploads can be a bit slow—displaying
    // some sort of loading message is a good idea
    await dispatch(createSongThunk(formData));
    // history.push("/images");
  };

  return (
    <>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <input placeholder="Song title" />
        <select>
          <option value="">Choose an album</option>
        </select>
        <input
          type="file"
          placeholder="song file"
          accept=".mp3"
          onChange={(e) => {
            setAudio(e.target.files[0]);
          }}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default SongForm;