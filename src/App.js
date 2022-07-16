import ReadArea from "./ReadArea";
import WriteArea from "./WriteArea";
import React from "react";

function App() {

  return (
    <div className="App">
        <div id="upperBar">
            <img id="imageIcon" src="flowerfox_5.png" alt="flowerfox token symbol" />
            <div id="titleBar">FLOWERFOX TOKEN</div>
        </div>
        
        <div id="mainArea">
            <ReadArea/>
            <WriteArea/>

        </div>
        <p id="footnote">By Abdulhakim Altunkaya, 2022 <br />
        https://github.com/abdulhakim-altunkaya/flowerfox
        </p>

    </div>
  );
}
export default App;

