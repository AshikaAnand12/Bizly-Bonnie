// Config starter code
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../components/ChatbotPage/Options/Options";
import DinnerOptions from "../components/ChatbotPage/Options/DinnerOptions";
import DateOptions from "../components/ChatbotPage/Options/DateOptions";
import ElementOptions from "../components/ChatbotPage/Options/ElementOptions";
import VenueOptions from "../components/ChatbotPage/Options/VenueOptions";
import OtherOptions from "../components/ChatbotPage/Options/OtherOptions";

const config = {
  botName: "Bonnie",
  initialMessages: [
    createChatBotMessage(`Hey, I'm Bonnie! Your assistant for customer events in Palo Alto. What kind of customer event are you planning?`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName:"dinnerOptions",
      widgetFunc: (props) => <DinnerOptions {...props} />,
    },
    {
      widgetName:"dateOptions",
      widgetFunc: (props) => <DateOptions {...props} />,
    },
    {
      widgetName:"elementOptions",
      widgetFunc: (props) => <ElementOptions {...props} />,
    },
    {
      widgetName:"venueOptions",
      widgetFunc: (props) => <VenueOptions {...props} />,
    },
    {
      widgetName:"otherOptions",
      widgetFunc: (props) => <OtherOptions {...props} />,
    }
  ],
};

export default config;