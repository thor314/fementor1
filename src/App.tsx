// / <reference types="vite-plugin-svgr/client" />
import { useState } from "react";
import "./App.css";
import TopHeader from "./components/TopHeader";
import TopStorage from "./components/TopStorage";

function App() {
  return (
    <main className="App">
      <TopHeader />
      <TopStorage/>
    </main>
  );
}

export default App;
