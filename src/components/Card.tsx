import "./Card.css";

interface Props {
  onIncrement: () => void;
  active: boolean;
  value: string;
}
export default function Card({ onIncrement, active, value }: Props) {
  return (
    <>
      <div
        // className={active ? "card card-active" : "card"}
        className="card card-bg-img"
        onClick={onIncrement}
      >
        <p>Value: {value}</p>
        <p>Active: {active ? "true" : "false"}</p>
      </div>
    </>
  );
}
