import express from 'express';
import fs from 'node:fs';
import path from 'node:path';

const app = express();
app.use(express.json({ limit: '100kb' }));

const DATA_DIR = process.env.DATA_DIR || path.join(process.cwd(), 'data');
fs.mkdirSync(DATA_DIR, { recursive: true });

/** Appends a record to a JSON file inside the data directory. */
function append(filename, record) {
  const file = path.join(DATA_DIR, filename);
  const list = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : [];
  list.push(record);
  fs.writeFileSync(file, JSON.stringify(list, null, 2));
  return record;
}

const isEmail = (value) => typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'arcora-api' });
});

app.post('/api/inquiries', (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !name.trim()) {
    return res.status(400).json({ error: 'Please tell us your name.' });
  }
  if (!isEmail(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }
  if (!message || !message.trim()) {
    return res.status(400).json({ error: 'Please tell us about your project.' });
  }

  const record = append('inquiries.json', {
    ...req.body,
    id: Date.now().toString(36),
    createdAt: new Date().toISOString(),
  });

  console.log(`New inquiry received: ${record.id}`);
  res.status(201).json({ ok: true, id: record.id });
});

app.post('/api/subscribe', (req, res) => {
  const { email } = req.body || {};
  if (!isEmail(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  append('subscribers.json', { email: email.trim(), createdAt: new Date().toISOString() });
  res.status(201).json({ ok: true });
});

app.use('/api', (_req, res) => res.status(404).json({ error: 'Not found' }));

const port = Number(process.env.PORT) || 8000;
app.listen(port, '0.0.0.0', () => {
  console.log(`ARCORA API listening on port ${port}`);
});
