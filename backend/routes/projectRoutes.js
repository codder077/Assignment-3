const express = require('express');
const { getProjects, createProject } = require('../controllers/ProjectController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

// Project routes
router.get('/', authenticateToken, getProjects);
router.post('/', authenticateToken, createProject);

module.exports = router;
