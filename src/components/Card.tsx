import { CSSProperties } from "react";
import "./Card.css";

interface Props {
  active: boolean;
  // onHover: () => void;
  style: CSSProperties;
}

export default function Card({ active, style }: Props) {
  return (
    <>
      <div className="card-container">
        <div className={active ? "card card-active" : "card"} style={style}>
          {/* <p>Value: {value}</p>
        <p>Active: {active ? "true" : "false"}</p> */}
        </div>
      </div>
    </>
  );
}
