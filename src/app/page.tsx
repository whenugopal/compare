import "./styles/styles.scss";
import CardContainer from "./components/CardContainer";

export default function Home() {
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
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
