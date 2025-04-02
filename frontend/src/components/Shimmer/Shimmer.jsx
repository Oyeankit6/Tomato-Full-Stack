import "./Shimmer.css";

export const Shimmer = () => {
  // Generate 10 shimmer cards
  const shimmerCards = new Array(10).fill(0); // Creates an array of length 10 with undefined values

  return (
    <>
      <div className="shimmer-cards-container">
        {shimmerCards.map((_, index) => (
          <div key={index} className="food-item shimmer">
            <div className="food-item-img-container shimmer-img">
              <div className="shimmer-placeholder image"></div>
            </div>
            <div className="food-item-info">
              <div className="food-item-name-rating">
                <div className="shimmer-placeholder name"></div>
                <div className="shimmer-placeholder rating"></div>
              </div>
              <div className="shimmer-placeholder description"></div>
              <div className="shimmer-placeholder price"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
