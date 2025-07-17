import Answer from "./coponents/ans";
import Main from "./coponents/main";
import Sidebar from "./coponents/sidebar";
import Contextprovider from "./store/context";
function App() {
  return (
    <>
      <Contextprovider>
        <Sidebar></Sidebar>
        <Main></Main>
      </Contextprovider>
    </>
  );
}

export default App;
