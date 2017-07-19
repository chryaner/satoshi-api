import Users from '../models/users';

const index = (req, res, next) => {

    Users.find({}).exec((err, users) => {

        return res.json({ users })

    });

};

export {index}