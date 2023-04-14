import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Counter } from "./components/Counter";
import { AddNumber } from "./components/AddNumber";
import { InputText } from "./components/InputText";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <Counter />
      <InputText />
      <AddNumber />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
