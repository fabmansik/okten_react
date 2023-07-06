import logo from './logo.svg';
import './App.css';

import {Posts} from "./Posts";
import {useState} from "react";
import {SpaceX} from "./SpaceX";
// import {Users} from "./Users";


function App() {
  const [showPosts, setShowPosts] = useState(false)
  const [showSpaceX, setShowSpaseX] = useState(false)
  // const [showUsers, setShowUsers] = useState(false)
  return (
    <div className="App">
      <header>
        {!showPosts &&<button onClick={()=>{setShowPosts(true)}}>Posts homework</button>}
        {showPosts && <button onClick={()=>{setShowPosts(false)}}>Close posts homework</button>}
        {!showSpaceX &&<button onClick={()=>{setShowSpaseX(true)}}>SpaceX homework</button>}
        {showSpaceX && <button onClick={()=>{setShowSpaseX(false)}}>Close SpaceX homework</button>}
        {/*{!showUsers &&<button onClick={()=>{setShowUsers(true)}}>Users homework</button>}*/}
        {/*{showUsers && <button onClick={()=>{setShowUsers(false)}}>Close Users homework</button>}*/}
      </header>

      {showPosts && <Posts/>}
      {showSpaceX && <SpaceX/>}
      {/*{showUsers &&<Users/>}*/}

    </div>
  );
}

export default App;
