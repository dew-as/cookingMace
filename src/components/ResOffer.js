const ResOffer = (props) => {
  const { offer } = props;
  return (
    <div className="p-2 border">
      <span className="text-xs">
        <i className="bx bxs-offer mr-2" style={{ color: "tomato" }}></i>
        {offer?.info?.header}
      </span>
      <span className="flex" style={{ fontSize: "9px" }}>
        {offer?.info?.couponCode} | {offer?.info?.description || "ABOVE ₹499"}
      </span>
    </div>
  );
};

export default ResOffer;
