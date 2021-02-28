const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "secrets_garden",
    mongoUri: 'mongodb+srv://mobik:123qwe@social.nerk4.mongodb.net/social?retryWrites=true&w=majority',
    dbName: 'social'
}

export default config
