//var dbUrl = `mongodb://localhost:27017/cms`;

const dbUrl = 'mongodb://'+process.env.DB_HOST+':'+process.env.DB_PORT+'/'+process.env.DB_DATABASE;

module.exports = dbUrl;