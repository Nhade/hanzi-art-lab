function SectionContent(props) {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-row">
        <div className="min-w-fit flex-1">
          <h1 className="text-5xl font-bold pt-10 pb-[30px] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
            {props.title}
          </h1>
          {props.content}
        </div>
        <div className="max-w-2xl flex-none">
            {props.image}
        </div>
      </div>
    </div>
  );
}

export default SectionContent;
