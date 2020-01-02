const router = require('express').Router();
const receipeRoute = require('../controllers/receipeRoute');


router.get('/recipe', receipeRoute.getAllReceipe );

router.get('/recipe/:id', receipeRoute.getOneReceipe );

router.patch('/recipe/:id', receipeRoute.editReceipe );

router.delete('/recipe/:id', receipeRoute.deleteReceipe );

router.post('/recipe', receipeRoute.addReceipe );

module.exports = router;