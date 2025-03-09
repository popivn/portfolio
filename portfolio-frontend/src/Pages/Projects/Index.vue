<template>
    <div id="app" class="shadow-lg w-full py-12 px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl font-bold text-center mb-8 text-primary">Project</h2>
      <ProjectTimeline :projects="projects" />
    </div>
  </template>
  
  <script setup>
  import ProjectTimeline from './ProjectTimeline.vue'
  
  const projects = [
    {
      date: '2024-11-6 to Present',
      name: 'Logistical - Full-stack Developer Phase I',
      description: 'Worked on building the backend, API, repository, service, and helper functions for the Logistica platform. Improved the interface using Bootstrap and JavaScript, including the development of QR scanner and barcode generator.',
      icons: [
        'src/assets/images/icon/laravel_icon.jpg',
        'src/assets/images/icon/mysql_icon.jpg',
        'src/assets/images/icon/sql_icon.jpg',
      ],
    },
    {
      date: '2025-04-01',
      name: 'Logistical - Full-stack Developer Phase II',
      description: 'Worked on building the backend, API, repository, service, and helper functions for the Logistica platform. Improved the interface using Bootstrap and JavaScript, including the development of QR scanner and barcode generator.',
      icons: [
        'src/assets/images/icon/laravel_icon.jpg',
        'src/assets/images/icon/mysql_icon.jpg',
        'src/assets/images/icon/sql_icon.jpg',
      ]
    },
    {
      date: '2024-10-14 to 2024-11-14',
      name: 'Campus Expense - Financial Management',
      description: 'Led the full-stack development of the Campus Expense platform. Built features for budget management, transaction tracking (add, edit, delete), and category management. Utilized Vue.js for dynamic navigation and Tailwind CSS for customizable design.',
      icons: [
        'src/assets/images/icon/laravel_icon.jpg',
        'src/assets/images/icon/vue_icon.jpg',
        'src/assets/images/icon/tailwind_icon.jpg',
        'src/assets/images/icon/sqlite_icon.jpg',
      ],
      github: [
        'https://github.com/lenhatquangg/campus-expense-manager',
      ],
    },
    {
      date: '2024-08-14 to 2024-08-21',
      name: 'Plazza Oro - Full-stack Developer',
      description: 'Utilized the Laravel framework to build backend services, manage routing, databases, and integrate APIs. Implemented an admin panel for managing products and users, and designed a responsive interface using Bootstrap.',
      icons: [
        'src/assets/images/icon/laravel_icon.jpg',
        'src/assets/images/icon/bootstrap_icon.jpg',
        'src/assets/images/icon/mysql_icon.jpg',
      ],
      github: [
        'https://github.com/lenhatquangg/pizza',
      ],
      website: [
        'https://www.piazzaorsillo.com',
      ]
    },
    {
      date: '2024-06-01 to 2024-06-30',
      name: 'Student Information Management System - Backend Developer',
      description: 'Developed the backend of a student information management system using ASP.NET and MySQL. Used RESTful APIs for database management and enhanced SQL queries to improve performance.',
      icons: [
        'src/assets/images/icon/asp_icon.jpg',
        'src/assets/images/icon/bootstrap_icon.jpg',
        'src/assets/images/icon/sql_icon.jpg'
      ],
      github: [
        'https://github.com/lenhatquangg/Student-Information-Management-System',
      ],
    },
    {
      date: '2022-04-01 to 2022-05-31',
      name: 'Pistore - Game Store',
      description: 'Participated in designing and developing the user interface for the Pistore online game store using HTML, CSS, and SASS. Improved the interface for user experience and managed backend functionality using PHP.',
      icons: [
        'src/assets/images/icon/react_icon.jpg',
        'src/assets/images/icon/bootstrap_icon.jpg',
        'src/assets/images/icon/mysql_icon.jpg',
      ],
      github: [
        'https://github.com/lenhatquangg/PiStore',
      ],
    },
    {
      date: '2025-1-1 to Present',
      name: 'Portfolio Website - Personal Project',
      description: 'Developing a personal portfolio website using Vue.js and Tailwind CSS to showcase my projects and skills. Implementing responsive design and modern UI/UX principles.',
      icons: [
        'src/assets/images/icon/vue_icon.jpg',
        'src/assets/images/icon/tailwind_icon.jpg',
      ],
      github: [
        'https://github.com/lenhatquangg/portfolio',
      ],
    }
  ]
  </script>