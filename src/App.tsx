import "./App.sass";
import TheSearchAppBar from "./TheSearchAppBar";
import TheFooter from "./TheFooter";
import TheSidebar from "./TheSidebar";
import TheMain from "./TheMain";

function App() {
  return (
    <>
      <div className="app-container">
        <TheSearchAppBar />
        <div className="body">
          <div className="content">
            <TheMain />
          </div>
          <TheSidebar />
        </div>
        <TheFooter />
      </div>
    </>
  );
}

export default App;
