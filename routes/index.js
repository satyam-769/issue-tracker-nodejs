import express from 'express';
import homeController from '../controllers/home_controller.js';
import aboutController from '../controllers/about_controller.js';
import contactController from '../controllers/contact_controller.js';
import project from './project.js';

const router = express.Router();

router.get('/', homeController);
router.use('/project', project);
router.get('/about-us', aboutController);
router.use('/contact-us', contactController);

export default router;