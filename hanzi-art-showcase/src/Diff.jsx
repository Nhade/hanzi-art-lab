function Diff(props) {
  return (
    <>
      <div className="diff w-[60vw] aspect-[2] mt-[30px]">
        <div className="diff-item-1">
          <img
            alt="左圖"
            src={props.left}
          />
        </div>
        <div className="diff-item-2">
          <img
            alt="右圖"
            src={props.right}
          />
        </div>
        <div className="diff-resizer"></div>
      </div>
      <p className="text-center text-lg">
        {props.bottom}
      </p>
    </>
  );
}

export default Diff