# Simple Web Application with CI/CD Pipeline

This project demonstrates a basic CI/CD pipeline using GitHub Actions. The application is a simple web server with automated testing and deployment to GitHub Pages.

## Features

- Express.js web server
- Automated testing with Jest
- Code linting with ESLint
- Continuous Integration with GitHub Actions
- Automatic deployment to GitHub Pages

## Setup

1. Clone the repository:
   ```bash
   git clone [your-repo-url]
   cd [your-repo-name]
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run tests:
   ```bash
   npm test
   ```

4. Start the server:
   ```bash
   npm start
   ```

## CI/CD Pipeline

The pipeline includes the following stages:
1. Build: Installing dependencies
2. Test: Running Jest tests with coverage
3. Lint: Code quality checks
4. Deploy: Automatic deployment to GitHub Pages (main branch only)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
