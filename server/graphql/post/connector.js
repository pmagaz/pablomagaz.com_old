import Sequelize from 'sequelize'
import casual from 'casual'

const db = new Sequelize('ghost_production', 'ghost-360', 'cdedae9acb4afb1cbd95', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }

})

const PostModel = db.define('post', {
  id: { type: Sequelize.STRING, primaryKey: true},
  uuid: { type: Sequelize.STRING },
  title: { type: Sequelize.STRING },
  slug: { type: Sequelize.STRING },
  feature_image: { type: Sequelize.STRING },
  created_at: { type: Sequelize.STRING },
  created_by: { type: Sequelize.STRING },
  published_at: { type: Sequelize.STRING },
  opening: { type: Sequelize.STRING },
})

/*
const AuthorModel = db.define('author', {
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING },
})*/

//AuthorModel.hasMany(PostModel)
//AuthorModel.belongsTo(PostModel)
casual.seed(123)

db.sync({ force: true }).then(() => {
  //_.times(10, () => {
  /*return AuthorModel.create{
    firstName: casual.first_name,
    lastName: casual.last_name,
  }).then((author) => {
    return author.createPost({
      title: `A post by ${author.firstName}`,
      text: casual.sentences(3),
    })
  })*/
  //});
})