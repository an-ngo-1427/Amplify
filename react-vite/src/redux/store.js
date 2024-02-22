import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session";
import createSongReducer from "./createSong";
import getSongsReducer from "./song";
import playlistsReducer from "./playlist";
import createAlbumReducer from "./album";
import getSongReducer from "./songDetail";
import currSongReducer from "./currSong";

const rootReducer = combineReducers({
  session: sessionReducer,
  newSong: createSongReducer,
  songs: getSongsReducer,
  playlists: playlistsReducer,
  newAlbum: createAlbumReducer,
  currSong: getSongReducer,
  audioSong: currSongReducer
});

let enhancer;
if (import.meta.env.MODE === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = (await import("redux-logger")).default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
