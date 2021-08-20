const { User } = require('../models');

const userData = [
    {
        username: "nullam",
        twitter: "",
        github: "",
        email: "nullam@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "haracyd",
        twitter: "",
        github: "",
        email: "haracyd@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "izzyc",
        twitter: "",
        github: "",
        email: "izzy_c@gmail.com",
        password: "p@ssword3"
    },

]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;