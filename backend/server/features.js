import express from 'express';
const router = express.Router();

// In-memory storage
const students = [];
const classes = [];

// Add New Student
router.post('/student', (req, res) => {
  const { name, age, className } = req.body;
  if (!name || !age || !className) {
    return res.status(400).json({ message: 'Missing fields' });
  }
  students.push({ name, age, className });
  res.json({ message: 'Student added', student: { name, age, className } });
});

// Create Class
router.post('/class', (req, res) => {
  const { className, teacher } = req.body;
  if (!className || !teacher) {
    return res.status(400).json({ message: 'Missing fields' });
  }
  classes.push({ className, teacher });
  res.json({ message: 'Class created', class: { className, teacher } });
});

// Generate Report (placeholder)
router.get('/report', (req, res) => {
  res.json({ message: 'Report generated', students, classes });
});

// Schedule Meeting (placeholder)
router.post('/meeting', (req, res) => {
  const { topic, time } = req.body;
  if (!topic || !time) {
    return res.status(400).json({ message: 'Missing fields' });
  }
  res.json({ message: 'Meeting scheduled', meeting: { topic, time } });
});

export default router;
