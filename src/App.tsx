import "./App.css";
import Details from "./components/Details";
import Posts from "./components/Posts";
function App() {
  const number = 10;
  return (
    <div className="App">
      <p>App: {number}</p>
      <Details number={number} />
      <Posts number={number}/>
    </div>
  );
}

export default App;
