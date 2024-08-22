import "./App.sass";
import SearchAppBar from "./searchAppBar";
import TheFooter from "./TheFooter";
import TheSidebar from "./TheSidebar";

function App() {
  return (
    <>
      <div className="app-container">
        <SearchAppBar />
        <div className="body">
          <div className="content"></div>
          <TheSidebar />
        </div>
        <TheFooter />
      </div>
    </>
  );
}

export default App;
