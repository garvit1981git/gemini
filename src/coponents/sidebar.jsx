import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";
import { useContext } from "react";
import { Context } from "../store/context";
import { CgProfile } from "react-icons/cg";
let Sidebar = () => {
  let [extended, setextended] = useState(false);
  let { allrender, setallrenders, setrenderedlist, listdata, setlistdata } =
    useContext(Context);
  let menuclick = () => {
    setextended(!extended);
  };

  let addnew = () => {
    setlistdata((prev) => [...prev, { ques: "new chat", content: [] }]);
  };
  let setchat = (item) => {
    let dv = listdata.find((e) => item.ques === e.ques);
    console.log(dv);
    setrenderedlist([
      <div className="answer-container">
        <div className="ques">
          <p className="profileimg">
            <CgProfile />
          </p>
          <p>{dv.ques}</p>
        </div>
        <div className="ans">
          <div className="typing-box">
            <p className="typing-text">{dv.content}</p>
          </div>
        </div>
      </div>,
    ]);
  };
  return (
    <>
      <div className="sidebar">
        <div className="top">
          <p onClick={() => menuclick()}>
            <IoMdMenu />
          </p>
          <div className="addnew">
            <FaPlus />
            {extended ? (
              <span class="addtext" onClick={() => addnew()}>
                Addnew
              </span>
            ) : null}
          </div>
          {extended ? (
            <div className="recent">
              <p className="recenttitle">Recent</p>
              {listdata.map((item) => (
                <div
                  className="recent-entry bottum-item"
                  onClick={() => setchat(item)}
                >
                  <FaMessage />
                  <span>{item.ques}</span>
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <div className="bottum">
          <div className="bottum-item bottum-item">
            <HiOutlineQuestionMarkCircle />
            {extended ? <p>Activity</p> : null}
          </div>
          <div className="bottum-item bottum-item">
            <FaClockRotateLeft />
            {extended ? <p>History</p> : null}
          </div>
          <div className="bottum-item bottum-item">
            <IoSettingsOutline />
            {extended ? <p>Settings</p> : null}
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
