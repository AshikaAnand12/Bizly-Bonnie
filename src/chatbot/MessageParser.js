// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message)
      const lowercase = message.toLowerCase()
      const containsNumber = /\d+/.test(lowercase);
      const containsSpecialCharacter = /\$/.test(lowercase);
      if (lowercase.includes("hi") || lowercase.includes("hello") || lowercase.includes("hey")) {
        this.actionProvider.greet()
      }
      else if(lowercase.includes("car") || lowercase.includes("transportation") || lowercase.includes("airport") || lowercase.includes("lyft") || lowercase.includes("walking")){
        this.actionProvider.handleGuestNumber()
      }
      else if(containsNumber && (containsSpecialCharacter || lowercase.includes("budget") || lowercase.includes("price") || lowercase.includes("money") || lowercase.includes("spend") || lowercase.includes("cost") || lowercase.includes("afford") || lowercase.includes("expensive") || lowercase.includes("cheap") || lowercase.includes("inexpensive") || lowercase.includes("pricey") || lowercase.includes("affordable") || lowercase.includes("expansive"))){
        this.actionProvider.handleAnythingElse()
      }
      else if(containsNumber && (lowercase.includes("guest") || lowercase.includes("people") || lowercase.includes("attendees") || lowercase.includes("guys"))){
        this.actionProvider.handleDateDetails()
      }
    }
  }
  
  export default MessageParser;