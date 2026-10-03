
const loginValidationData = [
    {
        username: 'practice',
        password: 'supersecret',
        expectedMesage: 'Your password is invalid!'
    },

    {
        username: 'practic',
        password: 'SuperSecretPassword!',
        expectedMesage: 'Your password is invalid!'
    },

    {
        username: 'wronguser',
        password: 'wrongpassword',
        expectedMesage: 'Your password is invalid!'
    }
];

module.exports = loginValidationData;