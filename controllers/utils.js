function getPosts() {
    return Post.findAll({
        attributes: [
          'id',
          'post_url',
          'title',
          'created_at',
          [sequelize.literal('(SELECT AVG(rating) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
        ],
        include: [
          {
            model: Comment,
            attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            include: {
              model: User,
              attributes: ['username']
            }
          },
          {
            model: User,
            attributes: ['username']
          }
        ]
      })
        .then(dbPostData => {
          const posts = dbPostData.map(post => post.get({ plain: true }));
        
          return posts;
        })   
}

module.exports = {
    getPosts
}