"use client";

import { useEffect, useState } from "react";
import CardContainer from "./components/CardContainer";
import PlaceHolderContainer from "./components/PlaceHolderContainer";
import "./styles/styles.scss";

export default function Home() {
  const [cards, setCards] = useState(["card-1", "card-2", "card-3", "card-4"]);

  const [placeHolder, setPlaceHolder] = useState<number>(0);
  const updateCards = (id: any) => {
    setCards(cards.filter((card) => card !== id));
    if (cards.length < 4) {
      console.log("The cards length", cards.length);
      setPlaceHolder(4 - cards.length);
      console.log(placeHolder, "The value");
    }
  };

  return (
    <>
      <div className="results">
        <div className="listview">
          <div className="compare-view">
            {cards.map((e) => (
              <div className="compare-view-card-container" key={e}>
                <CardContainer id={e} updateCards={updateCards} />
              </div>
            ))}
            {placeHolder > 0 && generatePlaceHolders(placeHolder)}
          </div>
        </div>
      </div>
    </>
  );
}

const generatePlaceHolders = (count: number) => {
  const generatedResponse = Array.from({ length: count }).map((_, index) => (
    <div className="compare-view-card-container" key={index}>
      <PlaceHolderContainer />
    </div>
  ));
  console.log(generatedResponse);
  return generatedResponse;
};
