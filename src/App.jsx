import { Route, Routes } from "react-router-dom";
import './App.css';
import LobbyScreen from "./Lobby/Lobby";
import RoomPage from "./Lobby/Room";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LobbyScreen/>}/>
        <Route path="/room/:roomId" element={<RoomPage/>}/>
      </Routes>
      <h1>Chat Application</h1>
    </div>
  );
};

export default App;