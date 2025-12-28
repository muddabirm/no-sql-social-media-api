# NoSQL Social Media API

A robust backend API for a social media application built with MongoDB, Mongoose, Express.js, and Node.js. This API provides full CRUD functionality for users, thoughts (posts), reactions, and friend connections, designed to handle large amounts of unstructured data efficiently.

## Description

This NoSQL Social Media API serves as the backend infrastructure for a social networking platform. Users can create profiles, share their thoughts, react to friends' posts, and build a network of connections. The application leverages MongoDB's flexibility and scalability to handle the dynamic nature of social media data.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Models](#models)
- [Demo](#demo)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Management**
  - Create, read, update, and delete users
  - Unique username and valid email validation
  - User profile management

- **Thoughts (Posts)**
  - Create and share thoughts
  - View all thoughts or thoughts by specific users
  - Update and delete thoughts
  - Automatic deletion of user's thoughts when user is deleted

- **Friend System**
  - Add friends to your network
  - Remove friends from your friend list
  - View friend count and friend lists

- **Reactions**
  - React to friends' thoughts
  - Add and remove reactions
  - View all reactions on a thought

## Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework for routing
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose** - Object Data Modeling (ODM) library for MongoDB
- **JavaScript** - Programming language

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (version 4.4 or higher)

### Setup Steps

1. Clone the repository:
```bash
git clone https://github.com/muddabirm/no-sql-social-media-api.git
```

2. Navigate to the project directory:
```bash
cd no-sql-social-media-api
```

3. Install dependencies:
```bash
npm install
```

4. Ensure MongoDB is running on your local machine:
```bash
# On macOS/Linux
mongod

# On Windows, MongoDB typically runs as a service
```

5. Start the server:
```bash
node server.js
```

The server will start and sync the Mongoose models with the MongoDB database. You should see a message indicating the server is running on `http://localhost:3001` (or your configured port).

## Usage

Once the server is running, you can test the API endpoints using:
- [Insomnia](https://insomnia.rest/)
- [Postman](https://www.postman.com/)
- [Thunder Client](https://www.thunderclient.com/) (VS Code extension)
- Or any other API testing tool

## API Routes

### User Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users |
| GET | `/api/users/:userId` | Get a single user by ID |
| POST | `/api/users` | Create a new user |
| PUT | `/api/users/:userId` | Update a user by ID |
| DELETE | `/api/users/:userId` | Delete a user by ID |

**Example POST request body (Create User):**
```json
{
  "username": "johndoe",
  "email": "john@example.com"
}
```

### Friend Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/users/:userId/friends/:friendId` | Add a friend to user's friend list |
| DELETE | `/api/users/:userId/friends/:friendId` | Remove a friend from user's friend list |

### Thought Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/thoughts` | Get all thoughts |
| GET | `/api/thoughts/:thoughtId` | Get a single thought by ID |
| POST | `/api/thoughts` | Create a new thought |
| PUT | `/api/thoughts/:thoughtId` | Update a thought by ID |
| DELETE | `/api/thoughts/:thoughtId` | Delete a thought by ID |

**Example POST request body (Create Thought):**
```json
{
  "thoughtText": "This is my first thought!",
  "username": "johndoe",
  "userId": "user_id_here"
}
```

### Reaction Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/thoughts/:thoughtId/reactions` | Add a reaction to a thought |
| DELETE | `/api/thoughts/:thoughtId/reactions/:reactionId` | Remove a reaction from a thought |

**Example POST request body (Create Reaction):**
```json
{
  "reactionBody": "Great post!",
  "username": "janedoe"
}
```

## Models

### User Model
- `username` (String, Unique, Required, Trimmed)
- `email` (String, Required, Unique, Must match email format)
- `thoughts` (Array of Thought IDs)
- `friends` (Array of User IDs)
- **Virtual:** `friendCount` - Returns the number of friends

### Thought Model
- `thoughtText` (String, Required, 1-280 characters)
- `createdAt` (Date, Default: current timestamp)
- `username` (String, Required)
- `reactions` (Array of Reaction subdocuments)
- **Virtual:** `reactionCount` - Returns the number of reactions

### Reaction Schema (Subdocument)
- `reactionId` (ObjectId, Default: new ObjectId)
- `reactionBody` (String, Required, Max 280 characters)
- `username` (String, Required)
- `createdAt` (Date, Default: current timestamp)

## Demo

Watch the full functionality demonstration:

[Demo Video](https://drive.google.com/file/d/1S_P7Z1SYeczghbNWKpqHd9fW2qkJGBCF/view)

The demo includes:
- Starting the application server
- Testing all GET, POST, PUT, and DELETE routes for users and thoughts
- Testing POST and DELETE routes for friends and reactions
- Demonstrating formatted timestamps
- Showing user deletion with cascade delete of thoughts

## Project Structure

```
no-sql-social-media-api/
├── config/
│   └── connection.js          # MongoDB connection configuration
├── controllers/
│   ├── thoughtController.js   # Thought-related logic
│   └── userController.js      # User-related logic
├── models/
│   ├── index.js              # Model exports
│   ├── Thought.js            # Thought model
│   ├── User.js               # User model
│   └── Reaction.js           # Reaction schema (if separate)
├── routes/
│   ├── api/
│   │   ├── thoughtRoutes.js  # Thought endpoints
│   │   └── userRoutes.js     # User endpoints
│   └── index.js              # Route aggregation
├── .gitignore
├── package.json
├── server.js                 # Application entry point
└── README.md
```

## Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Questions

If you have any questions about this project, please feel free to reach out:

- GitHub: [@muddabirm](https://github.com/muddabirm)
- Repository: [no-sql-social-media-api](https://github.com/muddabirm/no-sql-social-media-api)

---

**Note:** This application uses a NoSQL database (MongoDB) to handle large amounts of unstructured data, making it ideal for social media applications where data structures can be flexible and scalable.
