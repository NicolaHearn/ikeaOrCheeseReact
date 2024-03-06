import React, { useState } from "react";
import LetsPlay from "./components/LetsPlay";
import "./App.css";
import GreetUser from "./components/GreetUser";
import DisplayWord from "./components/DisplayWord";
import Result from "./components/Result";
import EndGame from "./components/EndGame";

function App() {
  const newPlayerHandler = (enteredName) => {
    setStartGame(<GreetUser name={enteredName} />);
    console.log(enteredName);
  };

  const [choice, setChoice] = useState("");
  const [startGame, setStartGame] = useState(
    <LetsPlay onSubmitName={newPlayerHandler} />
  );

  const cheeseHandler = () => {
    setChoice("CHEESE");
    console.log(choice);
  };

  const ikeaHandler = () => {
    setChoice("IKEA");
    console.log(choice);
  };

  return (
    <div className="App bg-white mx-auto p-12 w-6/12 flex flex-col justify-start items-center mt-32 h-3/5 rounded-xl shadow-lg min-w-96">
      <h1 className="font-bold flex justify-center ">IKEA OR CHEESE</h1>

      <div className="my-4">{startGame}</div>
      <DisplayWord on />
      <p>{choice}</p>
      <Result>{choice}</Result>
      <button onClick={ikeaHandler}>IKEA</button>
      <button onClick={cheeseHandler}>CHEESE</button>
      <EndGame />
    </div>
  );
}

export default App;
