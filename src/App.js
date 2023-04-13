import "./App.css";
import { useState } from "react";
import leftImage from "../src/left.png";
import rightImage from "../src/right.png";
import ICON from "../src/ICON.png";
import middleIMG from "../src/Item.png";
const App = () => {
  const [background, setBackground] = useState(true);
  const [buttonFooter, setButtonFooter] = useState(true);
  const handleClick = () => {
    setBackground((prevIsOn) => !prevIsOn);
  };
  return (
    <>
      <div className={background ? "main_div" : "main_div_blur"}>
        <div className="left_div">
          <div style={{ height: "60vh" }}>
            <p className="left_div_center_para">// THE MODERN COMPANY</p>
          </div>
          <div>
            <p className="left_div_down_para">001</p>
          </div>
        </div>
        <div className="header">
          <div className="left_header">
            <div className="left_header_div">
              <img src={leftImage} />
            </div>
            <div>
              <p className="left_para">ENTRY TEST_</p>
            </div>
          </div>
          <div className="right_header">
            <div>
              <p className="right_para">C:\EXERCISE\PROGRAMS\01.EXE</p>
            </div>
            <div className="right_header_div">
              <img src={rightImage} />
            </div>
          </div>
        </div>
        <div className={background ? "mid_img_hide" : "mid_img"}>
          <img src={middleIMG} />
        </div>
        <div className="footer_div">
          <div className="footer_main_div">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                className={background ? "btn" : "btn_blur"}
                onClick={() => {
                  setBackground(false);
                }}
              >
                <img src={ICON} className="img_btn" />
                {background ? "REVEAL NOW" : "BACK HOME"}
              </button>
              <button
                className={background ? "btn" : "btn_blur"}
                onClick={handleClick}
              >
                <img src={ICON} className="img_btn" />
                {background ? "REVEAL NOW" : "BACK HOME"}
              </button>
            </div>
            <div>
              <p className="footer_para"> © 2023 TPW - ALL RIGHTS RESERVED.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
