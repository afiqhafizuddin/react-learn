import logo from "./logo.svg";
import "./App.css";
import Navbar from "./NavBar";
import Home from "./Home";

function App() {
  const title = "Welcome to the New Blog";
  const likes = 100;
  const link = "http://www.google.com";

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="content">
        <Home></Home>
        <h2>{title}</h2>
        <p>
          <strong>{likes}</strong>
        </p>

        <p>{"hello, ninjas"}</p>
        <p>{Math.random() * 100}</p>
        <a href={link}>Google</a>
      </div>
    </div>
  );
}

export default App;
