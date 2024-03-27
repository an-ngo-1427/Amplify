
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import { useState } from 'react';

function AudioPlayerComp({songs}){

    const [currTrack,setTrackIndex] = useState(0)

    const handleEndOfTrack = ()=>{
        if(currTrack < songs.length - 1){
            setTrackIndex(currTrack => currTrack + 1)
        }else{
            setTrackIndex(0)
        }
    }

    const handleNext = ()=>{
        if(currTrack < songs.length - 1){
            setTrackIndex(currTrack => currTrack + 1)
        }else{
            setTrackIndex(0)
        }
    }
    return(
        <div>
            {/* <h3>{song && song.title}</h3> */}
            <AudioPlayer
                header={songs.length? `${songs[currTrack]?.title} - ${songs[currTrack]?.artist?.first_name} ${songs[currTrack]?.artist?.last_name}`:'' }
                src={songs[currTrack]?.song_url}
                onPlay={e => console.log(e)}
                onEnded={handleEndOfTrack}
                onClickNext={handleNext}
                showSkipControls
            />
        </div>
    )
}

export default AudioPlayerComp
