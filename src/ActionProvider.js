class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    handleMenu = () => {
      const message = this.createChatBotMessage("Our menu includes Pizza, Biryani, and Chicken. Would you like to place an order?");
      this.addMessageToState(message);
    };
  
    handleOrderStatus = () => {
      const message = this.createChatBotMessage("Please provide your order ID to track the status.");
      this.addMessageToState(message);
    };
  
    handleContact = () => {
      const message = this.createChatBotMessage("You can contact us at reyanshsidha1@gmail.com");
      this.addMessageToState(message);
    };
  
    handleUnknown = () => {
      const message = this.createChatBotMessage("I'm sorry, I didn't understand that. Can you please rephrase?");
      this.addMessageToState(message);
    };
  
    addMessageToState = (message) => {
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
  }
  
  export default ActionProvider;
  