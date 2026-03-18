function BgSectionContent() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://cdn.discordapp.com/attachments/812637060577755136/1230147918842036274/Screenshot_2024-04-17_212824.png?ex=66324386&is=661fce86&hm=854270b7be796aadeec6dcd7b5be9192c6a528b2c4d3e3cabfc023dda1e5e1b5&)",
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
