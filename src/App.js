import logo from './logo.svg';
import './App.css';
import SimpsonsComponent from "./components/SimpsonsComponent";
import RickAndMortyComponent from "./components/RickAndMortyComponent";
function App() {
  return (
      <>
          <h2> Simpsons components</h2>
              <SimpsonsComponent person={5}/>
          <h2>Rick And Morty components</h2>
              <RickAndMortyComponent/>
      </>

  );
}

export default App;
