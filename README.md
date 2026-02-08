# GameOnTech Onboarding System

## Overview
The **GameOnTech Onboarding System** is designed to simplify and enhance the onboarding process for new users. This documentation provides comprehensive information about the project's structure, features, setup instructions, and API endpoints.

## Project Structure
- **Frontend:** React application utilizing Vite for fast and optimized builds.
- **Backend:** Express API that handles data processing and server-side logic.

## Features
- User registration and authentication
- Guided onboarding process with interactive steps
- Integration with third-party services for enhanced functionality
- Responsive design for both desktop and mobile

## Setup Instructions

### Prerequisites
- Node.js (version XX or higher)
- npm (or yarn)

### Installation
1. Clone the repository:
   
   ```bash
   git clone https://github.com/ValeJesus/SiteOnBoarding.git
   cd SiteOnBoarding
   ```
   ```bash
   cd frontend
   npm install
   ```
   ```bash
   cd ../backend
   npm install
   ```
### Running the Application
1. Start the backend server:

```bash
cd backend
npm start
```

2. Start the frontend application:

```bash
cd frontend
npm run dev
```

3. Access the application in your browser at:

```Código
http://localhost:3000
```

## API Endpoints
### User API
**POST** /api/users/register → Register a new user

**POST** /api/users/login → Login an existing user

### Onboarding API
**GET** /api/onboarding/steps → Retrieve onboarding steps

**POST** /api/onboarding/complete → Mark a step as completed
