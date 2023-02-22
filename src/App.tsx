import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import {ReactComponent as Folder} from "./assets/icon-folder.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <main>
        <div className="top-header">
          {/* before */}
          <h1></h1>
          <ul className="header-icons">
            {/* todo icons */}

            <li>
              {/* {icon_folder} */}
              <object data={icon_folder} type="image/svg+xml" />

            </li>
            <li>*</li>
            <li>*</li>
          </ul>
        </div>
        <div className="top-storage">
          You’ve used 815 GB of your storage 185 GB Left 0 GB 1000 GB
          <div className="attribution">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by <a href="#">Your Name Here</a>.
          </div>
          <div className="top-storage-left">
            185
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
