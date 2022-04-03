const ROLE = {
    ADMIN: 'admin',
    USER: 'user'

}
module.exports = {
    ROLE,
    users: [
        {id: 1, name: 'Samuel', role: ROLE.ADMIN},
        {id: 2, name: 'Jeremiah', role: ROLE.USER},
        {id: 3, name: 'Emmanuel', role: ROLE.USER},
        {id: 4, name: 'Yacob', role: ROLE.USER}
        
    ],
    projects: [
        {id: 1, name: 'Samuels Weather Dashbord project', userId: 1},
        {id: 1, name: 'Jeremiahs Weather Dashbord project', userId: 2},
        {id: 1, name: 'Emmanuels Note taker project', userId: 3},
        {id: 1, name: 'Yacobs Employee tracker  project', userId: 4},

    ]
};