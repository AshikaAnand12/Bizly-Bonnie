// export default Options;
import React from "react";
import "./Options.css";

const Options = (props) => {
  const [optionState, setOptionState] = React.useState([]);
  const options = [
    {
      text: "Book Customer Dinner",
      id: 1,
    },
    { text: "Designing an Event", id: 6 },
    { text: "Booking a Venue", id: 2 },
    { text: "Managing Guests", id: 3 },
    { text: "Finding Leads", id: 4 },
    { text: "Tracking ROI", id: 5 },
  ];

  // const handleCheckboxChange = (option) => {
  //   if (option.handler) {
  //     option.handler();
  //   }
  // };

  const handleCheckboxChange = (option) => {
    setOptionState([...optionState, option.text]);
  };

  const doneHandler = () => {
    props.actionProvider.handleCustomerDinner(optionState);
  }
  const checkboxesMarkup = options.map((option) => (
    <label key={option.id} className="option-label">
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

export default Options;
