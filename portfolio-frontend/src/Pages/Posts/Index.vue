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
    "content": `
      <div class="prose max-w-none">
        <h2 class="text-2xl font-bold text-primary mb-4">CI/CD with Docker Compose and Woodpecker</h2>
        
        <p class="mb-4">
          <strong>CI/CD</strong> (Continuous Integration/Continuous Deployment) is an important method in software development that helps automate the testing and deployment processes of applications. In this article, we will learn how to use <strong>Docker Compose</strong> to set up Woodpecker CI/CD for your project.
        </p>
        
        <div class="bg-bgcolor/60 rounded-lg p-4 my-6 border-l-4 border-primary">
          <h3 class="text-xl font-semibold text-primary mb-2">Step 1: Create a docker-compose.yml file</h3>
          <p class="mb-3">In the root directory of your project, create a file named <code class="bg-gray-100 px-1 py-0.5 rounded">docker-compose.yml</code> with the following content:</p>
          
          <pre class="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
<code>version: '3'
services:
  woodpecker-server:
    image: woodpeckerci/woodpecker
    environment:
      - WOODPECKER_GITEA_SERVER=https://gitea.example.com
      - WOODPECKER_GITEA_TOKEN=your_gitea_token
    ports:
      - '9000:9000'

  woodpecker-agent:
    image: woodpeckerci/woodpecker-agent
    environment:
      - WOODPECKER_SERVER=woodpecker-server:9000</code></pre>
        </div>
        
        <div class="bg-bgcolor/60 rounded-lg p-4 my-6 border-l-4 border-primary">
          <h3 class="text-xl font-semibold text-primary mb-2">Step 2: Run Docker Compose</h3>
          <p class="mb-3">After creating the file, run the following command to start the Woodpecker server and agent:</p>
          
          <pre class="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
<code>docker-compose up -d</code></pre>
        </div>
        
        <div class="bg-bgcolor/60 rounded-lg p-4 my-6 border-l-4 border-primary">
          <h3 class="text-xl font-semibold text-primary mb-2">Step 3: Connect Woodpecker to Gitea</h3>
          <p class="mb-3">After installation, ensure that Woodpecker is configured to connect to Gitea using the access token you provided in the <code class="bg-gray-100 px-1 py-0.5 rounded">docker-compose.yml</code> file.</p>
          <p class="mb-3">To obtain the Gitea token, go to your personal page on Gitea, find the <strong>Access Tokens</strong> section, and create a new token.</p>
          
          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
            <p class="text-sm"><strong>Note:</strong> You need to expose port 9000 to the internet so that Gitea can receive connections from Woodpecker. You can use <strong>ngrok</strong> to do this, replacing the web hook inside the repos on Gitea with the domain of ngrok that you just exposed to the internet.</p>
          </div>
        </div>
        
        <div class="bg-bgcolor/60 rounded-lg p-4 my-6 border-l-4 border-primary">
          <h3 class="text-xl font-semibold text-primary mb-2">Step 4: Create a Woodpecker configuration file</h3>
          <p class="mb-3">In the root directory of your project, create a file named <code class="bg-gray-100 px-1 py-0.5 rounded">.woodpecker.yml</code>. This is where you will define the steps in your CI/CD pipeline:</p>
          
          <pre class="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
<code>pipeline:
  build:
    image: node:14
    commands:
      - npm install
      - npm run build

  deploy:
    image: alpine
    steps:
      - name: Deploy to Production
        commands:
          - echo 'Deploying to production...'</code></pre>
        </div>
        
        <div class="space-y-4 mt-6">
          <div class="flex items-start">
            <div class="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">5</div>
            <div>
              <h3 class="font-semibold text-lg text-secondary">Push code to Gitea</h3>
              <p class="text-gray-700">Once you have configured everything, push your code to Gitea. Woodpecker will automatically detect changes and start the CI/CD process.</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">6</div>
            <div>
              <h3 class="font-semibold text-lg text-secondary">Monitor the process</h3>
              <p class="text-gray-700">You can monitor your CI/CD process through the Woodpecker user interface, where you can view logs and the status of each step.</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">7</div>
            <div>
              <h3 class="font-semibold text-lg text-secondary">Use Gitea</h3>
              <p class="text-gray-700">To use Gitea, create a new repository for your project. After creating the repository, push your source code to it. Gitea provides a user-friendly interface for managing repositories, tracking issues, and collaborating with team members. Make sure you have configured access permissions for team members so they can participate in the development process.</p>
            </div>
          </div>
        </div>
        
        <div class="bg-primary/10 p-5 rounded-lg mt-8 border border-primary/20">
          <p class="text-center font-medium text-primary">With Woodpecker and Gitea, you can easily set up CI/CD for your project, helping to speed up development and improve code quality.</p>
        </div>
      </div>
    `
  },
]
</script>