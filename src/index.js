import React from "react";
import ReactDOM from "react-dom/client";
import dogs from "./dogs.json";
import dog1 from "./one.jpg";
import dog2 from "./two.jpg";
import dog3 from "./three.jpg";
import dog4 from "./four.jpg";
import dog5 from "./five.jpg";
import dog6 from "./six.jpg";
import dog7 from "./seven.jpeg";
import dog8 from "./eight.jpeg";
import "./index.css"; 

const dogImages = {
  dog1,
  dog2,
  dog3,
  dog4,
  dog5,
  dog6,
  dog7,
  dog8,
};

function Images(props) {
  return (
    <div className="container">
      <img src={dogImages[props.doggie]} alt="Dog" />
      <p>{props.expression}</p>
    </div>
  );
}

function App() {
  return (
    <div className="grid-container">
      {dogs.map((dog, index) => (
        <Images key={index} doggie={dog.doggie} expression={dog.expression} />
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
