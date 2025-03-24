<template>
    <div id="app" class="gradient-primary  py-12 px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold text-center mb-8 text-primary">Experience</h2>
        <ExperienceSection :experiences="experiences" />
    </div>
</template>

<script setup>
import ExperienceSection from './ExperienceSection.vue'

import htmlcssImage from '@/assets/images/htmlcss.png'
import laravelImage from '@/assets/images/laravel.png'
import mysqlImage from '@/assets/images/mysql.png'
import phpImage from '@/assets/images/php.png'
import tailwindImage from '@/assets/images/tailwind.png'
import vueImage from '@/assets/images/vue.png'
import dockerImage from '@/assets/images/docker.png'
import woodpeckerImage from '@/assets/images/woodpecker.png'

const experiences = [
    {
        name: 'HTML & CSS',
        image: htmlcssImage,
        level: 'I am familiar with HTML and CSS, and have used them to create basic responsive layouts and simple designs.'
    },
    {
        name: 'Laravel',
        image: laravelImage,
        level: 'I have experience with Laravel, primarily focusing on building simple web applications and working with routing and database management.'
    },
    {
        name: 'MySQL',
        image: mysqlImage,
        level: 'I have worked with MySQL databases for basic tasks, including creating simple queries and managing data.'
    },
    {
        name: 'PHP',
        image: phpImage,
        level: 'I have used PHP in several projects, mostly focusing on backend development and creating basic API endpoints.'
    },
    {
        name: 'Tailwind CSS',
        image: tailwindImage,
        level: 'I have explored Tailwind CSS and used it in building responsive user interfaces with simple styling.'
    },
    {
        name: 'Vue.js',
        image: vueImage,
        level: 'I have worked with Vue.js on a few small projects, focusing on understanding the basics of component-based architecture and simple data binding.'
    },
    {
        name: 'Docker',
        image: dockerImage,
        level: 'I have experience with Docker for containerizing applications, creating custom images, and managing multi-container environments with docker-compose.'
    },
    {
        name: 'CI/CD',
        image: woodpeckerImage,
        level: 'I have worked with CI/CD pipelines using Woodpecker CI to automate testing, building, and deployment processes for web applications.'
    }
]

</script>