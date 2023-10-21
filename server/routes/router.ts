import {Router} from 'express';
import UserController from '../controllers/UserController';
import EventController from '../controllers/EventController';
import TagController from '../controllers/TagController';
import checkAuth from '../middlewares/checkAuth';
const router = Router();

router.post('/users/register', UserController.register);
router.post('/users/login', UserController.login);
// router.get('/users/verify', UserController.verify);


router.post('/events/register/:id', checkAuth,EventController.register);
router.post('/events/create', checkAuth,EventController.create);
router.get('/events/', EventController.get);
router.get('/events/:id', EventController.getOne);
router.get('/events/participants', EventController.getParticipants)
router.delete('/events/:id', EventController.delete)

router.post('/tags/create', TagController.create);
router.get('/tags/', TagController.get);
router.get('/tags/:id', TagController.getOne);

export default router;