import { useSelector } from "react-redux";
import AudioPlayerComp from "../AudioPlayerComp/AudioPlayerComp";
import "./MusicPlayer.css";


function MusicPlayer() {
  const audioSong = useSelector(state=>state.audioSong)
  console.log('rendered')
  return(
    <AudioPlayerComp song={audioSong}/>
  )
}

export default MusicPlayer;
