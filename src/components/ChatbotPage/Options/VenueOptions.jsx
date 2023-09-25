// export default Options;
import React from "react";
import "./Options.css";
const cache = {};
function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)));
}
importAll(require.context('../../../../public/venueimg', false, /\.(jpg|jpeg|png|gif|bmp)$/));
const elementImages = Object.keys(cache).map((key) => cache[key]);
console.log(elementImages,cache);

const VenueOptions = (props) => {
  const [optionState, setOptionState] = React.useState([]);
  const options = [
    {
      text: "Live music and bar vibes",
      id: 1,
    },
    { text: "Office style ", id: 2 },
    { text: "Outdoorsy farm-to-table", id: 3 },
    // { text: "Presentation", id: 4 },
    // { text: "Seated dining", id: 5 },
    // { text: "Buffet style dining", id: 6 },
  ];

  const handleCheckboxChange = (option) => {
    setOptionState([...optionState, option.text]);
  };

  const doneHandler = () => {
    props.actionProvider.handleBudgetDetails(optionState);
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

export default VenueOptions;
