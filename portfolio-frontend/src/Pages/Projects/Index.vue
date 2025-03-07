<template>
    <div id="app" class="bg-gradient-secondary shadow-lg w-full py-12 px-4 sm:px-6 lg:px-8">
        <ProjectTimeline :projects="projects" />
    </div>
</template>

<script setup>
import ProjectTimeline from './ProjectTimeline.vue'
const projects = [
    {
        date: '2024-06-11',
        name: 'Logistica - Full-stack Developer',
        description: 'Worked on building the backend, API, repository, service, and helper functions for the Logistica platform. Improved the interface using Bootstrap and JavaScript, including the development of QR scanner and barcode generator.'
    },
    {
        date: '2024-10-14 to 2024-11-14',
        name: 'Campus Expense - Financial Management',
        description: 'Led the full-stack development of the Campus Expense platform. Built features for budget management, transaction tracking (add, edit, delete), and category management. Utilized Vue.js for dynamic navigation and Tailwind CSS for customizable design.'
    },
    {
        date: '2024-08-14 to 2024-08-21',
        name: 'Plazza Oro - Full-stack Developer',
        description: 'Utilized the Laravel framework to build backend services, manage routing, databases, and integrate APIs. Implemented an admin panel for managing products and users, and designed a responsive interface using Bootstrap.'
    },
    {
        date: '2024-06-01 to 2024-06-30',
        name: 'Student Information Management System - Backend Developer',
        description: 'Developed the backend of a student information management system using ASP.NET and MySQL. Used RESTful APIs for database management and enhanced SQL queries to improve performance.'
    },
    {
        date: '2022-04-01 to 2022-05-31',
        name: 'Pistore - Game Store',
        description: 'Participated in designing and developing the user interface for the Pistore online game store using HTML, CSS, and SASS. Improved the interface for user experience and managed backend functionality using PHP.'
    }
]
</script>