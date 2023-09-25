// export default Options;
import React from "react";
import "./Options.css";

const DinnerOptions = (props) => {
    const [dinnerState, setDinnerState] = React.useState([]);
  const options = [
    {
      text: "to reconnect",
      id: 1,
    },
    { text: "generate new leads", id: 2 },
    { text: "convert your sales pipeline", id: 3 },
  ];

  const handleCheckboxChange = (option) => {
    setDinnerState([...dinnerState, option.text]);
  };

    const doneHandler = () => {
        props.actionProvider.handleLocationDetails(dinnerState);
    }

  const checkboxesMarkup = options.map((option) => (
    <div key={option.id} className="option-container">
      <label className="option-label">
        <input
          type="checkbox"
          onChange={() => handleCheckboxChange(option)}
          className="option-checkbox"
        />
        {option.text}
      </label>
    </div>
  ));

  return (
    <div>
        <div className="options-container">
            {checkboxesMarkup}
        </div>
        <button className='ok-button' onClick={doneHandler}>Okay</button>
    </div>);
};

export default DinnerOptions;
