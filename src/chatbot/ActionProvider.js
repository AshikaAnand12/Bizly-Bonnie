// ActionProvider starter code
class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
     ...rest
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;
   }

    greet() {
      const greetingMessage = this.createChatBotMessage("Hey! I'm Bonnie, your assistant for customer events in Palo Alto. What kind of customer event are you planning?")
      this.addMessageToState(greetingMessage)
    }
    handleCustomerDinner = () => {
      const message = this.createChatBotMessage(
        "Great! What are your goals of the event?",
        {
          widget: "dinnerOptions",
        }
      );
  
      this.addMessageToState(message);
    };

    handleLocationDetails = () =>{
      const message = this.createChatBotMessage(
        "Is there a location you want to be close by to?"
      );
      this.addMessageToState(message);
    }

    handleGuestNumber = () =>{
      const message = this.createChatBotMessage(
        "How many guests are you expecting?"
      );
      this.addMessageToState(message);
    }

    handleDateDetails = () =>{
      const message = this.createChatBotMessage(
        "When do you think you will host this event?",
        {
          widget: "dateOptions",
        }
      );
      this.addMessageToState(message);
    }

    handleElementDetails = () =>{
      const message = this.createChatBotMessage(
        "Tell me a bit about the elements you want to include in your event.",
        {
          widget: "elementOptions",
        }
      );
      this.addMessageToState(message);
    }

    handleVenueDetails = () =>{
      const message = this.createChatBotMessage(
        "What kind of venue do you imagine?",
        {
          widget: "venueOptions",
        }
      );
      this.addMessageToState(message);
    }

    handleBudgetDetails = () => {
      const message = this.createChatBotMessage(
        "Do you have a budget or any price guidance or the event?"
      );
      this.addMessageToState(message);
    }
    handleAnythingElse = () =>{
      const message = this.createChatBotMessage(
        "Anything else specific you want me to know? If you have a venue that you love or a vision for that event, let me know!",
        {
          widget: "otherOptions",
        }
      );
      this.addMessageToState(message);
    }

    addMessageToState = (message) => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    }
 }
 
 export default ActionProvider;