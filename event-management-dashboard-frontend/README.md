# Event Management Dashboard - Frontend

This document provides an overview of the frontend application of the Event Management Dashboard, including the libraries and components used, along with steps to set up the project.

## Libraries and Frameworks Used

- **React**: A JavaScript library for building user interfaces.
- **React Router**: For routing and navigation within the application.
- **Axios**: To make HTTP requests to the backend API.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Redux**: For state management across the application.
- **Formik**: For form handling and validation.
- **Yup**: Schema validation library used with Formik.

## Key Components

- **Login Component**: Handles user authentication.
- **Dashboard Component**: Displays event statistics and analytics.
- **Event List Component**: Lists all available events.
- **Event Details Component**: Shows detailed information about a specific event.
- **Form Component**: Allows users to create or edit events.

## Setup Instructions

Follow these steps to set up and run the frontend application:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/event-management-dashboard.git
   ```

2. **Navigate to the frontend directory:**
   ```bash
   cd event-management-dashboard-frontend
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```

The application will run on `http://localhost:3000/` by default.

## Environment Variables

Ensure you have the required environment variables set up in a `.env` file:
```
REACT_APP_API_URL=http://localhost:5000/api
```

## Folder Structure

- **/src**: Source code folder.
- **/src/components**: Reusable React components.
- **/src/pages**: Page-level components.
- **/src/redux**: Redux store, actions, and reducers.
- **/src/utils**: Utility functions and helpers.
- **/public**: Static files.

## Build for Production

To create an optimized production build:
```bash
npm run build
```

This will generate a `build/` folder with the production-ready files.

## Contribution

Feel free to fork the repository and submit pull requests for improvements.

## License

This project is licensed under the MIT License.
