import { useState } from "react";
import "./App.css";
import DiceGame from "./Components/DiceGame";
import GamePlay from "./Components/GamePlay";

function App() {
  // const game = true
  const [gameSet, isGameSet] = useState(false)
  
  const toggle = () => {
    isGameSet(true)
    // isGameSet((prev) => !prev)
  }  
  return (
    <>
      {!gameSet?<DiceGame toggle={toggle} />:<GamePlay/>}
      
      
    </>
  )
  
}

export default App;
