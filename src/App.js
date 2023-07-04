import logo from './logo.svg';
import './App.css';
import SimpsonsComponent from "./components/SimpsonsComponent";
import RickAndMortyComponent from "./components/RickAndMortyComponent";
function App() {
  return (
      <>
          <h2> Simpsons components</h2>
          <div className={'SimpsonsComponents'}>
              <SimpsonsComponent person={1}/>
              <SimpsonsComponent person={2}/>
              <SimpsonsComponent person={3}/>
              <SimpsonsComponent person={4}/>
              <SimpsonsComponent person={5}/>
          </div>
          <h2>Rick And Morty components</h2>
          <div className={'RickAndMortyComponents'}>
              <RickAndMortyComponent person={1}/>
              <RickAndMortyComponent person={2}/>
              <RickAndMortyComponent person={3}/>
              <RickAndMortyComponent person={4}/>
              <RickAndMortyComponent person={5}/>
              <RickAndMortyComponent person={6}/>
          </div>

        </>

  );
}

export default App;
