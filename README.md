# Express + TypeScript API with Cat Facts Integration

A simple Express.js API built with TypeScript that integrates with the Cat Facts API to return dynamic cat facts along with user information.

## Features

- `/me` endpoint that returns user information with a random cat fact
- Dynamic ISO 8601 timestamps
- Graceful error handling for API failures
- 5-second timeout for external API calls
- Appropriate HTTP status codes for different error scenarios

## Dependencies

- **express**: Web framework for Node.js
- **axios**: HTTP client for making API requests
- **typescript**: TypeScript compiler
- **@types/node**: Type definitions for Node.js
- **@types/express**: Type definitions for Express
- **ts-node**: TypeScript execution engine for Node.js
- **nodemon**: Development tool for auto-restarting the server

## Installation

1. Clone the repository:
```bash
git clone https://github.com/BigLens/hng-task0.git
cd hng-task0
```

2. Install dependencies:
```bash
npm install
```

## Running Locally

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

The server will start on `http://localhost:4005` by default.

## API Endpoint

### GET /me

Returns user information along with a random cat fact.

**Success Response (200):**
```json
{
  "status": "success",
  "user": {
    "email": "",
    "name": "",
    "stack": "express + typescript"
  },
  "timestamp": "2025-10-19T12:34:56.789Z",
  "fact": "Cats sleep 70% of their lives."
}
```

**Error Responses:**
- `504 Gateway Timeout`: Cat Facts API request timed out
- `502 Bad Gateway`: Cat Facts API returned an error
- `503 Service Unavailable`: Unable to reach Cat Facts API
- `500 Internal Server Error`: Unexpected server error

## Environment Variables

- `PORT`: Server port (default: 3000)

## Testing the API

Using curl:
```bash
curl http://localhost:4005/me
```

Using a browser, simply navigate to:
```
http://localhost:4005/me
```

## Project Structure

```
hng-task0/
├── src/
│   └── index.ts          # Main application file
├── dist/                 # Compiled JavaScript (after build)
├── node_modules/         # Dependencies
├── package.json          # Project metadata and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md            # This file
```