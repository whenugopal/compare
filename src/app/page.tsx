"use client";

import { useEffect, useState } from "react";
import CardContainer from "./components/CardContainer";
import PlaceHolderContainer from "./components/PlaceHolderContainer";
import "./styles/styles.scss";

export default function Home() {
  const [ids, setIds] = useState<any>();
  const [cards, setCards] = useState(["card-1", "card-2", "card-3", "card-4"]);
  const [data, setData] = useState([]);

  const updateCards = (id: any) => {
    const newCards = cards.filter((card) => card !== id);
    newCards.push(`place-holder-${id}`);
    setCards(newCards);
  };

  const getIdsFromQueryparams = () => {
    const location = new URLSearchParams(window?.location.search);
    const ids = location.getAll("ids");
    return ids;
  };

  const buildUrl = (idsArray: any[]): string => {
    const baseUrl =
      "https://ac.cnstrc.com/browse/items?key=key_fitLDOm8s50Q8vGj";
    const queryParams = idsArray?.map((id) => `ids=${id}`).join("&");
    return `${baseUrl}&${queryParams}`;
  };

  const fetchCollection = async (ids: any[]) => {
    try {
      console.log("the urls i ", buildUrl(ids));
      const response: any = await fetch(buildUrl(ids));

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json(); // Assuming the response is JSON

      setData(result.response.results);
      return result;
    } catch (error) {
      console.log("Something happing while fetching the api", error);
    }
  };
  useEffect(() => {
    const extractedIds = getIdsFromQueryparams();
    setIds(extractedIds);
    fetchCollection(extractedIds);
  }, []);

  console.log("I got this result", data);

  return (
    <>
      <div className="results ">
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
      {/* <div className="simiar-section">
        <div className="similar-journals">
          <SimilarCardContainer id={"Hello"} />
        </div>
      </div> */}
    </>
  );
}
