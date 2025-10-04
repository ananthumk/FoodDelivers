TomatoApp (Food Delivery)
Deployed link: https://tomatoapp-six.vercel.app/

Short description
TomatoApp is a simple food delivery demo featuring a customer frontend, an admin dashboard, and a Node.js/Express backend. It demonstrates full-stack development with React, Node.js, and MongoDB.

Repository structure
frontend/ - Customer-facing React application built with Vite

admin/ - Admin panel React application built with Vite

Backend/ - Node.js/Express API server with routes, controllers, and MongoDB models

Backend/uploads/ - Static folder for storing uploaded images

Quick start (local development)
Prerequisites
Make sure you have Node.js and npm installed on your machine.

1) Frontend (customer app)
bash
cd frontend
npm install
npm run dev
Open your browser to the displayed localhost URL to view the customer app.

2) Admin panel
bash
cd admin
npm install
npm run dev
Open your browser to the displayed localhost URL to manage the backend.

3) Backend API
bash
cd Backend
npm install
node server.js
The backend listens on a port as configured in server.js or .env files.

Environment variables
Create a .env file in the Backend/ directory with contents like:

text
PORT=5000
MONGO_URI=your_mongo_connection_string_here
JWT_SECRET=your_jwt_secret_here
Adjust values for your development environment.

Notes & troubleshooting
Update URLs in frontend and admin apps if the backend API uses a non-default location (e.g., http://localhost:5000).

Ensure backend serves static files from uploads/ if testing image uploads.

For production deployments, configure environment variables appropriately.

License
This repository is provided as-is. Add a license file if sharing widely.
