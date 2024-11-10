{
  "name": "simple-web-app",
  "version": "1.0.0",
  "description": "Simple web application with CI/CD pipeline",
  "main": "index.js",
  "scripts": {
    "start": "node src/server.js",
    "test": "jest --coverage",
    "lint": "eslint src/"
  },
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "jest": "^27.0.6",
    "eslint": "^7.32.0",
    "supertest": "^6.1.6"
  }
}
