import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';


function AudioPlayerComp({song}){
    return(
        <div>
            <h3>{song.title}</h3>
            <AudioPlayer
                header={"song header"}
                src={song.song_url}
                onPlay={e => console.log(e)}
            />
        </div>
    )
}

export default AudioPlayerComp
