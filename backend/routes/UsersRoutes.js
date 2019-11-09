module.exports = (app) => {
    const users = require('../controller/UsersController');

    app.post('/api/users/add', users.create);
    app.get('/api/users', users.findAll);
    app.get('/api/users/:id', users.findOne);
    app.post('/api/users/update/:id', users.update);
    app.delete('/api/users/delete/:id', users.delete);
}
