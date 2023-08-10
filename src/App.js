import './App.css';
import {RickAndMortyComponent} from "./components/RickAndMortyComponent";
import {UsersComponent} from "./components/UsersComponent";

function App() {
  return (
    <div className="App">
      <RickAndMortyComponent/>
        <hr/>
        <UsersComponent/>
    </div>
  );
}

export default App;
