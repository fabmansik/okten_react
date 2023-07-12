import './App.css';
import {UserContainer} from "./Components/UserContainer/UserContainer";
import {useState} from "react";
import {Posts} from "./Components/Posts/Posts";

function App() {
  const [userId, setUserId] = useState(null)
  return (
    <div className="App">
      <UserContainer setUserId={setUserId}/>
      <hr/>
      {userId && <Posts userId={userId}/>}
    </div>
  );
}

export default App;
