import React from "react";
import ReactDOM from "react-dom";
import ItemList from "./pages/ItemList";
import "./assets/styles/App.css";
import "./assets/styles/bootstrap.min.css";
import "./assets/styles/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <ItemList />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
