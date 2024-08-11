# MERN-TwitterClone Project

Welcome to the MERN (MongoDB, Express.js, React.js, Node.js) stack project! This comprehensive guide will walk you through every aspect of this project, including its structure, setup instructions, usage, API endpoints, backend, frontend, contributing guidelines, license information, and how to get in touch for support or inquiries.

## Introduction

This is a Twitter clone project built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It aims to replicate basic functionalities of Twitter, allowing users to post tweets, follow other users, like tweets, and manage their profiles. The project includes authentication, real-time updates, and responsive UI components.


## Features

- **User Authentication**: Sign up, log in, log out functionalities with secure authentication using JSON Web Tokens (JWT).
  
- **Tweet Management**: Users can create, edit, and delete tweets. Tweets are displayed in a timeline format.

- **User Interaction**: Users can follow/unfollow other users, like tweets, and view notifications in real-time.

- **Profile Management**: Each user has a profile page showing their tweets, followers, and following users.

- **Real-time Updates**: Used refresh state for real-time notifications of new tweets, likes, and follows.

- **Responsive Design**: Optimized for various screen sizes using responsive design principles.

## Live Demo

You can try out the live demo of the app [here](https://mern-twitterclone-w86v.onrender.com).

## Folder Structure

```
project-root/
│
├── client/                   # Frontend React App
│   ├── public/               # Public assets and index.html
│   └── src/                  # React application source code
│       ├── components/       # React components
│       ├── hooks/            # Custom hooks
│       ├── pages/            # Page components
│       ├── redux/            # Redux store, actions, and reducers
│       ├── utils/            # Utility functions and constants
│       ├── App.js            # Main React application component
│       ├── index.js          # Entry point for React application
│       └── ...
│
├── server/                   # Backend Node.js + Express App
│   ├── config/               # Configuration files (e.g., database)
│   ├── controllers/          # Route controllers
│   ├── middleware/           # Middleware functions
│   ├── models/               # Mongoose models
│   ├── routes/               # Express routes
│   ├── services/             # Business logic (e.g., authentication)
│   ├── app.js                # Express application setup
│   └── server.js             # Entry point for the backend server
│
├── node_modules/             # Node.js dependencies (generated)
│
├── .gitignore                # Git ignore file
├── package.json              # Node.js dependencies and scripts
├── README.md                 # Project documentation
└── ...




```


## GIF's

<img src="https://github.com/nishkarsh25/MERN-TwitterClone/blob/main/Screenshots/ss1.gif" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/MERN-TwitterClone/blob/main/Screenshots/ss2.gif" alt="Screenshot 1" width="1000"> 


## Technologies Used

### Frontend

- **React**: JavaScript library for building user interfaces.
- **React Router DOM**: Declarative routing for React applications.
- **Redux**: State management library for predictable state containers.
- **Axios**: Promise-based HTTP client for making API requests.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **react-icons**: Icons library for React components.
- **react-avatar**: Library for rendering avatars.

### Backend

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Fast, minimalist web framework for Node.js.
- **MongoDB**: NoSQL database for storing application data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **WebSocket**: Protocol for full-duplex communication channels over a single TCP connection.
- **bcryptjs**: Library for hashing passwords.
- **jsonwebtoken**: Library for generating JSON Web Tokens (JWT).
- **express-session**: Session middleware for Express.js.
- **CORS**: Cross-Origin Resource Sharing middleware.



## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nishkarsh25/MERN-TwitterClone.git
   ```
2. Navigate to the project branch:

   ```bash
   git checkout <branch-name>
   ```
   Replace `<branch-name>` with the name of the branch you want to checkout.
   
3. Start the Backend Server: Launch the backend Node.js server.

   ```bash
   cd backend
   node index.js
   ```
4. Start the Frontend Development Server: Run the React development server for the frontend application.

   ```bash
   cd frontend
   npm start
   ```
5. Start the socket Server: Launch the backend Node.js server.

   ```bash
   cd socket
   node server.js
   ```

## Usage

1. **Run the development server**:

   ```bash
   cd client
   npm start
   ```
2. **Open your browser** and navigate to http://localhost:3000 to view the app.

## Usage

- **Sign Up / Log In**: Create a new account or log in with existing credentials.
  
- **Tweet**: Post new tweets, view tweets from users you follow, and like tweets.

- **Follow/Unfollow Users**: Interact with other users by following or unfollowing them.

- **Notifications**: Receive real-time notifications for new tweets, likes, and follows.

- **Profile Management**: Edit your profile, including profile picture and bio.

## Future Improvements

- Implement full CRUD functionality for tweets and user profiles.
- Enhance UI/UX for better user experience on mobile devices.
- Implement search functionality and hashtag support for tweets.
- Integrate third-party APIs for additional features (e.g., image uploads, external authentication).




## API Endpoints

- **User Authentication**:
  - `/api/auth/register`: POST - Register a new user.
  - `/api/auth/login`: POST - Log in with existing credentials.
  - `/api/auth/logout`: GET - Log out the current user.
  
- **Tweet Management**:
  - `/api/tweets/create`: POST - Create a new tweet.
  - `/api/tweets/get`: GET - Get tweets for the current user's timeline.
  - `/api/tweets/like/:id`: PUT - Like or unlike a tweet by its ID.
  - `/api/tweets/delete/:id`: DELETE - Delete a tweet by its ID.

- **User Management**:
  - `/api/users/follow/:id`: POST - Follow another user by ID.
  - `/api/users/unfollow/:id`: POST - Unfollow a user by ID.
  - `/api/users/profile/:id`: GET - Get profile information for a user by ID.
  - `/api/users/update/:id`: PUT - Update user profile information.


## Contributing

Contributions to this project are highly appreciated! Whether you discover bugs, have feature requests, or wish to contribute improvements, your input is valuable. Here's how you can contribute:

- **Report Issues:** If you encounter any bugs or issues while using MyCalculatorApp, please open an issue on the GitHub repository. Be sure to provide detailed information about the problem and steps to reproduce it.

- **Submit Pull Requests:** If you have enhancements or fixes to propose, feel free to submit a pull request. Contributions that improve the functionality, usability, or performance of this app are welcomed and encouraged.

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the Repository**.
2. **Create a New Branch** (`git checkout -b feature/your-feature-name`).
3. **Make Your Changes**.
4. **Commit Your Changes** (`git commit -am 'Add some feature'`).
5. **Push to the Branch** (`git push origin feature/your-feature-name`).
6. **Create a New Pull Request**.

## License

This project is licensed under the [The 3-Clause BSD License](LICENSE).Feel free to explore, modify, and contribute to this project as you see fit. Your feedback and contributions are greatly appreciated! 🚀✨


## Acknowledgments

This project is made possible by the contributions and support of various individuals and communities. Special thanks to:

- **Tailwind CSS Team:** For developing Tailwind CSS, a versatile CSS framework that simplifies web development and enhances user interfaces.
  
- **Open Source Community:** For fostering collaboration, innovation, and the sharing of knowledge, which enriches projects like My Form Validation and makes them accessible to all.


## Credits

This project wouldn't be possible without the contributions of the following:

- **React**: A JavaScript library for building user interfaces. Visit [React](https://reactjs.org/) for more information.
  
- **React Icons**: React Icons provides a comprehensive library of icons for React applications. Visit [React Icons](https://react-icons.github.io/react-icons/) for more information.
  
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs rapidly. Visit [Tailwind CSS](https://tailwindcss.com/) for more information.

- **React Router**: React Router is a library for routing in React applications, allowing for navigation between different components. Visit [React Router](https://reactrouter.com/) for more information.

- **Redux**: Redux is a predictable state container for JavaScript applications, providing a centralized store for managing application state. Visit [Redux](https://redux.js.org/) for more information.

- **React Redux**: React Redux is the official React binding for Redux, enabling React components to interact with the Redux store. Visit [React Redux](https://react-redux.js.org/) for more information.

- **Axios**: Axios is a promise-based HTTP client for making asynchronous requests in JavaScript applications. Visit [Axios](https://axios-http.com/) for more information.

- **Express**: Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. Visit [Express](https://expressjs.com/) for more information.

- **Mongoose**: Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js, providing a straightforward schema-based solution for modeling application data. Visit [Mongoose](https://mongoosejs.com/) for more information.

- **JSON Web Token (JWT)**: JSON Web Token is a compact, URL-safe means of representing claims to be transferred between two parties. It is commonly used for authentication and authorization in web applications. Visit [JWT](https://jwt.io/) for more information.

- **Netlify**: Netlify provides seamless deployment and hosting solutions, making it easy to deploy web applications and share them with the world. Visit [Netlify](https://www.netlify.com/) for more information.

- **Render**: Render offers a modern cloud platform for deploying and running web applications, databases, and other services. Visit [Render](https://render.com/) for more information.

- **MongoDB Atlas**: MongoDB Atlas is a fully managed cloud database service for modern applications. Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for more information.

- **React Hot Toast**: A React library for creating toast notifications with ease. Visit [React Hot Toast](https://react-hot-toast.com/) for more information.



## Author

- **Nishkarsh Gupta**
  - GitHub: [nishkarsh25](https://github.com/nishkash25)
  - Email: bm21btech11016@gmail.com

