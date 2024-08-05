import { useState } from "react";
import Card from "./Card";
import "./Cards.css";

export default function Cards() {
  const [count, setCount] = useState(new Array(4).fill(false));

  function handleIncrement(index: number) {
    const newCount = count.slice();
    if (newCount[index]) {
      newCount[index] = false;
    } else {
      newCount[index] = true;
    }
    setCount(newCount);
    console.log(count);
  }

  return (
    <div className="cards">
      <Card
        value="0"
        onIncrement={() => handleIncrement(0)}
        active={count[0]}
      />
      <Card
        value="1"
        onIncrement={() => handleIncrement(1)}
        active={count[1]}
      />
      <Card
        value="2"
        onIncrement={() => handleIncrement(2)}
        active={count[2]}
      />
      <Card
        value="3"
        onIncrement={() => handleIncrement(3)}
        active={count[3]}
      />
      <Card
        value="4"
        onIncrement={() => handleIncrement(4)}
        active={count[4]}
      />
    </div>
  );
}
