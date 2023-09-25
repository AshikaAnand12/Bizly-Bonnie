// export default Options;
import React from "react";
import "./Options.css";
const cache = {};
function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)));
}
importAll(require.context('../../../../public/elementimg', false, /\.(jpg|jpeg|png|gif|bmp)$/));
const elementImages = Object.keys(cache).map((key) => cache[key]);
console.log(elementImages,cache);

const ElementOptions = (props) => {
  const [optionState, setOptionState] = React.useState([]);
  const options = [
    {
      text: "Buffet style dining",
      id: 1,
    },
    { text: "Cocktail hour", id: 2 },
    { text: "Seated dining", id: 3 }
  ];

  const handleCheckboxChange = (option) => {
    setOptionState([...optionState, option.text]);
  };

  const doneHandler = () => {
    props.actionProvider.handleVenueDetails(optionState);
  }
  const checkboxesMarkup = options.map((option) => (
    <label key={option.id} className="option-label">
    <img src={elementImages[option.id - 1]} className="checkbox-images" alt="1"/>
      <input
        type="checkbox"
        onChange={() => handleCheckboxChange(option)}
        className="option-checkbox"
      />
      {option.text}
    </label>
  ));

  return (
    <div>
        <div className="options-container">
            {checkboxesMarkup}
        </div>
        <button className='ok-button' onClick={doneHandler}>Okay</button>
    </div>);
};

export default ElementOptions;
