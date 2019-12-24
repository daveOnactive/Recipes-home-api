const router = require('express').Router();
const Receipe = require('../model/Receipe');

router.get('/receipe', async (req, res) => {
  try {
    const receipeList = await Receipe.find();
    res.json(receipeList);
  } catch(err) {
    res.status(400).json({ message: err });
  }
});

router.get('/receipe/:id', async (req, res) => {
  try {
    const receipeList = await Receipe.findById(res.params.id);
    res.json(receipeList);
  } catch(err) {
    res.status(400).json({ message: err });
  }
});

router.delete('/recipe/:id', async (req, res) => {
  try {
    const removeReceipe = await Receipe.remove({ _id: res.params.id });
    res.json(removeReceipe);
  } catch(err) {
    res.status(400).json({ message: err });
  }
})

router.post('/receipe', async (req, res) => {
  res.send('hello word');
});

module.exports = router;