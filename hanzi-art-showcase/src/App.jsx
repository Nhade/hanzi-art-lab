import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import SectionContent from "./SectionContent.jsx";
import Footer from "./Footer.jsx";
import Carousel from "./Carousel.jsx";
import Diff from "./Diff.jsx";
import BgSectionContent from "./BgSectionContent.jsx";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero />
      <div className="divider"></div>
      <SectionContent
        title="文字、圖、以及文字圖"
        content={
          <>
            <article className="text-xl leading-7 pb-[30px] text-wrap max-w-[40vw]">
              <p>
                文字與圖像，在多媒體盛行的現代，儼然成為難以取代的資訊媒介。
                在我們的生活中，舉凡傳訊息、張貼貼文、發布現實動態等等，都與圖、文離不開關係。
                而文字圖是文字與圖像的融合，相輔相成。我認為，這是一種別具意義的多媒體藝術形式。
              </p>
            </article>
          </>
        }
        image={
          <>
            <div className="max-w-md rounded-md bg-white opacity-60 hover:opacity-100 duration-200">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Wikipedia_Logo_as_ASCII_Art.png"
                alt="維基百科的ASCII藝術"
                className="max-w-md rounded-md"
              />
            </div>
            <p className="text-center">維基百科的ASCII藝術(圖片來源:<a className="link link-primary" href="https://commons.wikimedia.org/wiki/File:Wikipedia_Logo_as_ASCII_Art.png">維基百科</a>)</p>
          </>
        }
      />
      <div className="divider"></div>
      <SectionContent
        title="製作動機"
        content={
          <>
            <article className="text-xl leading-7 pb-[30px] text-wrap max-w-[40vw]">
                <p className="mb-[30px]">
                  以前曾經看過以拼接許多圖片完成的馬賽克圖片，在看到作業題目後立刻聯想到這種創作形式，由許多張照片拼接成為一個大圖片，就好像由許多記憶匯流成對整個主體的印象一般，藉此在絕對客觀的圖片之上增添許多故事性。
                </p>
                <p>
                  然而，考量到資料取材不易（需要大量圖片素材），因此開始思考替代方案，最後決定用文字替代圖片。以字元拼接成圖片的做法行之有年，然而網路上常見的技術只使用了英數字元和基本符號，可自由調整的空間不大，由於我希望能夠在創作文字圖的同時，如圖片馬賽克一樣傳達特殊性，且想在創作時有更多「訂製」空間，於是便開始自行摸索，寫出了一個具備一些實用小功能的文字圖產生小工具。
                </p>
              </article>
          </>
        }
        image={
          <>
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Mosaicr_seagull.jpg" alt="hexagonal photographic mosaic(from wikipedia)" className="max-w-md rounded-md opacity-60 hover:opacity-100 duration-200"/>
            <p className="text-center">由許多鳥類圖片和自然圖片拼接而成的海鷗(圖片來源:<a className="link link-primary" href="https://commons.wikimedia.org/wiki/File:Mosaicr_seagull.jpg">維基百科</a>)</p>
          </>
        }
      />
      <div className="divider"></div>
      <SectionContent
        title="成果"
        content={
          <>
            <article className="text-xl leading-7 pb-[30px] text-wrap max-w-[40vw]">
                <p className="mb-[30px]">
                  圖片取材自: <a className="link link-primary" href="https://material.ncku.edu.tw/">成大素材網</a>、<a className="link link-primary" href="http://deh.csie.ncku.edu.tw/extn/poi_detail/32194">踏溯台南with文史脈流</a>
                </p>
              </article>
            <Diff
              left="https://cdn.discordapp.com/attachments/812637060577755136/1229895595632890096/colorized_render_16px_-2gap_boostx1.13.jpg?ex=66315888&is=661ee388&hm=0b2ed6d4abc4e383b245552a170ad66a4ef95e7c39a1b6fb0deeabd29ecc37b2&"
              right="https://material.ncku.edu.tw/_data/i/upload/2023/09/21/20230921134536-ad03b973-me.jpg"
              bottom="系館正門"
            />
            <Diff
              left="https://cdn.discordapp.com/attachments/812637060577755136/1230107705075830814/colorized_render_16px_-2gap_boostx1.13.jpg?ex=66321e13&is=661fa913&hm=e9ee6808eeab59f7d9d90c228b8323ef1795bc2e705279aca75633a9b5a2b28a&"
              right="http://deh.csie.ncku.edu.tw/player_pictures/media/2018718478_33864.jpg"
              bottom="另一角度的系館正門"
            />
            <Diff
              left="https://cdn.discordapp.com/attachments/812637060577755136/1230109151175376989/colorized_render_16px_-2gap_boostx1.3_0.55l.jpg?ex=66321f6b&is=661faa6b&hm=9464a4e802a2799a4c24e3b63fc46707cffd99574614debfe16a7aa8d2c9678a&"
              right="https://material.ncku.edu.tw/_data/i/upload/2016/12/08/20161208073805-51701dca-me.jpg"
              bottom="「偶然」——南中庭"
            />
            <Diff
              left="https://cdn.discordapp.com/attachments/812637060577755136/1230113140575047700/colorized_render_16px_-2gap_boostx1.13.jpg?ex=66322323&is=661fae23&hm=a468e3ade00c825283354a6f3cc275dfd34290c20705ddf60df83a46bfa30e27&"
              right="http://deh.csie.ncku.edu.tw/player_pictures/media/2018718478_33865.jpg"
              bottom="近歷史文物館一景"
            />
          </>
        }
      />
      <div className="divider"></div>
      <BgSectionContent/>
      <Footer />
    </>
  );
}

export default App;
