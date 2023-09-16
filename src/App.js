import { useState } from "react";
import "./App.css";
import BottomSheet from "./Components/BottomSheet";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setIsOpen((prev) => !prev)} className="open-btn">
        {isOpen ? `Close Bottom Sheet` : `Open Bottom Sheet`}
      </button>
      {isOpen && <BottomSheet />}
    </div>
  );
}

export default App;
