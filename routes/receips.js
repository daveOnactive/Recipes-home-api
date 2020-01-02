const router = require('express').Router();
const receipeRoute = require('../controllers/receipeRoute');

<<<<<<< HEAD
router.get('/recipe', receipeRoute.getAllReceipe );

router.get('/recipe/:id', receipeRoute.getOneReceipe );

router.patch('/recipe/:id', receipeRoute.editReceipe );

router.delete('/recipe/:id', receipeRoute.deleteReceipe );

router.post('/recipe', receipeRoute.addReceipe );
=======
router.get('/receipe', receipeRoute.getAllReceipe );

router.get('/receipe/:id', receipeRoute.getOneReceipe );

router.put('/receipe/:id', receipeRoute.editReceipe );

router.delete('/recipe/:id', receipeRoute.deleteReceipe );

router.post('/receipe', receipeRoute.addReceipe );
>>>>>>> 0d2a9044a9a6085a20e93ec657999f1b76bec6d0

module.exports = router;