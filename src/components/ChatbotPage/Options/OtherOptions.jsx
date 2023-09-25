import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Nothing Else",
      handler: ()=>{
        return <p> Thanks!</p>
      },
      id: 1,
    },
    { text: "Talk to Bonnie Again", handler: () => {}, id: 2 },
    { text: "Call us at +1(abc)-ijk-xyz", handler: () => {}, id: 3 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;