const router = require('express').Router();
const receipeRoute = require('../controllers/receipeRoute');

router.get('/receipe', receipeRoute.getAllReceipe );

router.get('/receipe/:id', receipeRoute.getOneReceipe );

router.put('/receipe/:id', receipeRoute.editReceipe );

router.delete('/recipe/:id', receipeRoute.deleteReceipe );

router.post('/receipe', receipeRoute.addReceipe );

module.exports = router;