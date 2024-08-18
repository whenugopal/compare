"use client";

import { useEffect, useState } from "react";
import CardContainer from "./components/CardContainer";
import PlaceHolderContainer from "./components/PlaceHolderContainer";
import "./styles/styles.scss";

export default function Home() {
  const [cards, setCards] = useState(["card-1", "card-2", "card-3", "card-4"]);

  const updateCards = (id: any) => {
    const newCards = cards.filter((card) => card !== id);
    newCards.push(`place-holder-${id}`);
    setCards(newCards);
  };

  return (
    <>
      <div className="results">
        <div className="listview">
          <div className="compare-view">
            {cards.map((e) =>
              !e.startsWith("place-holder") ? (
                <div className="compare-view-card-container" key={e}>
                  <CardContainer id={e} updateCards={updateCards} />
                </div>
              ) : (
                <div className="compare-view-card-container" key={e}>
                  <PlaceHolderContainer />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
