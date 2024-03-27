import { useSelector } from "react-redux";
import AudioPlayerComp from "../AudioPlayerComp/AudioPlayerComp";
import "./MusicPlayer.css";


function MusicPlayer() {
  let audioSong = useSelector(state=>state.audioSong)
  let audioArr = Object.values(audioSong)

  return(
    <AudioPlayerComp songs={audioArr}/>
  )
}

export default MusicPlayer;
