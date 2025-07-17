import { createContext } from "react";
// import main from "../config/gemeni";
import { useState, useRef } from "react";
export let Context = createContext();
let Contextprovider = ({ children }) => {
  let [curques, setcurques] = useState("");
  let [allques, setallques] = useState([]);
  let [curcon, setcurcon] = useState(false);
  let [quesans, setquesans] = useState([]);
  const [renderedlist, setrenderedlist] = useState([]);
  const [allrender, setallrenders] = useState([]);
  let inputRef = useRef();
  let [listdata, setlistdata] = useState([]);
  // let onsent = async (prompt) => {
  //   main(prompt).then(() => {
  //     console.log("data have arived");
  //   });
  // };
  // onsent("what is react");
  return (
    <>
      <Context.Provider
        value={{
          curques,
          allques,
          curcon,
          setcurcon,
          inputRef,
          setcurques,
          setallques,
          quesans,
          setquesans,
          renderedlist,
          setrenderedlist,
          allrender,
          setallrenders,

          listdata,
          setlistdata,
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
};
export default Contextprovider;
