const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

router.post('/register',userController.userRegister);
router.post('/find',userController.userFind);

router.post('/create',userController.createUser);
router.get('/:uid',userController.getUser);
router.put('/edit/:uid', userController.updateUser);
router.delete('/delete:/uid',userController.deleteUser);


// router.get('/list',userController.userList);
// router.get('/edit/:id',userController.userEditPage);
// router.post('/edit/:id',userController.userEdit); 
// router.get('/search',userController.userSearchPage);
// router.post('/search',userController.userSearch);
// router.get('/insert',userController.userInsertPage);
// router.post('/insert',userController.userInsert);
// router.get('/delete/:id',userController.userDelete);
// router.get('/did/:id',userController.userDIDPage);
// router.post('/did/:id',userController.userCreateDID);

module.exports = router;
