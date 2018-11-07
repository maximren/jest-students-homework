const Chat = require('./chat');
const chat = new Chat();
const User = require('./user');

describe('Test class Chat', () => {

  it('Example test case', () => {
    expect(chat.logMessage('test')).toBe('Chat log: test');
  })

  it('Has to add new user', () => {
    const Ivan = new User("Ivan", "Van", "21");
    const chatTrue = new Chat();
    chatTrue.addNewUser(Ivan);
    expect(chatTrue.users.length).toBe(1);
  });

  it('Has to not add banned user', () => {
    const Max = new User("Max", "Ren", "10");
    const chatFalse = new Chat();
    Max.isBanned = true;
    chatFalse.addNewUser(Max);
    expect(chatFalse.users.length).toBe(0); 
  });

  it('Has to remove user', () => {
    const Chat1 = new Chat();
    const Lel = new User('Lel', 'Lol', '13');
    Chat1.addNewUser(Lel);
    Chat1.removeUser(Lel);
    expect(Chat1.users.length).toBe(0);
  });

  it('Has to remove defunct user', () => {
    const ChatErr = new Chat();
    const Pan = new User('Pan', 'Kek', '15');
    const Kek = new User('Kek', 'Pan', '16');
    ChatErr.addNewUser(Pan);
    const lenghtBeforeRemoving = ChatErr.users.length;
    ChatErr.removeUser(Kek);
    expect(ChatErr.users.length).toBe(lenghtBeforeRemoving);
  });

  it('Has to display user message', () => {
    const Adam = new User('Adam', 'Friberg', '33');
    const spy = spyOn(console, 'log');
    const message = 'hello';
    chat.displayUserMessage(Adam, message);
    expect(spy).toBeCalledWith("Adam Friberg says: hello");
  })

});

