import { useState } from "react";
import "./App.css";
import SimpleFrom from "./Compunents/SimpleFrom/SimpleFrom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mx-auto grid justify-center">
        <h1 className="text-5xl mb-5">From Master</h1>
        <SimpleFrom></SimpleFrom>
      </div>
    </>
  );
}

export default App;
