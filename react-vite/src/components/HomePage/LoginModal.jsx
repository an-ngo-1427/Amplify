import { NavLink } from 'react-router-dom'
import './LoginModal.css'
import { useModal } from '../../context/Modal'

function LoginModal() {
    const {closeModal} = useModal()
    return (
        <div className='login-modal-container'>
            <h2>Create a playlist</h2>
            <p>Log in to create and share playlists.</p>
            <div className='login-modal-btns'>
                <div onClick={closeModal} className='login-modal-not-now'>Not now</div>
                <NavLink to='/login' className='login-modal-login-btn'>Log in</NavLink>
            </div>
        </div>
    )
}

export default LoginModal
