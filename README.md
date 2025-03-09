# Alert Log Dashboard

## Overview

This project is a frontend & backend applications designed to display and analyze logs. The frontend is built using React with Material-UI and Styled Components, while the backend is implemented using Node.js.

## Features

### Frontend (React)

- **Alert Selector:**

  - Drop-down box with auto-complete.
  - Allows users to clear selections.
  - Fetches relevant logs upon selection.

- **Log Table:**

  - Displays alert name prominently.
  - Handles large datasets efficiently with virtualization or pagination.
  - Supports nested data presentation for readability.

- **Filters:**
  - Custom filter components for relevant fields.
  - Enhances searchability and usability.

### Backend (Node.js)

- **Log Analysis System:**
  - Parses web server logs for insights.
  - Tracks requests per hour, most accessed resources, and response code distribution.
  - Detects anomalies such as traffic spikes and server errors.

## Installation & Setup

1. **Clone the repository:**
   git clone <repository-url>
2. **Navigate to project directory:**
   cd project-folder
3. **Install dependencies:**
   npm install
4. **Run the frontend:**
   npm run dev
5. **Run the backend:**
   node server.js

## Technologies Used

- **Frontend:** React, Material-UI, Styled Components
- **Backend:** Node.js, Express
- **Data Handling:** API integration, efficient state management