# A Greeting to Your Name Application!

Welcome! This project is a simple monolithic application created with Node.js. Its main goal is to **greet you by name** through a friendly interface. 🖐️


## What does this application do?

1. **Home page**:  
   A visual interface where you can enter your name.

2. **Greeting generation**:  
   When you enter your name and click the button, the application greets you in a personalized way. For example:  
     “Hi, Maria! Hope you're having a great day. 🌟”

3. **Front-end and back-end integration**:  
   Combines a modern front-end with an Express server that handles requests.


## Project Structure
    project/.
    ├── .github/                  
    │ └─── workflows/            
    │ └└─── deploy.yml # Automatic deployment script with GitHub Actions.
    ├─── public/ # Front-end (UI) files.
    │ ├─── index.html # Main page with greeting form.
    │ ├─── style.css # CSS styles for the main page.
    │ └└── app.js # Front-end logic (event and request handling).
    ├─── app.js # Server (back-end) code.
    ├─── package.json # Project configuration and Node.js dependencies.
    ├─── Dockerfile # Instructions for building the Docker container.

## Prerequisites.

- [Node.js]
- [Docker]
- [GitHub] account for automatic deployment.

## Installation and Usage

### Without Docker

1. Clone this repository:

   git clone https://github.com/Cristina-Colcha/pruebaec2.git
   cd pruebaec2
2. Install dependencies:
    npm install
3. Start the server:

    npm start
    Open in browser: Visit http://localhost:3000.
## With Docker
1. Build the image:

docker build -t pruebaec2 .
2. Run the container:

    docker run -p 3000:3000 pruebaec2 .
    Open in browser: Visit http://localhost:3000.

## Automatic Deployment with GitHub Actions
Configuration file: The application includes a file called .github/workflows/deploy.yml that automates the deployment.

1. Set up credentials: Make sure to set up the necessary credentials (such as access keys or secrets) in the GitHub repository.
Follow the instructions in the deploy.yml file to customize the workflow.
2. Deploy: Every time you push to the main branch, the workflow will automatically build and deploy the application.

## Interface.
Main page:
A simple interface that allows you to enter your name and receive a greeting.

Custom Greeting:
Enter a name, press “Greet” and you will get a response like:

“Hi, Ana! Hope you're having a great day. 🌟”
## AUTHOR
Cristina Colcha
🚀 This README is now ready to highlight the functionality and ease of deployment of your application!
