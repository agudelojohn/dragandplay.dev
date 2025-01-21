import "./App.css";
import VerticalList from "./components/verticalList";

function App() {
  return (
    <div
      className="App"
      style={{ height: "100vh" }}
    >
      <header className="App-header">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </header>
      <VerticalList />
    </div>
  );
}

export default App;
