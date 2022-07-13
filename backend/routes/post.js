const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');//à installer

const postCtrl = require('../controllers/post');

router.get('/', auth, postCtrl.getAllPost); // renvoie le tableau de tous les posts
router.post('/', auth, multer, postCtrl.createPost); // capture et enregistre un post texte +image

router.put('/:id', auth, multer, postCtrl.modifyPost); // met à jour le post avec l'id fourni
router.delete('/:id', auth, multer, postCtrl.deletePost); // supprime le post avec l'id fourni

//router.post('/:id/like', auth, postCtrl.like); // enregistre un like id userId fourni
module.exports = router;


