import "./App.css";
// import Photo from "./components/AddPhoto/Photo";
import InterestPreference from "./components/Interest/InterestPreference";
// import CreateAccount from "./components/Register/CreateAccount";

function App() {
  return (
    <>
      <div className="one">One</div>
      <div className="two">
        <nav className="nav">
          <span>Step 1 of 4</span>
          <span>Exit</span>
        </nav>
        {/* <CreateAccount /> */}
        {/* <Photo /> */}
        <InterestPreference />
      </div>
    </>
  );
}

export default App;
