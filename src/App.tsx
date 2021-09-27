import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form from "./component/Form/Form";

function App() {
  return (
    <div className="App">
      <h1 className="text-center my-5">Todo List</h1>
      <Form />
    </div>
  );
}

export default App;
