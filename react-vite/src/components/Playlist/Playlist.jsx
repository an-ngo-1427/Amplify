import React from "react";
import { useSelector } from "react-redux";
import OpenModalButton from "../OpenModalButton";
import EditPlaylist from "../EditPlaylist/EditPlaylist";

function Playlist({ playlist }) {
    const sessionUser = useSelector(state => state.session.user);

    return (
        <div>
            {playlist && (
                <>
                    <h2>{playlist.title}</h2>
                    <h3>{sessionUser.username}</h3>
                    <OpenModalButton
                        buttonText='...'
                        modalComponent={<EditPlaylist />}
                    />
                </>
            )}
        </div>
    );
}

export default Playlist;
