const SlideInfo = ({ image, title, children }) => {
  return (
    <div className="slide-info">
      <img src={image}></img>
      <div className="info">
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default SlideInfo;
