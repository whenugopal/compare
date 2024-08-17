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

      <div className="card-details"></div>
      <CloseButton />
    </div>
  );
};

export default CardContainer;
