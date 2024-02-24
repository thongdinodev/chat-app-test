const users = [];

// addUser, removeUser, getUser, getUserInRoom

const addUser = ({ id, username, room }) => {
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase()

    // Validate the data
    if (!username || !room) {
        return {
            error: 'Username and room are required!'
        }
    }

    // check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // validate username
    if (existingUser) {
        return {
            error: 'Username is in use!'
        }
    }

    // store user
    const user = { id, username, room };
    users.push(user);
    return { user };
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    const userFound = users.find((user) => user.id === id);
    return userFound;
};

const getUserInRoom = (room) => {
    return users.filter((user) => user.room === room.trim().toLowerCase());
}

addUser({
    id: 22,
    username: 'Andrew',
    room: 'South Philly'
});

addUser({
    id: 33,
    username: 'Mike',
    room: 'South Philly'
});

addUser({
    id: 44,
    username: 'Jack',
    room: 'Center City'
});


module.exports = {
    addUser,
    removeUser,
    getUser,
    getUserInRoom
}

