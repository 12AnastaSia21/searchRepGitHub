import "./App.sass";
import SearchAppBar from "./searchAppBar";
import TheFooter from "./TheFooter";

function App() {
  return (
    <>
      <div className="app-container">
        <div className="body">
          <SearchAppBar />
          <div className="content"></div>
        </div>
        <TheFooter />
      </div>
    </>
  );
}

export default App;
