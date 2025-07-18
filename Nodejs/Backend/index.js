const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory users
let users = [
  { id: 1, name: 'Ram' },
  { id: 2, name: 'Raj' }
];

// Routes
app.get('/', (req, res) => res.send('API is running'));
app.get('/api/users', (req, res) => res.json(users));
app.post('/api/users', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: 'Name required' });
  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).json(newUser);
});
app.put('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).json({ message: 'Not found' });
  user.name = req.body.name || user.name;
  res.json(user);
});
app.delete('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter(u => u.id !== id);
  res.json({ message: 'User deleted' });
});

// Start
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));