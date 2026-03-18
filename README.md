# Hanzi Art Lab
[English Version Below](#english-version)

這是一個將圖片轉換為漢字馬賽克藝術的實驗性專案與展示網頁。

## 製作動機 (Motivation)
這個專案起源於大一通識國文課的作業。當時，教授要求我們在參觀中文系館後，以多媒體創作（結合圖文）的方式呈現對系館的印象。我聯想到以往看過的文字圖，便決定自行實作，這個專案因此誕生。

為了將成果漂亮地展示出來，我也藉此學習了前端開發與簡單的部署方式。雖然技術上仍有許多不足，但作為第一個充滿創意與驚喜的網頁專案，這仍是讓我感到相當自豪的一份作品。

## 專案技術總覽 (Technical Overview)
本專案分為兩個主要部分：

1. **核心生成邏輯 (Python / Jupyter Notebooks)**
   - `hanzi_art/` 資料夾包含數個 Jupyter Notebook，構成文字圖的生成管線：
     - **字元視覺密度分析** (`character_visual_density.ipynb`)：使用 PIL/Pillow 將每個漢字（以標楷體 `kaiu.ttf` 渲染）繪製在小畫布上，計算像素平均亮度作為「視覺密度」指標，並依亮度排序輸出字元表。
     - **圖片縮放** (`image_downscaler.ipynb`)：透過 OpenCV 將原始圖片縮放至適合逐像素對應字元的解析度。
     - **文字圖生成** (`art_generator.ipynb`)：核心轉換流程，讀取縮放後的圖片，將每個像素的 RGB 色彩透過 Oklab 色彩空間轉換為明度值，再依明度值查找最接近的字元填入，完成文字圖。同時生成正規化色彩對應表，供前端以彩色方式呈現文字圖。

2. **互動展示前端 (React / Vite / Tailwind CSS / DaisyUI / Express)**
   - `hanzi-art-showcase/` 以 React 18 + Vite 建構，搭配 Tailwind CSS 與 DaisyUI 元件庫進行樣式設計。主要元件包括導覽列 (Navbar)、主視覺 (Hero)、段落內容 (SectionContent)、背景段落 (BgSectionContent)、圖片對比 (Diff)、輪播 (Carousel)、主題選擇器 (ThemeSelector) 及頁尾 (Footer)。
   - 根目錄的 `index.js` 為一個簡易的 Express 伺服器，負責提供前端打包後的靜態檔案（`hanzi-art-showcase/dist`），用於部署展示。

## 兩年後的反思與未來展望 (Retrospective: 2 Years Later)
- 若不將字體粗度納入考量，明度的變化範圍實在過於狹窄，也因此導致一些奇怪的設計決定，例如儘管詳盡地計算了明度值，選字演算法卻以排名而非數值來對應字元。
- 最直接的改善方式，是改用同時具備多種字重且字形比標楷更方正的字體（例如 Noto Sans TC）。多樣的字重能擴大字元可呈現的明度範圍，而方正的字形則有助於提升字元的填充密度。
- 若將字元縮放與特殊字元納入考量，應能達到更好的視覺效果。
- 展示網站的版面設計略顯可惜，呈現方式接近投影片，且技術細節頁面並未實作；以目前的內容而言，網頁稍顯單調，效果未必優於簡報。
- 若能優化生成程式的效能，便可實作讓使用者自行上傳圖片生成文字圖的功能，或以文字圖構成動畫，大幅提升網頁的互動性與可看性。

---

<span id="english-version"></span>
# Hanzi Art Lab

An experimental project and showcase website that transforms images into Hanzi mosaic art.

## Motivation
This project began as an assignment in a freshman general Chinese course. After visiting the building of the Department of Chinese Literature, we were asked to present our impressions through a multimedia work that combined text and images. I was reminded of text-based imagery I had seen before, so I decided to build one myself. That idea eventually became this project.

To present the result in a more polished way, I also took the opportunity to learn frontend development and some basic deployment practices. Although there is still plenty of room for improvement on the technical side, this was my first web project, and it was full of creativity and surprises. It remains a piece of work that I am quite proud of.

## Technical Overview
This project consists of two main parts:

1. **Core Generation Pipeline (Python / Jupyter Notebooks)**
   - The `hanzi_art/` folder contains several Jupyter Notebooks that make up the text-art generation pipeline:
     - **Character Visual Density Analysis** (`character_visual_density.ipynb`): Uses PIL/Pillow to render each Hanzi character on a small canvas with the DFKai-SB font (`kaiu.ttf`), then calculates the average pixel brightness as a measure of "visual density." The characters are sorted by brightness to produce a lookup table.
     - **Image Downscaling** (`image_downscaler.ipynb`): Uses OpenCV to resize the source image to a resolution suitable for one-character-per-pixel mapping.
     - **Text Art Generation** (`art_generator.ipynb`): The main conversion process. It reads the downscaled image, converts each pixel's RGB color into a lightness value in the Oklab color space, and selects the closest matching character based on that value. It also generates a normalized color mapping table so the frontend can render the text art in color.

2. **Interactive Showcase Frontend (React / Vite / Tailwind CSS / DaisyUI / Express)**
   - `hanzi-art-showcase/` is built with React 18 and Vite, with Tailwind CSS and DaisyUI used for styling. Its main components include Navbar, Hero, SectionContent, BgSectionContent, Diff, Carousel, ThemeSelector, and Footer.
   - The root-level `index.js` is a simple Express server that serves the built frontend files in `hanzi-art-showcase/dist` for deployment.

## Retrospective: 2 Years Later
- Without taking font weight into account, the available lightness range is simply too narrow. This led to some odd design choices. For example, even though the lightness values were carefully calculated, the character selection algorithm mapped characters by rank instead of by the actual values.
- The most direct improvement would be to use a font that offers multiple weights and has a squarer shape than DFKai-SB, such as Noto Sans TC. A wider range of weights would expand the lightness range that the characters can represent, while squarer glyphs would help improve fill density.
- Better visual results could likely be achieved by incorporating character scaling and special characters into the system.
- The showcase website is somewhat underwhelming in its current form. Its layout feels closer to a slideshow, and the planned technical details page was never implemented. With the current content, the site feels a bit plain, and it does not necessarily work better than a presentation.
- If the generation pipeline were optimized further, it would become possible to let users upload their own images and generate text art directly on the site. Text-art animation could also be added, which would greatly improve both interactivity and presentation.