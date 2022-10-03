import React from "react";
import "./Banner.css";

const Banner = () => {
  function ellipsis(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">test</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
            {ellipsis("At a reception for the launch of a new perfume, a man named Frédéric sees a photo of the ruins of an old château by the sea. His mind takes him back to when he was a young boy, walking up to the gate of the château and speaking with a girl who appears to be a little older than he is. Young Frédéric opens the gate and the girl tells him to go to sleep, and later she returns and wakes him. He leaves her and closes the gate behind him. The girl tells him to open the gate but he promises her that he will be back to free her. Frédéric's mind then comes back to reality and he becomes convinced that the meeting between him and the girl actually happened. He tells his mother, who begins to act strangely and tells him he must have imagined it. He does not agree and sets out to find the girl and set her free.", 100)}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
