const User = require('./user');
const Chat = require('./chat');

describe('Test class User', () => {
    it('Has to check user is in chat', () => {
        const ChatWithUser = new Chat();
        const UserJohn = new User('John', 'Doe', '20');
        UserJohn.joinChat(ChatWithUser);
        expect(UserJohn.isInChat()).toBeTruthy();
    });

    it('Has to check user is not in chat', () => {
        const UserDan = new User('Dan', 'Doe', '30');
        expect(UserDan.isInChat()).toBeFalsy();
    });

    it('Has to get user id', () => {
        const Andrew = new User('Andrew', 'Smith', '31');
        expect(Andrew.getUserId()).toBe('31');
    });

    it('Has to get user full name', () => {
        const Maxim = new User('Maxim', 'Maxim', '32');
        expect(Maxim.getUserFullName()).toBe('Maxim Maxim');
    });

    it('Has to speak', () => {
        const bodyaSpy = jest.spyOn(Chat.prototype, 'displayUserMessage');
        const Bodya = new User('Bodya', 'Bodya', '33');
        const bodyaChat = new Chat();
        Bodya.joinChat(bodyaChat);
        const msg = 'Hello';
        Bodya.speak(msg);
        expect(bodyaSpy).toBeCalledWith(Bodya, msg);
    });

    it('Has to join chat', () => {
        const spyJoin = jest.spyOn(Chat.prototype, 'addNewUser');
        const joinToChat = new Chat();
        const Oleg = new User('Oleg', 'Oleg', '34');
        Oleg.joinChat(joinToChat);
        expect(spyJoin).toBeCalledWith(Oleg);
    });

    it('Has to leave chat', () => {
        const spyRemove = jest.spyOn(Chat.prototype, 'removeUser');
        const RemoveChat = new Chat();
        const Finn = new User('Finn', 'Andersen', '35');
        Finn.joinChat(RemoveChat);
        Finn.leaveChat();
        expect(spyRemove).toBeCalledWith(Finn);
    });
});

