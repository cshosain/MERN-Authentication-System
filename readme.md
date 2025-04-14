# Complete Authentication System

This project is a robust and secure authentication system built using **Node.js**, **Express**, and **MongoDB**. It provides a comprehensive solution for user registration, login, password management, and account verification. The system is designed with scalability, security, and maintainability in mind, making it suitable for modern web applications.

## Features

- **User Registration**: Allows users to register with email, phone, and password.
- **Account Verification**: Supports email and phone-based OTP verification.
- **Login & Logout**: Secure login and logout functionality with JWT-based authentication.
- **Password Management**:
  - Forgot Password: Sends a reset link to the user's email.
  - Reset Password: Allows users to reset their password using a secure token.
- **User Profile**: Fetch authenticated user details.
- **Automated Cleanup**: Removes unverified accounts after 30 minutes using a cron job.
- **Error Handling**: Centralized error handling for better debugging and user feedback.
- **Security**:
  - Password hashing with bcrypt.
  - JWT-based authentication.
  - Secure cookies for session management.
- **Environment Configuration**: Uses `dotenv` for managing environment variables.

## Project Structure

## 📁 Project Structure

```
server/
├── .gitignore               # Specifies files to be ignored by Git
├── app.js                   # Main application file where middleware and routes are registered
├── sample.env               # Environment variables configuration
├── package.json             # Project metadata, scripts, and dependencies
├── server.js                # Entry point of the application

├── automation/
│   └── removeUnverifiedAccounts.js   # Cron job to remove unverified accounts automatically

├── controllers/
│   └── userController.js    # Handles business logic for user-related operations

├── db/
│   └── dbConnection.js      # MongoDB connection setup

├── middlewares/
│   ├── auth.js              # Middleware for user authentication
│   ├── catchAsyncError.js   # Utility to catch async errors in route handlers
│   └── error.js             # Centralized error handler

├── models/
│   └── userModel.js         # Defines User schema and its methods

├── routes/
│   └── userRouter.js        # API endpoints for user-related actions

└── utils/
    ├── sendEmail.js         # Reusable function to send emails
    └── sendToken.js         # Reusable to generate and send JWT tokens
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/cshosain/MERN-Authentication-System.git

   cd MERN-Authentication-System.git/server
   ```

2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the server directory and configure the following variables:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET_KEY=your_jwt_secret
   JWT_EXPIRE=7d
   COOKIE_EXPIRE=7
   SMTP_HOST=smtp.gmail.com
   SMTP_SERVICE=gmail
   SMTP_PORT=2525
   SMTP_MAIL=your_smtp_email
   SMTP_PASSWORD=your_smtp_password
   TWILIO_SID=your_twilio_sid
   TWILIO_AUTH_TOKEN=your_twilio_auth_token
   TWILIO_PHONE_NUMBER=your_twilio_phone_number
   FRONTEND_URL=http://localhost:5173
   ```
4. **Start the Server:**

   ```bash
   npm run dev
   ```

5. **Access the Application:** Open your browser and navigate to `http://localhost:5000`.

## API Endpoints

User Routes

## 📌 API Endpoints

| Method | Endpoint                             | Description                       | Authentication |
| ------ | ------------------------------------ | --------------------------------- | -------------- |
| POST   | `/api/v1/user/register`              | Register a new user               | No             |
| POST   | `/api/v1/user/otp-verification`      | Verify OTP for account activation | No             |
| POST   | `/api/v1/user/login`                 | Login a user                      | No             |
| GET    | `/api/v1/user/logout`                | Logout the user                   | Yes            |
| GET    | `/api/v1/user/me`                    | Get authenticated user details    | Yes            |
| POST   | `/api/v1/user/password/forgot`       | Send password reset email         | No             |
| PUT    | `/api/v1/user/password/reset/:token` | Reset user password               | No             |

## 🚀 How It Works

- **Registration:** Users register with their details. A verification code is sent via email or phone.
- **Verification:** Users verify their account using the OTP sent to their email or phone.
- **Login:** Authenticated users can log in and receive a JWT token stored in a secure cookie.
- **Password Management:** Users can reset their password using a secure token sent to their email.
- **Automated Cleanup:** Unverified accounts are automatically removed after 30 minutes.

## 🛠️ Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT, bcrypt
- **Email Service:** Nodemailer
- **SMS/Call Service:** Twilio
- **Task Scheduling:** node-cron
- **Environment Management:** dotenv

## ⚠️ Error Handling

The project uses a centralized error-handling middleware to catch and process errors. Custom error messages are returned to the client for better debugging and user experience.

## 🌱 Future Enhancements

- Add social login (Google, Facebook, etc.)
- Implement two-factor authentication (2FA)
- Add rate limiting to prevent brute force attacks
- Enhance logging with tools like Winston or Morgan

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## 📄 License

This project is licensed under the MIT License.

## ✨ Why This Project Stands Out

This project demonstrates:

- **Clean Code Practices:** Modular structure, reusable components, and clear separation of concerns.
- **Security Best Practices:** Secure password storage, JWT authentication, and input validation.
- **Scalability:** Designed to handle a growing user base with features like cron jobs and efficient database queries.
- **Real-World Use Cases:** Covers essential authentication features required in modern web applications.
