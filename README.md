# Contact List CN

## Project Overview

Contact List CN is a React application that demonstrates CRUD operations (Create, Read, Update, Delete) using a mock API. This project allows users to fetch, add, update, and delete contacts from a simulated API.

## Features

- **Fetch and Show Users**: Retrieve and display a list of users from a mock API.
- **Add a Contact**: Simulate adding a new contact with a POST request and update the local state.
- **Update a Contact**: Simulate updating a contact with a PUT request.
- **Delete a Contact**: Simulate deleting a contact with a DELETE request.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later) or Yarn (v1.22 or later)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/H-R-Wells2/Contact-List-CN.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd Contact-List-CN
   ```

3. **Install Dependencies**

   Using npm:

   ```bash
   npm install
   ```

   Or using Yarn:

   ```bash
   yarn install
   ```

### Running the Application

Start the development server with:

```bash
npm start
```

Or with Yarn:

```bash
yarn start
```

The application will be accessible at `http://localhost:3000`.

## Usage

- **Fetch and Display Users**: Users are automatically fetched and displayed on load.
- **Add a Contact**: Use the form to add a new contact, simulating a POST request.
- **Update a Contact**: Edit a contact and submit the form, simulating a PUT request.
- **Delete a Contact**: Click delete to remove a contact, simulating a DELETE request.

## Note

The API interactions (POST, PUT, DELETE) are simulated and will not actually modify any data on the server. Changes are only reflected in the local React state.
