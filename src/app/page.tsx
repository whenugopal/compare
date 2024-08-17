import "./styles/styles.scss";
import CardContainer from "./components/CardContainer";

export default function Home() {
  return (
    <>
      <div className="results">
        <div className="listview">
          <ul>
            <div className="compare-view">
              <CardContainer />
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
