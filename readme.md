# Online Quiz App with Node.js

An online Quiz application built with Node.js, Express, MongoDB, and other technologies.

## Features

- Quiz Creation and Management: Ability for authorized users to create, manage, and publish quizzes with customizable questions, and options.
- Quiz Taking: Seamless experience for users to take quizzes with interactive question formats, such as multiple-choice and true/false.
- Leaderboard: Tracking and display of user scores on a leaderboard, fostering competition and engagement among participants.

## Prerequisites

- Node.js: [Download and Install Node.js](https://nodejs.org/)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/BedoNassef71/online-quiz-app.git
   cd online-quiz-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following:

   ```env
   PORT=3000
   DATABASE_URI=your-mongodb-uri

   ENABLE_SEED=true -> To automatically insert some data into the database

   NODE_ENV

   JWT_SECRET=your-jwt-secret
   JWT_EXPIRES_IN=your-jwt-exp
   ```

4. Run the application:

   ```bash
   npm start
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

- `src/`: Contains the source code for the application, including server setup, routes, and middleware.
- `config/`: Houses configuration files for setting up environment variables and database connections.
- `answer/`: Within this directory, you'll find modules and logic dedicated to handling quiz answers. It houses the functionality required for users to respond to quiz questions, validate their answers, and submit them for evaluation.
- `grade/`: Contains route handlers responsible for grading quiz submissions and managing user scores.
- `question/`: Includes MongoDB models defining the structure and behavior of quiz questions and Answers.
- `quiz/`: Holds application logic related to quiz creation, management, and taking, including controllers and services.
- `utils/`: Houses custom middleware functions used throughout the application for tasks such as authentication, error handling, and request processing

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
