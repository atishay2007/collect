import Database from "better-sqlite3";
import path from "path";

const dbPath = path.join(process.cwd(), "collect.db");

const db = new Database(dbPath);
db.exec(`
  CREATE TABLE IF NOT EXISTS collections (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

export default db;
