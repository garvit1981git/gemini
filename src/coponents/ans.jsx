import { CgProfile } from "react-icons/cg";
import { useContext, useState, useEffect } from "react";
import { Context } from "../store/context";
import main from "../config/gemeni";
import Loader from "./loader";

let Answer = () => {
  const {
    curques,
    renderedlist,
    setrenderedlist,
    call,
    setcall,
    setlistdata,
    listdata,
    setallrenders,
  } = useContext(Context);
  const [loader, setloader] = useState(false);
  const [datahai, setdataArhahai] = useState(true);
  const [linesToShow, setLinesToShow] = useState([]);
  const [typing, setTyping] = useState(false); // control when to show

  useEffect(() => {
    if (curques) {
      setdataArhahai(false);
      setloader(true);
      setLinesToShow([]); // reset
      setTyping(false);

      main(curques).then((data) => {
        const cleanText = data.replace(/\*/g, "").trim();
        const lines = cleanText.split("\n");
        setlistdata((prev) => [...prev, { ques: curques, content: data }]);

        setTyping(true);
        let i = 0;
        const interval = setInterval(() => {
          setLinesToShow((prev) => [...prev, lines[i]]);
          i++;
          if (i >= lines.length) {
            clearInterval(interval);
            setTyping(false);
            setrenderedlist((prev) => [
              ...prev,
              <div className="answer-container" key={prev.length}>
                <div className="ques">
                  <p className="profileimg">
                    <CgProfile />
                  </p>
                  <p>{curques}</p>
                </div>
                <div className="ans">
                  <div className="typing-box">
                    <p className="typing-text">{cleanText}</p>
                  </div>
                </div>
              </div>,
            ]);
          }
        }, 500);
        setloader(false);
        setdataArhahai(true);
      });
    }
  }, [curques]);
  return (
    <>
      {call ? renderedlist : null}
      {!curques ? (
        <div className="answer-container">
          <div className="ans">
            <div className="typing-box">
              <p className="typing-text">Ask Any Question Here</p>
            </div>
          </div>
        </div>
      ) : null}
      {typing && [
        ...renderedlist,
        <div className="answer-container">
          <div className="ques">
            <p className="profileimg">
              <CgProfile />
            </p>
            <p>{curques}</p>
          </div>
          <div className="ans">
            <div className="typing-box">
              <p className="typing-text">
                {linesToShow.map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>,
      ]}
      {loader &&
        !typing && [
          ...renderedlist,
          <div className="answer-container">
            <div className="ques">
              <p className="profileimg">
                <CgProfile />
              </p>
              <p>{curques}</p>
            </div>
            <div className="ans">
              <Loader />
            </div>
          </div>,
        ]}
      {!typing && datahai && renderedlist}
    </>
  );
};

export default Answer;
