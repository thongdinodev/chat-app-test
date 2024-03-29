const generateMessage = (username, text) => {
    return {
        username,
        text,
        createdAt: new Date().getTime()
    }
};

const generateLocationMessage = (username, url) => {
    return {
        username,
        url,
        locationCreatedAt: new Date().getTime()
    }
}

module.exports = {
    generateMessage,
    generateLocationMessage
};