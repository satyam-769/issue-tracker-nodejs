import express from 'express';

import {create, project, createIssue, deleteIssue } from '../controllers/project_controller.js';
const router = express.Router();

router.post('/create', create);
router.get('/:id', project);
router.post('/:id', createIssue);
router.get('/p_id/:projectId/issue_id/:issueId', deleteIssue);

export default router;