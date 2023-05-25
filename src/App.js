import React,{useState} from "react";
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import Welcome from "./components/Welcome";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { onMessageListener } from "./firebase";
import Notifications from "./components/Notifications/Notification";
import ReactNotificationComponent from "./components/Notifications/ReactNotification";
import "./App.css";

function App() {
  const [user] = useAuthState(auth);

  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });
  onMessageListener()
    .then((payload) => {
      setShow(true);
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
      });
      console.log(payload);
    })
    .catch((err) => console.log("failed: ", err));

  return (
    <div className="App">
      <NavBar />
      {!user ? (
        <Welcome />
      ) : (
        <>
        { show ? (
          <ReactNotificationComponent
          title={notification.title}
          body={notification.body}
          />
        ):(
          <></>
        )}
        <Notifications/>
          <ChatBox />
        </>
      )}
    </div>
  );
}

export default App;
