require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3001,
    database: process.env.DATABASE || 'mongodb+srv://ElBarto:xq28SN2LZyMNy66J@cluster0.xnqghyd.mongodb.net/?retryWrites=true&w=majority'
};