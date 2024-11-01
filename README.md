# Nawy Full Stack task

# Getting started

## Installation

Clone the repository

    git clone https://github.com/Ahmed7Alwakeel/nawy-full-stack.git

Switch to the nawy-full-stack repo folder

    cd nawy-full-stack

NAvigate to the admin-panel folder

    cd admin-panel

Copy the example env file and make the required configuration changes in the .env file

    cp .env.example .env
    REACT_APP_API_URL=http://localhost:4000/api/v1

NAvigate to the backend folder

    cd backend

Copy the example env file and make the required configuration changes in the .env file from docker-compose.yml

    cp .env.example .env

Build the Docker images

    docker-compose build

Run the application:

    docker-compose up

Frontend hosts:
- http://localhost:3000 for admin-panel
- http://localhost:8200 for frontend

Admin panel Credentials:
- Email: admin@admin.com
- Password: 123

# Overview

The apartment CRUD application consists of a backend API that handles apartment management operations such as creating, reading, updating, and deleting apartment records. A seeder is initially run to create an admin user, who can log in to an admin panel and manage these operations. The admin panel is accessible only to the authenticated admin, allowing them to add, update, and delete apartment listings. On the frontend, a separate public-facing app displays a list of available apartments and provides detailed views for each one, which users can browse without requiring login access. The backend serves the data to both the admin panel and the frontend app.
