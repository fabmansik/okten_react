import './App.css';
import {TestUseMemoComponent} from "./components/TestUseMemoComponent";
import {TestHooksComponent} from "./components/TestHooksComponent";
function App() {
  return (
    <div className="App">
      <TestUseMemoComponent data={0}/>
        <hr/>
        <TestHooksComponent/>
    </div>
  );
}

export default App;
