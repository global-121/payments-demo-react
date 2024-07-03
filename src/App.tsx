import React from "react";
import Header from "./components/Header";

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen font-body">
      <Header />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button className="btn btn-primary mt-4">DaisyUI example Button</button>
    </div>
  );
}

export default App;
