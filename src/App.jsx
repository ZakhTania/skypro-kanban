import "./App.css";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import NewCard from "./components/NewCard/NewCard";
import PopExit from "./components/PopExit/Exit";
import PopBrowse from "./components/PopBrowse/PopBrowse";

function App() {
  return (
    <>
      <div className="wrapper">
        {/* <!-- pop-up start--> */}
        <PopExit />

        <NewCard />

        <PopBrowse />
        {/* <!-- pop-up end--> */}

        <Header />

        <Main />
      </div>
    </>
  );
}

export default App;
