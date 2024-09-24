// backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample data (This can be replaced with a database later)
let projects = [
  { id: 1, name: 'Project Alpha', description: 'This is project alpha' },
  { id: 2, name: 'Project Beta', description: 'This is project beta' },
];

// Routes
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
