import { useState } from "react";
import { sum } from "./utilFunc.js";

const App = () => {
  const [text, setText] = useState("Hello World");
  return (
    <>
      <h1>{text}</h1>
      <div>{sum(1, 2)}</div>
    </>
  );
};

export default App;
