import React, { useState } from "react";
import "./TextArea.css";
import logo from "./img/logo_aiu.png";

const TextArea = () => {
  const [word, setWord] = useState("");
  const [bgColor, setBgColor] = useState(getRandomColor());

  const [textColor, setTextColor] = useState("black");
  const [inpColor, setInpColor] = useState("");

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const handleInpChange = (e) => {
    const newWord = e.target.value;
    setWord(newWord);
    setBgColor(getRandomColor());
  };

  const handleColorChange = (e) => {
    setInpColor(e.target.value);
  };
  const applyColorChange = () => {
    setTextColor(inpColor);
  };

  return (
    <div
      className="container"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="wrapper">
        <div className="logo__block">
          <h2 className="header">Alatoo International University</h2>
          <img className="logo" src={logo} alt="error" />
        </div>
        <div className="main-block">
          {" "}
          <div className="bg-change__block">
            <input
              type="text"
              value={word}
              onChange={handleInpChange}
              placeholder="changes to a random bg color "
              className="inp-bg"
            />
          </div>
          <div className="font-change__block">
            <div className="font-change__block__main">
              <input
                className="inp-fc"
                type="text"
                placeholder="Enter color"
                value={inpColor}
                onChange={handleColorChange}
              />
              <button className="font-change__btn" onClick={applyColorChange}>
                Apply
              </button>
            </div>

            <p>changes font-color</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextArea;
