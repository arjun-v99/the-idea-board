# The Idea Board

A full-stack app for submitting, viewing, and upvoting ideas. Built with Angular (frontend), Node.js/Express (backend), and PostgreSQL (database), all orchestrated with Docker Compose.

## Prerequisites
- [Docker](https://www.docker.com/get-started) & Docker Compose installed
- (Optional) Node.js & npm if you want to run frontend/backend locally without Docker

## Quick Start (Recommended: Docker Compose)

1. **Clone the repository:**
   ```sh
   git clone https://github.com/arjun-v99/the-idea-board.git
   cd the-idea-board
   ```
2. **Setting Up Environment variables**
   - Rename `.env.example` into `.env`
   - Replace the variables values with the ones you want to use

3. **Build and start all services:**
   ```sh
   docker-compose up --build
   ```
   This will:
   - Start the PostgreSQL database
   - Start the backend API server (Node.js/Express)
   - Start the frontend (Angular, served via Nginx)

4. **Access the app:**
   - Frontend: [http://localhost:4200](http://localhost:4200)
   - Backend API: [http://localhost:3000](http://localhost:3000)

5. **Stopping the app:**
   ```sh
   docker-compose down
   ```

## Development (Optional: Run services locally)

### Backend
1. Install dependencies:
   ```sh
   cd backend
   npm install
   ```
2. Set environment variables (see `docker-compose.yml` for DB credentials)
3. Start the backend:
   ```sh
   npm start
   ```

### Frontend
1. Install dependencies:
   ```sh
   cd frontend
   npm install
   ```
2. Start the Angular dev server:
   ```sh
   npm start
   ```
3. Visit [http://localhost:4200](http://localhost:4200)

## Troubleshooting
- If you see `[SequelizeConnectionRefused]`, ensure the backend is using `host: db` and `dialect: postgres` in its database config.
- Make sure Docker Desktop is running.
- If ports are in use, stop other services or change the ports in `docker-compose.yml`.

# API Routes

1.  FrontEnd
-   "/" This is the home page. Loads the landing page.
-   "/app" Route for loading "The idea board" app.

2.  Backend
-   METHOD: GET URL: "/" DESC: Base path, loads all ideas. i.e, redirects to "/ideas". 
-   METHOD: GET URL: "/ideas" DESC: Loads all ideas. 
-   METHOD: POST URL: "/ideas" DESC: Creates a new idea.
-   METHOD: DELETE URL: "/ideas" DESC: Deletes all ideas
-   METHOD: PATCH URL: "/ideas-upvote/:ideaId" DESC: Rgister upvote to a idea.


## License
MIT
