const { Comment } = require('../models');

const commentData = [
    {
        user_id: 3,
        post_id: 2,
        comment_text: "This is great news!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Nice tool!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;