import pg from 'pg'

const { Pool } = pg

const pool = new Pool({ connectionString: process.env.DATABASE_URL })

let tableReady = false
async function ensureTable() {
  if (tableReady) return
  await pool.query(`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      company TEXT NOT NULL,
      phone TEXT NOT NULL,
      category TEXT,
      message TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `)
  tableReady = true
}

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) }
  }

  let body
  try {
    body = JSON.parse(event.body)
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) }
  }

  const { name, company, phone, category, message } = body
  if (!name?.trim() || !company?.trim() || !phone?.trim()) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Missing required fields' }) }
  }

  try {
    await ensureTable()
    await pool.query(
      'INSERT INTO contact_submissions (name, company, phone, category, message) VALUES ($1,$2,$3,$4,$5)',
      [name.trim(), company.trim(), phone.trim(), category || null, message || null]
    )
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: true }),
    }
  } catch (err) {
    console.error('DB error:', err)
    return { statusCode: 500, body: JSON.stringify({ error: 'Server error' }) }
  }
}
