const CloseButton = (props: { updateCards: any; id: any }) => {
  const updateCards = props.updateCards;
  const id = props.id;
  return (
    <>
      <div
        className="banner-close"
        onClick={(e) => {
          updateCards(e.currentTarget.getAttribute("id"));
        }}
        id={id}
      ></div>
    </>
  );
};

export default CloseButton;
