import './App.css';
import {useEffect, useState} from "react";


function App() {
  const [users, setUsers] = useState()
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {setUsers(users); console.log(users)})

  },[])
  return (
    <div className="App">

    </div>
  );
}

export default App;
