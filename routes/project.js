import express from 'express';

import {create, project, createIssue } from '../controllers/project_controller.js';
const router = express.Router();

router.post('/create', create);
router.get('/:id', project);
router.post('/:id', createIssue);

export default router;