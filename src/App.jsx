import Todo from "./components/Todo";
import Header from "./components/Header";
import './App.css';

function App() {
  const style = {width:"500px",position: "fixed"}
  return (
    <div className="App">
  
      <Header/>
      <Todo />
  
    </div>
  );
}

export default App;
