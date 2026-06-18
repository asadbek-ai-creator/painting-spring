import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import pg from 'pg'

const { Pool } = pg
const app = express()
const port = process.env.PORT || 3001

const pool = new Pool({ connectionString: process.env.DATABASE_URL })

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

// Ensure table exists on startup
pool.query(`
  CREATE TABLE IF NOT EXISTS contact_submissions (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    company TEXT NOT NULL,
    phone TEXT NOT NULL,
    category TEXT,
    message TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
  )
`).catch(err => console.error('DB init error:', err))

app.post('/api/contact', async (req, res) => {
  const { name, company, phone, category, message } = req.body
  if (!name?.trim() || !company?.trim() || !phone?.trim()) {
    return res.status(400).json({ error: 'Missing required fields' })
  }
  try {
    await pool.query(
      'INSERT INTO contact_submissions (name, company, phone, category, message) VALUES ($1,$2,$3,$4,$5)',
      [name.trim(), company.trim(), phone.trim(), category || null, message || null]
    )
    res.json({ ok: true })
  } catch (err) {
    console.error('DB insert error:', err)
    res.status(500).json({ error: 'Server error' })
  }
})

app.listen(port, () => console.log(`API server running on port ${port}`))
