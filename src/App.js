import video from "./assets/video/video-2.mp4";
import logo from "./assets/img/logo.svg";
import tg from "./assets/img/tg.svg";
import tw from "./assets/img/tw.svg";
import bgleft from "./assets/img/left.png";
import bgright from "./assets/img/right.png";
import box from "./assets/img/box.png";
import pinksale from "./assets/img/pinksale.png";
import dexview from "./assets/img/dexview.webp";
import "./App.css";

function App() {
  return (
    <div className="App"> 
      <div className="App-content">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="content">
          <img className="content-box-img" src={box} alt="" />
          <p>
            A unique and stylish NFT collection created by the Azuki 2.0
            Developers team. We are an art collection and a complex ecosystem
            around NFTs. NFT owners can enjoy special privileges such as
            participating in the Azuki Pepe community, owning limited editions,
            and even trading on NFT marketplaces.
            <br />
            <span className="ca">
              CA: 0xcDf6D021DC97f4eB26D69013725447082ac9568f
            </span>
            <br />
            <div className="partners">
              <span>Our partners:</span>
              <div className="partners-list">
                <a
                  className="partners-item"
                  href="https://www.dexview.com/eth/0xcDf6D021DC97f4eB26D69013725447082ac9568f"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img src={dexview} alt="" />
                </a>
                <a
                  className="partners-item"
                  href="https://www.pinksale.finance/launchpad/0xE6508dc0a44e014861Be8284b163Ac7360DA00D2?chain=ETH"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img src={pinksale} alt="" />
                </a>
              </div>
            </div>
            {/* <span>Contact: .com</span> */}
          </p>
        </div>
        <div className="btn-group">
          <a
            className="btn"
            href="https://t.me/azukipepe"
            target="_blank"
            rel="noopener noreferrer">
            <img src={tg} alt="" />
          </a>
          <a
            className="btn"
            href="https://twitter.com/azukipepe"
            target="_blank"
            rel="noopener noreferrer">
            <img src={tw} alt="" />
          </a>
        </div>
        <div className="bg bg-left">
          <img src={bgleft} alt="" />
        </div>
        <div className="bg bg-right">
          <img src={bgright} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
