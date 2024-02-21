
// action creator
const CREATE_PLAYLIST = '/songs/CREATE_PLAYLIST'
const GET_PLAYLISTS = '/songs/GET_PLAYLISTS'

export const getPlaylists = (Playlists)=>({
    type: GET_PLAYLISTS,
    Playlists
})

export const createPlaylist = (data) => (
    {
        type:CREATE_PLAYLIST,
        data
    }
)

// Thunk actions
export const createPlaylistThunk = (data) => async (dispatch) => {
    const response = await fetch('/api/playlists/new', {
        method: 'POST',
        headers: {'Content-Type': 'multipart/form-data'},
        body: JSON.stringify(data)
    })
    const newPlaylist = await response.json()
    if (response.ok) {
        dispatch(createPlaylist(newPlaylist))
        return data
    }
    else {
        const error = await response.json()
        return error
    }
}

export const getPlaylistsThunk = ()=> async (dispatch)=>{
    const response = await fetch('/api/playlists')
    const data = await response.json()
    if(response.ok){
        dispatch(getPlaylists(data.Playlists))
        return data
    }
    return data
}

const initialState={}

function playlistsReducer(state = initialState,action){
    switch (action.type) {
        case GET_PLAYLISTS: {
            const newObj = {}
            action.Playlists.forEach(playlist => {newObj[playlist.id] = playlist})
            return newObj
        }
        case CREATE_PLAYLIST: {
            const newObj = {}
            newObj[action.data] = action.data
            return newObj
        }
    }
    return state
}

export default playlistsReducer
