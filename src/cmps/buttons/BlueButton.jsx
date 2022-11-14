export const BlueButton = ({ text }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <div className="btn btn-lg">
            <span>{text}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
