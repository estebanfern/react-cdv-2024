import { useState } from "react";
import "./App.css";

function Counter({
  count,
  setCount,
  max = 10,
  min = 0,
}: {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  max?: number;
  min?: number;
}) {
  return (
    <div className="flex">
      <button
        onClick={() => {
          if (count < max) setCount(count + 1);
        }}
      >
        +
      </button>
      <h1>{count}</h1>
      <button
        onClick={() => {
          if (count > min) setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

function Sum({ a, b }: { a: number; b: number }) {
  return <h1>{a + b}</h1>;
}

function App() {
  const [count, setCount] = useState(0);

  if (count < 9) {
    return (
      <>
        <Counter count={count} setCount={setCount} />
        <Sum a={1} b={1} />
      </>
    );
  } else {
    return <h1>Hola mundo</h1>;
  }
}

export default App;
