
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';


function AudioPlayerComp({song}){
    console.log('this is the song',song)
    // const setHeader = ()=>{
    //     if(Object.values(song).length){
    //         console.log('entered')
    //         return `${song.title} - ${song.artist?.first_name} ${song.artist?.last_name}`
    //     }else{
    //         return ""
    //     }
    // }

    return(
        <div>
            {/* <h3>{song && song.title}</h3> */}
            <AudioPlayer
                header={Object.values(song).length? `${song.title} - ${song.artist?.first_name} ${song.artist?.last_name}`:'' }
                src={song.song_url}
                onPlay={e => console.log(e)}
            />
        </div>
    )
}

export default AudioPlayerComp
