class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("menu")) {
        this.actionProvider.handleMenu();
      } else if (lowerCaseMessage.includes("order")) {
        this.actionProvider.handleOrderStatus();
      } else if (lowerCaseMessage.includes("contact")) {
        this.actionProvider.handleContact();
      } else {
        this.actionProvider.handleUnknown();
      }
    }
  }
  
  export default MessageParser;
  