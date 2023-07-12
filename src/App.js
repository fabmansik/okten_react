import './App.css';
import {createContext, useState} from "react";
import {Child1} from "./components/Child1/Child1";
import {Child2} from "./components/Child2/Child2";

export const Context = createContext(null)
function App() {
  const [data, setData] = useState([1,2,3])
  return (
      <Context.Provider value={{setData, data}}>
          <div className="App">
            <Child1/>
              <hr/>
            <Child2/>
          </div>
      </Context.Provider>
  );
}

export default App;
