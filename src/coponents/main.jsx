import { FaFileImage } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { useState, useRef } from "react";
import Answer from "./ans";
import { CgProfile } from "react-icons/cg";
// import main from "../config/gemeni";
import { useContext } from "react";
import { Context } from "../store/context";
let Main = () => {
  let {
    curques,
    allques,
    curcon,
    setcurcon,
    inputRef,
    setcurques,
    setallques,
  } = useContext(Context);
  let [sendicon, setsendicon] = useState(false);
  let enter = (e) => {
    if (e.key === "Enter") {
      sendclick();
    }
  };
  let sendmes = (e) => {
    e.preventDefault();
    console.log(e.target.value.trim());
    console.log(e.target.value);
    console.log(e);
    if (e.target.value.trim().length == 0) {
      setsendicon(false);
    } else {
      setsendicon(true);
    }
  };
  let sendclick = () => {
    setcurcon(true);

    let ref = inputRef.current.value;
    setcurques(ref);
    setallques((prev) => [...prev, ref]);
    inputRef.current.value = "";
    setsendicon(false);
  };

  return (
    <>
      <div className="main">
        <div className="nav">
          <p>Gemini</p>
          <p class="profileimg">
            <CgProfile />
          </p>
        </div>

        {curcon ? (
          <Answer></Answer>
        ) : (
          <div className="main-content">
            <div className="greet">
              <p>Hey Dev! Welcome to Gemini</p>
              <p>What would you like to explore today?</p>
            </div>

            <div className="cards">
              <div className="card">
                <h3>Summarize Text</h3>
                <p>
                  Paste any article, email, or long content and get a brief
                  summary.
                </p>
              </div>
              <div className="card">
                <h3>Code Helper</h3>
                <p>
                  Ask coding questions or debug code snippets with AI
                  assistance.
                </p>
              </div>
              <div className="card">
                <h3>Translate Language</h3>
                <p>Translate text between multiple languages instantly.</p>
              </div>
              <div className="card">
                <h3>Creative Writing</h3>
                <p>
                  Generate poems, stories, social media posts, or blog ideas.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="main-bottum">
          <div className="input">
            <input
              type="text"
              placeholder="Enter Your Prompt Here"
              onChange={(e) => sendmes(e)}
              ref={inputRef}
              onKeyDown={(e) => enter(e)}
            ></input>
            <FaFileImage />
            <FaMicrophone />
            {sendicon ? (
              <p class="sendicon" onClick={(e) => sendclick(e)}>
                <IoMdSend />
              </p>
            ) : null}
          </div>
          <p class="b-text">Here Ask Any Ques Enter Correct Prompt</p>
        </div>
      </div>
    </>
  );
};
export default Main;
