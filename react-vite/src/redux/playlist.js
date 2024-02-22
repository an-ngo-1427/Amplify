
// action creator
export const LOAD_PLAYLISTS = '/playlists/LOAD_PLAYLISTS'
export const RECEIVE_PLAYLIST = '/playlists/RECEIVE_PLAYLIST'
export const UPDATE_PLAYLIST = '/playlists/UPDATE_PLAYLIST'
export const REMOVE_PLAYLIST = '/playlists/REMOVE_PLAYLIST'
export const ADD_TO_PLAYLIST = '/playlists/ADD_TO_PLAYLIST'

export const loadPlaylists = (playlists) => ({
    type: LOAD_PLAYLISTS,
    playlists
})

export const receivePlaylist = (playlist) => ({
    type: RECEIVE_PLAYLIST,
    playlist
})

export const editPlaylist = (playlist) => ({
    type: UPDATE_PLAYLIST,
    playlist
})

export const removePlaylist = (playlistId) => ({
    type: REMOVE_PLAYLIST,
    playlistId
})

export const addSong = (songId) => ({
    type: ADD_TO_PLAYLIST,
    songId
})

// Thunk actions
export const getPlaylistsThunk = () => async (dispatch) => {
    const response = await fetch('/api/playlists')
    const data = await response.json()
    if(response.ok) {
        dispatch(loadPlaylists(data.playlists))
        return data
    }
    return data
}

export const getUserPlaylistsThunk = () => async (dispatch) => {
    const response = await fetch('/api/playlists/current')
    if(response.ok) {
        const currentPlaylists = await response.json()
        dispatch(loadPlaylists(currentPlaylists))
        return currentPlaylists
    }
}

export const createPlaylistThunk = (playlist) => async (dispatch) => {
    const response = await fetch('/api/playlists/new', {
        method: 'POST',
        body: playlist
    })

    if(response.ok) {
        const playlist = await response.json()
        dispatch(receivePlaylist(playlist))
        return playlist
    }
    else {
        const error = await response.json()
        return error
    }
}

export const editPlaylistThunk = (playlist) => async (dispatch) => {
    const response = await fetch(`/api/playlists/${playlist.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(playlist)
      })

      if(response.ok) {
        const playlist = await response.json()
        dispatch(editPlaylist(playlist))
        return playlist
      }
      else {
        const error = await response.json()
        return error
      }
}

export const deletePlaylistThunk = (playlistId) => async (dispatch) => {
    const response = await fetch(`/api/playlists/${playlistId}`, {
        method: 'DELETE'
      })

      if(response.ok) {
        dispatch(removePlaylist(playlistId));
        return { success: true }; 
      } else {
        return { success: false };
      }
}

export const addSongToPlaylist = (songId) => async (dispatch) => {
    dispatch(addSong(songId))
}

const initialState = {}

function playlistsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_PLAYLIST: {
            const playlistState = {}
            return playlistState
        }
        case LOAD_PLAYLISTS: {
            const playlistsState = {}
            action.playlists.playlists.forEach(playlist => {
                playlistsState[playlist.id] = playlist
            })
            return playlistsState
        }
        case RECEIVE_PLAYLIST:
            return { ...state, [action.playlist.id]: action.playlist }
        case UPDATE_PLAYLIST:
            return { ...state, [action.playlist.id]: action.playlist }
        case REMOVE_PLAYLIST: {
            const newState = { ...state }
            delete newState[action.playlistId]
            return newState
        }
        default:
            return state
    }
}

export default playlistsReducer
