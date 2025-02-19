<template>
    <div id="app" class="bg-gradient-secondary shadow-lg w-full py-12 px-4 sm:px-6 lg:px-8">
      <ProjectTimeline :projects="projects" />
    </div>
  </template>
  
  <script setup>
  import ProjectTimeline from './ProjectTimeline.vue'
  
  const projects = [
    {
      date: '2023-07-02',
      name: 'Column- and row-oriented databases',
      description: 'This project explores different types of databases and how they store data efficiently.'
    },
    {
      date: '2023-07-01',
      name: 'Bloom filters',
      description: 'This project is about understanding and implementing Bloom filters for fast membership testing.'
    },
    {
      date: '2023-01-19',
      name: 'Don\'t filter in Django\'s get_queryset',
      description: 'A best practice guide for optimizing queries in Django.'
    },
    {
      date: '2022-01-09',
      name: '"The right tool for the job"',
      description: 'Choosing the best technology for your project.'
    },
    {
      date: '2021-10-03',
      name: 'Removing my site from Google search',
      description: 'Steps to remove a website from Google search results.'
    }
  ]
  </script>

  