const ControlButton = ({ name, mode, handle }) => {
  const style1 = {
    backgroundColor: mode ? "#04aa6d" : "#000"
  };
  const style2 = {
    backgroundColor: !mode ? "#04aa6d" : "#000"
  };

  return (
    <div className="control">
      <div>
        <span>{name}</span>
      </div>
      <div>
        <button
          className="select"
          style={style1}
          type="button"
          onClick={handle}
        ></button>
        <button
          className="inner"
          style={style2}
          type="button"
          onClick={handle}
        ></button>
      </div>
    </div>
  );
};

export default ControlButton;
