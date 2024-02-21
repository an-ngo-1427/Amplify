import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import OpenModalButton from "../OpenModalButton";
import EditPlaylist from "../EditPlaylist/EditPlaylist";
import { deletePlaylistThunk } from "../../redux/playlist";

function Playlist({ playlist, onDelete }) {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()

    const deletePlaylist = async e => {
        e.preventDefault()
        dispatch(deletePlaylistThunk(playlist.id))
        onDelete();
    }

    return (
        <div>
            {playlist && (
                <>
                    <h2>{playlist.title}</h2>
                    <h4>{playlist.description}</h4>
                    <h3>{sessionUser.username}</h3>
                    <OpenModalButton
                        buttonText="..."
                        modalComponent={
                            <EditPlaylist 
                                playlist={playlist} 
                                isOpen={isModalOpen} 
                                onRequestClose={closeModal} 
                            />
                        }
                        onButtonClick={openModal} // Assuming OpenModalButton accepts an onButtonClick prop to open the modal
                    />
                    <button onClick={deletePlaylist}>Delete Playlist</button>
                </>
            )}
        </div>
    );
}

export default Playlist;
