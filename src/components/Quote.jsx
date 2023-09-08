import React from "react";
import Button from "./Button";

const Quote = () => {
  return (
    <div className="quote-container">
      <p>We take privacy seriously</p>
      <h2>Before you get started</h2>
      <p>
        "We won't share your answers with anyone (and won't ever tell you which
        friend said what about you)"
      </p>
      <div>
        <span>with love,</span>
        <img
          src="https://img.icons8.com/ios/50/signature.png"
          alt="signature"
        />
      </div>
      <Button text="Start a text" />
    </div>
  );
};

export default Quote;
