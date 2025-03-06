# NextLevelFood

NextLevelFood is a Next.js application that allows users to browse, share, and enjoy delicious meal recipes. The application features a variety of meals with detailed instructions and images.

## Features

- Browse a collection of meal recipes
- View detailed instructions for each meal
- Share your own meal recipes
- Real-time live images for each meal

## Technologies Used

- [Next.js](https://nextjs.org/) - The React Framework for Production
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [SQLite](https://www.sqlite.org/index.html) - A C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine
- [AWS S3](https://aws.amazon.com/s3/) - Object storage built to store and retrieve any amount of data from anywhere
- [ESLint](https://eslint.org/) - A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code

## Installation

1. Clone the repository:

    ```bash
    https://github.com/sanjeet-sk-kumar/NextLevelFood.git
    cd NextLevelFood
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

    Create a `.env.local` file in the root directory and add your AWS credentials:

    ```env
    AWS_ACCESS_KEY_ID=your-access-key-id
    AWS_SECRET_ACCESS_KEY=your-secret-access-key
    ```

4. Initialize the database:

    ```bash
    node initdb.js
    ```

## Running the Application

To run the application in development mode:

```bash
npm run dev
