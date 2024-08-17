import { useEffect, useState } from "react";
import CardContainer from "./components/CardContainer";
import PlaceHolderContainer from "./components/PlaceHolderContainer";
import "./styles/styles.scss";

export default function Home() {
  const [cards, setCard] = useState([]);

  return (
    <>
      <div className="results">
        <div className="listview">
          <ul>
            <div className="compare-view">
              <div className="compare-view-card-container">
                <CardContainer />
              </div>

              <div className="compare-view-card-container">
                <CardContainer />
              </div>
              <div className="compare-view-card-container">
                <CardContainer />
              </div>
              <div className="compare-view-card-container">
                <PlaceHolderContainer />
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
