import "./App.css";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Chris Kavanagh</h1>
        <h2>Web Dev</h2>
        <h3>Roanoke, VA 24018</h3>
        <Home />
        <About />
      </header>
    </div>
  );
}

export default App;
