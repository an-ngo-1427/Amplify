export const CREATE_ALBUM='/albums/CREATE_ALBUM'
export const LOAD_ALBUMS = '/albums/LOAD_ALBUMS'
export const LOAD_ONE_ALBUM = '/albums/LOAD_ONE_ALBUM'
// const UPLOAD_ALBUM_IMAGE='/albums/UPLOAD_ALBUM_IMAGE'

// ACTION CREATOR

export const createAlbum = (data) => (
    {
        type: CREATE_ALBUM,
        data
    }
)

export const loadAlbums = (Albums) => (
    {
        type: LOAD_ALBUMS,
        Albums
    }
)
export const loadOneAlbum = (Album) => (
    {
        type: LOAD_ONE_ALBUM,
        Album
    }
)
    

// export const uploadAlbumImage = (img) => (
//     {
//         type: UPLOAD_ALBUM_IMAGE,
//         img
//     }
// )

// THUNK ACTIONS
export const thunkCreateAlbum = (data) => async (dispatch) => {
    const response = await fetch('/api/albums/new', {
        method: 'POST',
        body: (data)
    })
    const newAlbum = await response.json()
    if (response.ok) {
        dispatch(createAlbum(newAlbum))
        return newAlbum
    }
    return newAlbum
}

export const loadAlbumsThunk = () => async(dispatch) => {
    const response = await fetch('api/albums')

    const data = await response.json();
    if (response.ok){
        dispatch(loadAlbums(data))
        return data
    }
    return data
}

export const loadOneAlbumThunk = (albumId) => async(dispatch) => {
    const response = await fetch(`/api/albums/${albumId}`)
    const data = await response.json();
    if (response.ok){
        dispatch(loadOneAlbum(data))
        return data
    }
    return data
}



// export const thunkUploadImage = (img) => async (dispatch) => {
//     const response = await fetch ('/api/albums/')
// }

const initialState = {}
function createAlbumReducer(state = initialState, action) {
    switch(action.type) {
        case CREATE_ALBUM: {
            const newObj = {}
            newObj[action.data] = action.data
            return newObj
        }
        case LOAD_ALBUMS:{
            const newObj = {}
            action.Albums.forEach(album => {newObj[album.id] = album})
            return newObj
        }
        case LOAD_ONE_ALBUM: { 
            const newObj = { ...state };
            newObj[action.Album.id] = action.Album;
            return newObj;
        }
        default:
            return state
    }
}

export default createAlbumReducer
