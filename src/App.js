import "./App.css";
import Header from "./components/Header";
import CardList from "./components/CardList";
import Form from "./components/Form";
import Graphic from "./components/Graphic";

function App() {
  return (
    <div className="App bg-gray-200">
      <div className="container">
        <Header />
        <CardList />
        <Form />
        <Graphic />
      </div>
    </div>
  );
}

export default App;
