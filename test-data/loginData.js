const loginData = {
    validLogin: {
        username: 'practice',
        password: 'SuperSecretPassword!'
    },

    invalidPassword: {
        username: 'practice',
        password: 'supersecret'
    },

    emptyFields: {
        username: '',
        password: ''
    }
};

module.exports = loginData;