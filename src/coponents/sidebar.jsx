import { useState, useContext } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { Context } from "../store/context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { allrender, setallrenders, setrenderedlist, listdata, setlistdata } =
    useContext(Context);

  const menuclick = () => {
    setExtended(!extended);
  };

  const addnew = () => {
    setlistdata((prev) => [...prev, { ques: "new chat", content: [] }]);
  };

  const setchat = (item) => {
    const dv = listdata.find((e) => item.ques === e.ques);
    setrenderedlist([
      <div className="answer-container" key={dv.ques}>
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
    <div className={`sidebar ${extended ? "expanded" : "collapsed"}`}>
      <div className="top">
        <p onClick={menuclick} className="sidebar-toggle">
          <IoMdMenu />
        </p>

        <div className="addnew" onClick={addnew}>
          <FaPlus />
          {extended && <span className="addtext">Add New</span>}
        </div>

        {extended && (
          <div className="recent">
            <p className="recenttitle">Recent</p>
            {listdata.map((item, index) => (
              <div
                key={index}
                className="recent-entry bottum-item"
                onClick={() => setchat(item)}
              >
                <FaMessage />
                <span>{item.ques}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bottum">
        <div className="bottum-item">
          <HiOutlineQuestionMarkCircle />
          {extended && <p>Activity</p>}
        </div>
        <div className="bottum-item">
          <FaClockRotateLeft />
          {extended && <p>History</p>}
        </div>
        <div className="bottum-item">
          <IoSettingsOutline />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
