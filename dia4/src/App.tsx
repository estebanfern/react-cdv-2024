import { useState, useEffect, useMemo } from "react";
import "./App.css";

function useCounter(inicial = 0, max = 10, min = 0) {
  const [count, setCount] = useState(inicial);

  function plus() {
    if (count < max) setCount(count + 1);
  }

  function minus() {
    if (count > min) setCount(count - 1);
  }

  useEffect(() => {
    console.log("cosas", count);
  }, [count]);

  return [count, plus, minus];
}

function Counter({
  inicial = 0,
  max = 10,
  min = 0,
}: {
  inicial?: number;
  max?: number;
  min?: number;
}) {
  const [count, plus, minus] = useCounter(inicial, max, min);

  return (
    <div className="flex">
      <button onClick={plus}>+</button>
      <h1>{count}</h1>
      <button onClick={minus}>-</button>
    </div>
  );
}

function Sum({ a, b }: { a: number; b: number }) {
  return <h1>{a + b}</h1>;
}

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const texto = useMemo(() => {
    return text + " " + count * 3;
  }, [text, count]);

  useEffect(() => {
    console.log("cosas", count, text);
  }, [text]);

  useEffect(() => {
    console.log("cosas", count, text);
  }, [count]);

  return (
    <div className=" flex flex-col justify-center items-center">
      <Counter inicial={0} />
      <Sum a={1} b={1} />
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <h1>{texto}</h1>
    </div>
  );
}

export default App;
