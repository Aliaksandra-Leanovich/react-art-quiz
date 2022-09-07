import { useEffect, useMemo, useState } from "react";
import "./app.css";
import { Timer } from "./components/Timer";
import Trivia from "./components/trivia";
import { Star } from "./components/Star";
import winData from "./win-data.json";
import { Pyramid } from "./components/Pyramid";
import queshionsData from "./queshions-data.json";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState(" $ 0");
  const [username, setUsername] = useState(null);

  const moneyPyramid = useMemo(
    () => winData.map((win) => ({ id: win.id, amount: win.amount })),
    []
  );
  const data = queshionsData.map((queshions) => ({
    id: queshions.id,
    question: queshions.question,
    answers: queshions.answers,
  }));
  useEffect(() => {
    questionNumber > 1 &&
      setEarned(
        moneyPyramid.find((win) => win.id === questionNumber - 1).amount
      );
  }, [moneyPyramid, questionNumber]);
  return (
    <div className="wrapper">
      <div className="app">
        {username ? (
          <>
            <div className="main">
              {stop ? (
                <h1>
                  {username},you earned {earned}!
                </h1>
              ) : (
                <>
                  <div className="top"></div>
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                  <div className="bottom">
                    <Trivia
                      key={data.id}
                      data={data}
                      setStop={setStop}
                      questionNumber={questionNumber}
                      setQuestionNumber={setQuestionNumber}
                    />
                  </div>
                </>
              )}
            </div>
            <div className="pyramid">
              <Pyramid
                moneyPyramid={moneyPyramid}
                questionNumber={questionNumber}
              />
            </div>
          </>
        ) : (
          <Star setUsername={setUsername} />
        )}
      </div>
    </div>
  );
}

export default App;
