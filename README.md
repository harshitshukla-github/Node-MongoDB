# Node-MongoDB Connection Example

This project demonstrates a basic connection between a Node.js application and a MongoDB database. It uses the `mongodb` package to connect to a MongoDB instance and perform simple operations like inserting and fetching documents from a collection.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (You can use a local MongoDB instance or a cloud-based service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/node-mongodb-connection.git
```

2. Navigate into the project directory:

```bash
cd node-mongodb-connection
```

3. Install the required dependencies:

```bash
npm install
```

## Configuration

1. **MongoDB URI**: You need to provide a MongoDB connection string (URI). This can be either from a local MongoDB instance or from a cloud-based provider like MongoDB Atlas.

   In the root directory, create a `.env` file:

```bash
touch .env
```

2. Add your MongoDB URI to the `.env` file in the following format:

```env
MONGO_URI=mongodb://localhost:27017/my-database
```

Replace `mongodb://localhost:27017/my-database` with your actual connection string if you're using a cloud instance (e.g., MongoDB Atlas).

## Running the Application

To run the Node.js application:

```bash
node index.js
```

## Project Structure

```bash
├── index.js         # Main entry point for the Node.js application
├── package.json     # Project dependencies and metadata
├── .env             # Environment variables (MongoDB URI)
└── README.md        # This README file
```

## Example Usage

The application demonstrates how to:

1. Connect to a MongoDB database.
2. Insert a document into a collection.
3. Fetch documents from a collection.

Once you run the app, you will see a message indicating whether the connection was successful, and you will be able to interact with MongoDB through basic operations defined in `index.js`.

## Dependencies

This project uses the following dependencies:

- `mongodb`: MongoDB client for Node.js.

You can install all required dependencies by running:

```bash
npm install
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

