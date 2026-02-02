const users = require("./../../data/users.json");

const getAllUsers = (req, res) => {
    res.json({ success: true, data: users });
    // res.json(users);
};

const getUserByName = (req, res) => {
    let name = req.params.name;
    let data = null;
    users.forEach(user => {
        if (user.name === name) {
            data = user;
        }
    });

    res.json({ success: !!data, data });
};

const createUser = (req, res) => {
    let user = req.body;
    let found = false;

    for (let i = 0; i < users.length; i++) {
        if (users[i].name === user.name) {
            found = true;
            break;
        }
    }

    if (found) {
        res.json({ success: false, message: `username is already used` });
    } else {
        if (!user.role || user.role !== 'admin') {
            user.role = 'user';
        }
        users.push(user);
        // res.status(201).json();
        res.json({ success: true });
    }

};

const deleteUserByIndex = (req, res) => {
    users.splice(req.params.index, 1);
    res.status(201).json();
};

const updateUserByIndex = (req, res) => {
    users[req.params.index] = req.body;
    res.status(201).json();
};


module.exports = {
    getAllUsers, 
    getUserByName, 
    createUser, 
    deleteUserByIndex, 
    updateUserByIndex
};
