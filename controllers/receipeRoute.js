const Receipe = require('../model/Receipe');
const { convertToArray } = require('./manipulate');
const { receipeValidation } = require('./validation');

exports.addReceipe = async (req, res, next) => {
  const { error } = receipeValidation(req.body);
  if(error) {
    return res.status(400).send(error.details[0].message);
  }

  // check if title already exist
  const titleExist = await Receipe.findOne({ title: req.body.title });
  if(titleExist) {
    return res.status(400).send('Receipe already exist in the DB');
  }

  const receipe = new Receipe({
    title: req.body.title,
    description: req.body.description,
    ingredient: convertToArray(req.body.ingredient),
    beforeYouCook: convertToArray(req.body.beforeYouCook),
    cookingDirections: convertToArray(req.body.cookingDirections),
    imageUrl: req.body.imageUrl
  });

  try {
    const receipeList = await receipe.save(receipe);
    res.status(200).json({ message: 'receipe added to the DB'});
    next();
  } catch(err) {
    res.status(400).json({ message: err })
  }
};

exports.getAllReceipe = async (req, res, next) => {
  try {
    const receipeList = await Receipe.find();
    res.json(receipeList);
    next();
  } catch(err) {
    res.status(400).json({ message: err });
  }
};

exports.getOneReceipe = async (req, res, next) => {
  try {
    const receipeList = await Receipe.findById(req.params.id);
    res.json(receipeList);
    next();
  } catch(err) {
    res.status(400).json({ message: err });
  }
};

exports.editReceipe = async (req, res,next) => {
  const { error } = receipeValidation(req.body);
  if(error) {
    return res.status(400).send(error.details[0].message);
  }

  const receipe = new Receipe({
    title: req.body.title,
    description: req.body.description,
    ingredient: convertToArray(req.body.ingredient),
    beforeYouCook: convertToArray(req.body.beforeYouCook),
    cookingDirections: convertToArray(req.body.cookingDirections),
    imageUrl: req.body.imageUrl
  });

  try {
    const update = await Receipe.updateOne({ _id: req.params.id }, receipe);
    res.status(200).json(update);
    next();
  } catch(err) {
    res.status(400).json({ message: err });
  }
};

exports.deleteReceipe = async (req, res, next) => {
  try {
    const removeReceipe = await Receipe.remove({ _id: req.params.id });
    res.json(removeReceipe);
    next();
  } catch(err) {
    res.status(400).json({ message: err });
  }
}