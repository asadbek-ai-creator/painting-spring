import { neon } from '@neondatabase/serverless'

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
    const sql = neon(process.env.DATABASE_URL)

    await sql`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        company TEXT NOT NULL,
        phone TEXT NOT NULL,
        category TEXT,
        message TEXT,
        created_at TIMESTAMPTZ DEFAULT NOW()
      )
    `

    await sql`
      INSERT INTO contact_submissions (name, company, phone, category, message)
      VALUES (${name.trim()}, ${company.trim()}, ${phone.trim()}, ${category || null}, ${message || null})
    `

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: true }),
    }
  } catch (err) {
    console.error('DB error:', err)
    return { statusCode: 500, body: JSON.stringify({ error: 'Server error', detail: err.message }) }
  }
}
