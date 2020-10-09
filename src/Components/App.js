import React from "react";
import "../main.css";

import Logo from "./Logo.js";
import Featured from "./Featured.js";
import Links from "./Links";
import Email from "./Email.js";

function App() {
  return (
    <div>
      {/* Logo */}
      <Logo />
      {/* Name thecodergeek */}
      {/* <h2 className="page-name">thecodergeek</h2> */}

      {/* Featured links */}
      <h2 className="featured">Featured Links</h2>
      <Featured
        link="https://www.algoexpert.io/thecodergeek"
        name="Algoexpert👨‍💻: Use code 'thecodergeek' to get 10% off"
      />

      {/* Other Links */}
      <h2 className="title">Important Links</h2>
      <Links
        link="https://t.me/thecodergeek"
        name="Join our Telegram group to get Free Programming resources"
      />
      <Links
        link="https://amazon.in/shop/thecodergeek"
        name="🛍️ Visit Our Amazon Store"
      />
      <h2 className="title">
        Subscribe to get More updates <span>👇</span>
      </h2>

      <Email />
    </div>
  );
}

export default App;
