import express from 'express';
import homeController from '../controllers/home_controller.js';
import project from './project.js';

const router = express.Router();

// console.log('router loaded');

router.get('/', homeController);
router.use('/project', project);

export default router;