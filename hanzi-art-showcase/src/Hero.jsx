function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content max-w-[80vw] flex-row">
        <div className="flex-1 justify-center">
          <h1 className="text-8xl font-bold tracking-tight bg-gradient-to-r from-teal-500 via-lime-500 to-yellow-400 bg-clip-text text-transparent">
            中文系館印象
          </h1>
          <p className="py-6 max-w-md text-3xl">
            系館景致、漢字文字圖創作
          </p>
        </div>
        <div className="w-3xl rounded-lg overflow-hidden flex-1 flex flex-col">
          <div className="w-3xl rounded-lg overflow-hidden">
            <img
              src="https://cdn.discordapp.com/attachments/812637060577755136/1229895595632890096/colorized_render_16px_-2gap_boostx1.13.jpg?ex=66315888&is=661ee388&hm=0b2ed6d4abc4e383b245552a170ad66a4ef95e7c39a1b6fb0deeabd29ecc37b2&"
              className="shadow-2xl scale-[1] object-cover hover:scale-[15] duration-1000"
            />
          </div>
          <p>&#8593;將游標滑到圖片上看看</p>
        </div>
      </div>
    </div>
  );
}
export default Hero;
