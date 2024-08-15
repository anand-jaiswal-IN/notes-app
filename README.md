# Django React Notes App

## Overview

The Django React Notes App is a simple web application that allows users to write, manage, and store notes. The app is built using React for the frontend and Django REST Framework for the backend.

## Screenshots

![screenshot 1](/screenshots/1.png)
![screenshot 2](/screenshots/2.png)
![screenshot 3](/screenshots/3.png)


## Features

- **Create Notes**: Users can create notes with a title and description.
- **View Notes**: All notes are listed on the homepage, allowing users to view their saved notes.
- **Delete Notes**: Users can delete notes they no longer need.

## Tech Stack

- **Frontend**: React
- **Backend**: Django REST Framework
- **Database**: MySQL

## Installation

### Prerequisites

- Python (3.12.3 or later)
- Node.js (20.15.0 or later) and npm (10.8.1 or later)

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/anand-jaiswal-IN/notes-app.git
    cd notes-app/backend
    ```

2. Create a virtual environment and activate it:
    ```bash
    python3 -m venv venv
    source venv/bin/activate
    ```

3. Install the required packages:
    ```bash
    pip install -r requirements.txt
    ```
4. Setup Database:
    - Open `.env.sample` file and rename to `.env`. Fill the value of database connection keys.

5. Run migrations:
    ```bash
    python manage.py migrate
    ```

6. Start the Django development server:
    ```bash
    python manage.py runserver
    ```

### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```

2. Install the required packages:
    ```bash
    npm install
    ```
4. Setup Environment Variable
    - Open `.env.sample` and rename to `.env` and write the value of keys defined there.
3. Start the React development server:
    ```bash
    npm run dev
    ```

Once both servers are running, you can access the app by navigating to `http://localhost:5173` in your web browser. The backend API will be accessible at `http://localhost:8000/api/`.