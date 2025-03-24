<template>
  <div id="app" class=" shadow-lg w-full py-12 px-4 sm:px-6 lg:px-8">
    <h2 class="text-2xl font-bold text-center mb-8 text-primary">Posts</h2>
    <BlogTimeline :posts="posts" />
  </div>
</template>

<script setup>
import BlogTimeline from './PostTimeline.vue'

const posts = [
  {
    "time": "2024-09-15",
    "title": "How to Use Docker Compose with Woodpecker CI/CD",
    "description": "Explore how to use Docker Compose to call pre-built images on Docker Hub for the Woodpecker server and agent, while also passing the necessary environment variables.",
    "author": "PoPi",
    "category": "Technology",
    "content": "<p><strong>CI/CD</strong> (Continuous Integration/Continuous Deployment) is an important method in software development that helps automate the testing and deployment processes of applications. In this article, we will learn how to use <strong>Docker Compose</strong> to set up Woodpecker CI/CD for your project.</p><p><strong>Step 1:</strong> Create a <code>docker-compose.yml</code> file. In the root directory of your project, you need to create a file named <code>docker-compose.yml</code> with the following content:</p><pre><code>version: '3'\nservices:\n  woodpecker-server:\n    image: woodpeckerci/woodpecker\n    environment:\n      - WOODPECKER_GITEA_SERVER=https://gitea.example.com\n      - WOODPECKER_GITEA_TOKEN=your_gitea_token\n    ports:\n      - '9000:9000'\n\n  woodpecker-agent:\n    image: woodpeckerci/woodpecker-agent\n    environment:\n      - WOODPECKER_SERVER=woodpecker-server:9000\n</code></pre><p><strong>Step 2:</strong> Run Docker Compose. After creating the <code>docker-compose.yml</code> file, you can run the following command to start the Woodpecker server and agent:</p><pre><code>docker-compose up -d</code></pre><p><strong>Step 3:</strong> Connect Woodpecker to Gitea. After installation, you need to ensure that Woodpecker is configured to connect to Gitea using the access token you provided in the <code>docker-compose.yml</code> file. To obtain the Gitea token, you can go to your personal page on Gitea, find the <strong>Access Tokens</strong> section, and create a new token.</p><p><strong>Note:</strong> You need to expose port 9000 to the internet so that Gitea can receive connections from Woodpecker. You can use <strong>ngrok</strong> to do this, replacing the web hook inside the repos on Gitea with the domain of ngrok that you just exposed to the internet.</p><p><strong>Step 4:</strong> Create a Woodpecker configuration file. In the root directory of your project, you need to create a file named <code>.woodpecker.yml</code>. This is where you will define the steps in your CI/CD pipeline:</p><pre><code>pipeline:\n  build:\n    image: node:14\n    commands:\n      - npm install\n      - npm run build\n\n  deploy:\n    image: alpine\n    steps:\n      - name: Deploy to Production\n        commands:\n          - echo 'Deploying to production...'</code></pre><p><strong>Step 5:</strong> Push code to Gitea. Once you have configured everything, push your code to Gitea. Woodpecker will automatically detect changes and start the CI/CD process.</p><p><strong>Step 6:</strong> Monitor the process. You can monitor your CI/CD process through the Woodpecker user interface, where you can view logs and the status of each step.</p><p><strong>Step 7:</strong> Use Gitea. To use Gitea, you need to create a new repository for your project. After creating the repository, you can push your source code to it. Gitea provides a user-friendly interface for managing repositories, tracking issues, and collaborating with team members. Make sure you have configured access permissions for team members so they can participate in the development process.</p><p>With Woodpecker and Gitea, you can easily set up CI/CD for your project, helping to speed up development and improve code quality.</p>"
  },
]
</script>