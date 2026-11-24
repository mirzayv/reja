# Reja — plans app (Express + MongoDB)

My first full CRUD web app from the MERN / JavaScript full-stack course: a simple to-do ("reja" = plan in Uzbek) list rendered on the server with EJS and stored in MongoDB, with add, edit and delete without page reloads.

## Features
- List all plans (server-rendered EJS page)
- Add a plan, edit its text, delete one plan or all plans
- Front-end requests with Axios (`public/browser.js`), JSON API on the server
- MongoDB native driver, one shared connection opened at startup

## API
| Method | Path | Body | Action |
|---|---|---|---|
| GET | `/` | — | Render the plans page |
| POST | `/create-item` | `{ reja }` | Insert a plan |
| POST | `/edit-item` | `{ id, new_input }` | Update a plan's text |
| POST | `/delete-item` | `{ id }` | Delete one plan |
| POST | `/delete-all` | `{ delete_all: true }` | Delete every plan |

## Run
```bash
npm install
cp .env.example .env            # put your MongoDB connection string in it
export $(cat .env | xargs)      # or set MONGO_URL another way
npm run dev                     # http://localhost:3000
```

## Structure
```
server.js         # connects to MongoDB, then starts the HTTP server
app.js            # Express app: static files, body parsing, EJS views, routes
views/reja.ejs    # plans page
public/           # browser.js (Axios calls), CSS, images
train.js          # small JavaScript practice tasks from the course
```

## Tech
Node.js · Express 5 · EJS · MongoDB · Axios · Bootstrap
