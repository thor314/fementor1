/// <reference types="vite-plugin-svgr/client" />
import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import { ReactComponent as FolderIcon } from "./assets/icon-folder.svg";
import { ReactComponent as DocumentIcon } from "./assets/icon-document.svg";
import { ReactComponent as UploadIcon } from "./assets/icon-upload.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <main>
        <div className="top-header">
          {/* before */}
          <h1></h1>
          <div className="icons">
            <button>
              <DocumentIcon />
            </button>
            <button>
              <FolderIcon />
            </button>
            <button>
              <UploadIcon />
            </button>
          </div>
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
          <div className="top-storage-left">185</div>
        </div>
      </main>
    </div>
  );
}

export default App;
