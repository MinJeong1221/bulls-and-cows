import { useEffect, useState } from "react";
import "./App.css";
import { generaterRandomNumber } from "./random";

function App() {
  // console.log(generaterRandomNumber());
  const [randomNumber, setRandomNumber] = useState(generaterRandomNumber);
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    console.log(randomNumber);
  }, [randomNumber]);

  const handleAnswerChanged = (e) => {
    console.log(e.target.value);
    setAnswer(e.target.value);
  };

  return (
    <div className="App">
      <h1>숫자 야구 게임</h1>
      <header className="header">{randomNumber}</header>
      <section>
        <input type="text" value={answer} onChange={handleAnswerChanged} />
        <button>맞춰보기</button>
      </section>
      <h2>기록</h2>
      <ol>
        <li>1234 (strike: 0, ball : 2)</li>
        <li>1234 (strike: 0, ball : 2)</li>
        <li>1234 (strike: 0, ball : 2)</li>
      </ol>
    </div>
  );
}

export default App;
