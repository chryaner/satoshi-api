import mongoose, { Schema } from 'mongoose';
// mongoose.Promise = require('bluebird');

// Define user schema
var userSchema = new Schema({
    nickname: {
        type: String,
        unique: true,
    },
    deviceId: {
        type: String,
        unique: true,
    }
});

mongoose.connect('mongodb://localhost/users');

// Export Mongoose model
export default mongoose.model('users', userSchema);