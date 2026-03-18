function BgSectionContent() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(/resources/陽台.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="min-w-fit flex-1">
          <h1 className="text-5xl font-bold pt-10 pb-[30px] tracking-tight">
            技術細節和製作過程
          </h1>
            <div className="w-max h-max" />
            <button className="btn btn-primary">(未完成)看製作過程&#8594;</button>
        </div>
      </div>
    </div>
  );
}

export default BgSectionContent;
