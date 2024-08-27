Here's the updated README file with the application link added:

---

# caRent Web Application

Welcome to **caRent**! This project is a comprehensive platform for renting cars, offering a user-friendly interface for customers to browse and book vehicles, as well as an admin interface to manage the rental operations.

**[Live Demo](https://carent-frontend.vercel.app/)**

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **User Authentication**: Secure login and registration using JWT.
- **Car Listings**: Browse available cars for rent with detailed information.
- **Booking System**: Book cars for specified dates and receive booking confirmations.
- **Admin Dashboard**: Manage car listings, view bookings, and handle customer queries.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, jQuery
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Getting Started

Follow these instructions to set up the project on your local machine for development and testing.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/carent.git
   cd carent
   ```

2. **Install dependencies for the backend:**

   ```bash
   cd backend
   npm install
   ```

3. **Install dependencies for the frontend:**

   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the MongoDB server:**

   Make sure your MongoDB server is running locally on `mongodb://localhost:27017` or configure your `.env` file accordingly.

2. **Start the backend server:**

   ```bash
   cd backend
   npm start
   ```

   The backend server will run on `http://localhost:5000`.

3. **Start the frontend server:**

   ```bash
   cd ../frontend
   npm start
   ```

   The frontend server will run on `http://localhost:3000`.

## Usage

1. **Navigate to the frontend server:**

   Open your browser and go to `http://localhost:3000`.

2. **Explore the features:**

   - **Sign up or log in** to access the full functionality.
   - **Browse available cars**, filter based on preferences, and make a booking.
   - **Admins** can log in to the dashboard to manage listings and bookings.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, feel free to reach out to us:

- **Email**: vattikondasaijayanth@gmail.com
- **GitHub**: [saijayanth-vattikonda](https://github.com/saijayanth-vattikonda)

---
