import "./App.css";
import { generaterRandomNumber } from "./random";

function App() {
  console.log(generaterRandomNumber());
  return (
    <div className="App">
      <h1>숫자 야구 게임</h1>
      <header className="header">_ _ _ _</header>
      <section>
        <input />
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
