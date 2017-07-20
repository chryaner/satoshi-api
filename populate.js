import mongoose from 'mongoose';
import User from './models/users';

const users = [
    {
        nickname: 'iliya',
        deviceId: 'TODO DeviceID',
    }
];

// Connect to MongoDB
mongoose.connect('mongodb://localhost/users');

// Go through each user 
users.map(data => {
    // Initialize a model with user data
    const user = new User(data);
    // and save it into the database
    user.save();
});
