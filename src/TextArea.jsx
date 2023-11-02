import React, { useState } from "react";
import "./TextArea.css";
import logo from "./img/logo_aiu.png";

const TextArea = () => {
  const [word, setWord] = useState("");
  const [bgColor, setBgColor] = useState(getRandomColor());

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

  return (
    <div className="container" style={{ backgroundColor: bgColor }}>
      <img className="logo" src={logo} alt="error" />
      <input
        type="text"
        value={word}
        onChange={handleInpChange}
        placeholder="changes to a random bg color "
      />
    </div>
  );
};

export default TextArea;
