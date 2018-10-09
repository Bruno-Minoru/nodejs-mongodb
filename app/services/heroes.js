const { Hero } = require('app/models/index');

const get = (req) => {
  return Hero.find().then(result => result).catch((error) => console.log(error));
};

const post = (req) => {
  const { body } = req;
  return Hero.create(body)
    .then(result => result);
}

module.exports = {
  get,
  post,
};
