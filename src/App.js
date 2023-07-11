import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import {UsersComponent} from "./Components/UsersComponent";

function App() {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {setUsers(users)})

  },[])
  return (
    <div className="App">
      <UsersComponent users={users}/>
    </div>
  );
}

export default App;
