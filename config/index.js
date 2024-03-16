require('dotenv').config();

const ENV = process.env.NODE_ENV || 'development';

const config = {
  development: {
    port: process.env.DEV_PORT || 3000,
    dbUri: process.env.DEV_MONGODB_URI,
    aiApiKey: process.env.DEV_AI_API_KEY,
  },
  production: {
    port: process.env.PORT,
    dbUri: process.env.MONGODB_URI,
    aiApiKey: process.env.AI_API_KEY,
  },
};

module.exports = config[ENV];
