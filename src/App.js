import { useEffect, useState } from "react";
import "./App.css";
import { generaterRandomNumber } from "./random";

function App() {
  // console.log(generaterRandomNumber());
  const [randomNumber, setRandomNumber] = useState(generaterRandomNumber);
  const [answer, setAnswer] = useState("");
  const [logs, setLogs] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    console.log(randomNumber);
  }, [randomNumber]);

  const handleAnswerChanged = (e) => {
    setAnswer(e.target.value);
  };
  const handleSubmitClick = (e) => {
    const answerArray = answer.split("").map((item) => Number(item));

    if (answer.some((item) => isNaN(Number))) {
      alert("숫자만 입력해주세요");
      return;
    }
    if (answer.length !== 4) {
      alert("4자리 숫자만 입력해주세요");
      return;
    }
    const isDuplicate = answer.some((number) => {
      return answer.indexOf(number) !== answer.lastIndexOf(number);
    });

    if (isDuplicate) {
      alert("입력 값에 중복이 있어요");
      return;
    }

    const { strike, ball } = randomNumber.reduce(
      (prev, cur, index) => {
        if (answerArray[index] === cur) {
          return { ...prev, strike: prev.strike + 1 };
        }
        if (answerArray.includes(cur)) {
          return {
            ...prev,
            ball: prev.ball + 1,
          };
        }
        return prev;
      },
      {
        strike: 0,
        ball: 0,
      }
    );
    if (strike === 4) {
      alert("정답입니다");
      setLogs([...logs, `${answer} (축하합니다 정답입니다!)`]);
      setIsSuccess(true);
      return;
    }
    // console.log("strike :", strike, "ball :", ball);
    setLogs([...logs, `${answer} (strike : ${strike}, ball : ${ball})`]);
  };
  const handleRetryClick = () => {
    setRandomNumber(generaterRandomNumber());
    setAnswer("");
    setLogs([]);
    setIsSuccess(false);
  };

  return (
    <div className="App">
      <h1>숫자 야구 게임</h1>
      <header className="header">
        {isSuccess ? `정답은 : ${answer}` : "_ _ _ _"}
      </header>
      <section>
        <input
          type="text"
          value={answer}
          onChange={handleAnswerChanged}
          disabled={isSuccess}
        />
        {isSuccess ? (
          <button onClick={handleRetryClick}>다시하기</button>
        ) : (
          <button onClick={handleSubmitClick}>맞춰보기</button>
        )}
      </section>
      <h2>기록</h2>
      <ol>
        {logs.map((log, index) => {
          return <li key={`${log}_${index}`}>{log}</li>;
        })}
      </ol>
    </div>
  );
}

export default App;
