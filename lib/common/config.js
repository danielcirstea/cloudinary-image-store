module.exports = () => ({
    app: {
        port: process.env.PORT || 3000,
        secret: process.env.JWT_SECRET || 'someSecret',
    },
    cloudinary: {
        cloud: process.env.CLOUDINARY_CLOUD,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
    },
    mock: {
        username: process.env.MOCK_USERNAME || 'admin', //never do this, use database
        password: process.env.MOCK_PASSWORD || 'pass',
    }
});