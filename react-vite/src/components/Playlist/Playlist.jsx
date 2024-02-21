import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import OpenModalButton from "../OpenModalButton";
import EditPlaylist from "../EditPlaylist/EditPlaylist";
import { deletePlaylistThunk } from "../../redux/playlist";
import { useNavigate } from "react-router-dom";

function Playlist({ playlist }) {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const deletePlaylist = async e => {
        e.preventDefault();
        const result = await dispatch(deletePlaylistThunk(playlist.id));
        if (result.success) {
            closeModal(); 
            navigate('/');
        }
    };

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
