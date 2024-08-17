const PlaceHolderContainer = () => {
  return (
    <div>
      <a href="#responsive-productList" className="scroll-link">
        <div className="placeholder-outer">
          <div className="placeholder-inner">
            <span className="placeholder-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path d="M8 3L8 13" stroke="black" stroke-width="2"></path>
                <path d="M3 8L13 8" stroke="black" stroke-width="2"></path>
              </svg>
            </span>

            <span className="placeholder-text">Choose another Journal</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default PlaceHolderContainer;
