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

router.put('/receipe/:id', async (req, res) => {
  const receipe = new Receipe({});
  try {
    const update = await Receipe.updateOne({ _id: req.params.id }, receipe);
    res.status(200).json(update);
  } catch(err) {
    res.status(400).json({ message: err });
  }
})

router.delete('/recipe/:id', async (req, res) => {
  try {
    const removeReceipe = await Receipe.remove({ _id: res.params.id });
    res.json(removeReceipe);
  } catch(err) {
    res.status(400).json({ message: err });
  }
})

router.post('/receipe', async (req, res) => {
  const receipe = new Receipe({});

  try {
    const receipeList = await Receipe.save(receipe);
    res.status(200).json({ data: receipeList });
  } catch(err) {
    res.status(400).json({ message: err })
  }
});

module.exports = router;