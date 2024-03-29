import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ModalProvider} from "../context/Modal";
import { Modal } from "../context/Modal";
import { thunkAuthenticate } from "../redux/session";
import MusicPlayer from "../components/MusicPlayer/MusicPlayer";

export default function Layout() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(thunkAuthenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <ModalProvider>
        {isLoaded && <Outlet />}
        <Modal />
      </ModalProvider>
      <MusicPlayer />
    </>
  );
}
