import Image from "next/image";
import CloseButton from "./CloseButton";

const CardContainer = () => {
  return (
    <div className="card-container">
      <div className="card-header">Abacus</div>
      <div className="card-image">
        <a href="www.google.com">
          <img src="https://onlinelibrary.wiley.com/action/showCoverImage?journalCode=14676281" />
        </a>
      </div>
      <div className="card-access">
        <span className="card-badge">Offer Open Access</span>
      </div>

      <div className="card-details">
        <div className="card-detailed">
          <div className="label">Submission to first decision</div>
          <div className="value">74 days</div>
        </div>
        <div className="card-detailed">
          <div className="label">Acceptance Rate</div>
          <div className="value">8%</div>
        </div>
      </div>
      <CloseButton />
    </div>
  );
};

export default CardContainer;
