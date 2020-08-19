module.exports = () => ({
    app: {
        port: process.env.PORT || 3000,
        secret: process.env.JWT_SECRET || 'someSecret',
    },
    mock: {
        username: process.env.MOCK_USERNAME || 'admin',
        password: process.env.MOCK_PASSWORD || 'pass',
    }
});