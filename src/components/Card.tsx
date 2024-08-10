import { CSSProperties } from "react";
import "./Card.css";

interface Props {
  style: CSSProperties;
}

export default function Card({ style }: Props) {
  return (
    <>
      <div className="card-container">
        <a
        // href="https://www.nytimes.com/subscription/all-access?campaignId=8HHXJ&ds_c=71700000105574161&site=google&network=g&campaign_id=19602743994&gad_source=1&gclid=EAIaIQobChMI4brmkuPqhwMVz25HAR2JuyNjEAAYASAAEgLVmPD_BwE&gclsrc=aw.ds"
        // target="_blank"
        >
          <div className="card" style={style}></div>
        </a>
      </div>
    </>
  );
}
