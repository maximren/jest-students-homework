const Admin = require('./admin');
const Chat = require('./chat');
const User = require('./user');

describe('Test class Admin', () => {
    it('Has to remove user from chat', () => {
        const Adm = new Admin();
        const spyAdm = jest.spyOn(Chat.prototype, 'removeUser');
        const AdmChat = new Chat();
        const Patrick = new User('Patrick', 'Linberg', '36');
        Patrick.joinChat(AdmChat);
        Adm.removeUserFromChat(Patrick, AdmChat);
        expect(spyAdm).toBeCalledWith(Patrick);
    });

    it('Has to ban user', () => {
        const Adm1 = new Admin();
        const spyAdmin = jest.spyOn(Chat.prototype, 'removeUser');
        const AdminChat = new Chat();
        const Aleksi = new User('Aleksi', 'Jalli', '37');
        Aleksi.joinChat(AdminChat);
        Adm1.joinChat(AdminChat);
        Adm1.banUser(Aleksi);
        expect(spyAdmin).toBeCalledWith(Aleksi);
        expect(Aleksi.isBanned).toBeTruthy();
    });

    it('Has to unban user', () => {
        const Adm2 = new Admin();
        const UnbanChat = new Chat();
        const Oliver = new User('Oliver', 'Queen', '38');
        Oliver.joinChat(UnbanChat);
        Adm2.joinChat(UnbanChat);
        Adm2.banUser(Oliver);
        Adm2.unbanUser(Oliver);
        expect(Oliver.isBanned).toBeFalsy();
    });
});
