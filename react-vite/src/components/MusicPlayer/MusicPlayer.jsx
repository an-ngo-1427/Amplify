// import { NavLink } from "react-router-dom";
// import ProfileButton from "./ProfileButton";
import { useSelector } from "react-redux";
import AudioPlayerComp from "../AudioPlayerComp/AudioPlayerComp";
import "./MusicPlayer.css";


function Navigation() {
  const audioSong = useSelector(state=>state.audioSong)
  console.log('rendered')
  return(
    <AudioPlayerComp song={audioSong}/>
  )
}

export default Navigation;
