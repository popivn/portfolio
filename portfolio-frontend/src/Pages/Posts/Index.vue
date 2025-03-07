<template>
  <div id="app" class="bg-gradient-secondary shadow-lg w-full py-12 px-4 sm:px-6 lg:px-8">
    <h2 class="text-2xl font-bold text-center mb-8 text-primary">Blog</h2>
    <BlogTimeline :posts="posts" />
  </div>
</template>

<script setup>
import BlogTimeline from './PostTimeline.vue'

const posts = [
  {
    time: '2024-09-15',
    title: 'Getting Started with Vue.js 3 Composition API',
    description: 'Learn how to use the new Composition API in Vue.js 3 to build more maintainable and scalable applications.',
    author: 'To Trung Hieu',
    category: 'Technology',
    content: `Vue.js 3 introduced the Composition API, a new way to organize and reuse logic in Vue components. Unlike the Options API, which organizes code by options like data, methods, and computed properties, the Composition API allows you to organize code by logical concerns.

    The Composition API is centered around the setup() function, which is executed before the component is created. This function can return an object containing properties and methods that will be exposed to the template.

    Let's look at a simple example:

    import { ref, computed } from 'vue'

    export default {
      setup() {
        // Reactive state
        const count = ref(0)
        
        // Computed property
        const doubleCount = computed(() => count.value * 2)
        
        // Method
        function increment() {
          count.value++
        }
        
        // Expose to template
        return {
          count,
          doubleCount,
          increment
        }
      }
    }

    The Composition API makes it easier to extract and reuse logic across components. You can create composable functions that encapsulate related logic and use them in multiple components.

    For example, you could create a useCounter composable:

    import { ref, computed } from 'vue'

    export function useCounter() {
      const count = ref(0)
      const doubleCount = computed(() => count.value * 2)
      
      function increment() {
        count.value++
      }
      
      return {
        count,
        doubleCount,
        increment
      }
    }

    And then use it in a component:

    import { useCounter } from './composables/counter'

    export default {
      setup() {
        const { count, doubleCount, increment } = useCounter()
        
        return {
          count,
          doubleCount,
          increment
        }
      }
    }

    The Composition API is a powerful tool for building complex applications with Vue.js. It allows for better code organization, improved type inference, and more efficient reuse of logic.`
  },
  {
    time: '2024-08-22',
    title: 'Responsive Design Principles for Modern Web Applications',
    description: 'Explore key principles and techniques for creating responsive web designs that work well on all devices.',
    author: 'Jane Smith',
    category: 'Design',
    content: `Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. It's essential for providing a good user experience regardless of whether a user is accessing your site from a desktop computer, tablet, or smartphone.

    Here are some key principles for responsive design:

    1. Fluid Grids: Use relative units like percentages instead of fixed units like pixels for layout elements. This allows the layout to scale based on the viewport size.

    2. Flexible Images: Images should also scale with the layout. You can achieve this by setting max-width: 100% on images, which ensures they never exceed the width of their container.

    3. Media Queries: Use CSS media queries to apply different styles based on the characteristics of the device, such as its width, height, or orientation.

    4. Mobile-First Approach: Start designing for the smallest screen size first, then progressively enhance the design for larger screens. This approach forces you to focus on the essential content and functionality.

    5. Breakpoints: Establish breakpoints where your design will change to accommodate different screen sizes. Common breakpoints are around 576px, 768px, 992px, and 1200px, but you should base your breakpoints on your content, not on specific devices.

    Here's a simple example of a responsive layout using CSS Grid:

    .container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1rem;
    }

    This creates a grid where each column is at least 300px wide, and as many columns as can fit will be created. As the viewport width changes, the number of columns will adjust automatically.

    For more complex layouts, you might use a combination of CSS Grid and Flexbox, along with media queries to adjust the layout at different breakpoints.

    Remember, the goal of responsive design is to provide an optimal viewing experience across a wide range of devices. By following these principles, you can create web applications that look and work great regardless of the device they're viewed on.`
  },
  {
    time: '2024-07-10',
    title: 'Optimizing Database Performance in Laravel Applications',
    description: 'Learn techniques to improve database performance in Laravel applications, from query optimization to caching strategies.',
    author: 'To Trung Hieu',
    category: 'Tutorial',
    content: `Database performance is crucial for the overall performance of your Laravel application. In this post, we'll explore various techniques to optimize database performance in Laravel applications.

    1. Use Eager Loading to Avoid N+1 Query Problem

    The N+1 query problem occurs when you retrieve a collection of models and then access a relationship for each model, resulting in an additional query for each model. Laravel's eager loading can solve this problem:

    // Instead of this (N+1 problem)
    $books = Book::all();
    foreach ($books as $book) {
        echo $book->author->name;
    }

    // Do this (eager loading)
    $books = Book::with('author')->get();
    foreach ($books as $book) {
        echo $book->author->name;
    }

    2. Use Query Caching

    Laravel provides a simple way to cache query results:

    $users = Cache::remember('users', 60, function () {
        return User::all();
    });

    3. Use Database Indexes

    Indexes can significantly improve the performance of your queries, especially for large tables:

    // Add an index to a column in a migration
    Schema::table('users', function (Blueprint $table) {
        $table->index('email');
    });

    4. Chunk Large Datasets

    When working with large datasets, use the chunk method to process records in smaller batches:

    User::chunk(100, function ($users) {
        foreach ($users as $user) {
            // Process each user
        }
    });

    5. Use Query Builders Instead of Eloquent When Appropriate

    Eloquent is convenient, but for complex queries or when you need maximum performance, consider using the query builder:

    // Eloquent (creates and hydrates model instances)
    $users = User::where('active', 1)->get();

    // Query Builder (returns plain arrays, faster)
    $users = DB::table('users')->where('active', 1)->get();

    6. Optimize Your Database Schema

    Ensure your database schema is properly designed:
    - Use appropriate data types
    - Normalize your database to reduce redundancy
    - Use foreign keys for data integrity

    7. Use Laravel's Database Transactions

    Wrap related operations in transactions to ensure data integrity and improve performance:

    DB::transaction(function () {
        // Perform multiple database operations
    });

    By implementing these techniques, you can significantly improve the database performance of your Laravel applications, resulting in faster response times and a better user experience.`
  },
  {
    time: '2024-06-05',
    title: 'Building a Personal Brand as a Developer',
    description: 'Discover strategies for building your personal brand as a developer to stand out in the competitive tech industry.',
    author: 'Alex Johnson',
    category: 'Business',
    content: `In today's competitive tech industry, building a personal brand as a developer is more important than ever. Your personal brand is how you present yourself professionally and how others perceive you in the industry. It can help you stand out from the crowd, attract better job opportunities, and establish yourself as an authority in your field.

    Here are some strategies for building a strong personal brand as a developer:

    1. Find Your Niche
    While it's good to have broad knowledge, specializing in a specific area can help you stand out. Choose a technology, framework, or problem domain that you're passionate about and become an expert in it.

    2. Create and Share Content
    One of the most effective ways to build your brand is by creating and sharing valuable content. This could be through:
    - Writing blog posts or articles
    - Creating tutorial videos
    - Contributing to open-source projects
    - Speaking at conferences or meetups
    - Answering questions on platforms like Stack Overflow

    3. Build an Online Presence
    Establish a strong online presence through:
    - A personal website or portfolio showcasing your projects and skills
    - Active profiles on professional networks like LinkedIn and GitHub
    - Engagement on social media platforms relevant to your field

    4. Network Actively
    Networking is crucial for brand building:
    - Attend industry events, conferences, and meetups
    - Join online communities and forums
    - Participate in hackathons and coding challenges
    - Connect with other professionals in your field

    5. Contribute to Open Source
    Contributing to open-source projects demonstrates your skills and commitment to the community. It also helps you build connections with other developers.

    6. Develop Soft Skills
    Technical skills are important, but soft skills like communication, teamwork, and problem-solving are equally valuable for your brand:
    - Practice explaining complex technical concepts in simple terms
    - Learn to give and receive feedback effectively
    - Develop your writing and presentation skills

    7. Be Consistent and Authentic
    Consistency in your messaging and authenticity in your interactions are key to building trust:
    - Be genuine in your communications
    - Deliver on your promises
    - Admit when you don't know something and show your willingness to learn

    Building a personal brand takes time and effort, but the benefits are well worth it. By establishing yourself as a knowledgeable and trustworthy professional, you'll create more opportunities for career growth and professional satisfaction.`
  },
  {
    time: '2024-05-18',
    title: 'Mindfulness Practices for Developers',
    description: 'Explore mindfulness techniques that can help developers reduce stress, improve focus, and enhance productivity.',
    author: 'Sarah Chen',
    category: 'Lifestyle',
    content: `As developers, we often work in high-pressure environments with tight deadlines, complex problems, and constant learning curves. This can lead to stress, burnout, and decreased productivity. Mindfulness practices can help counteract these challenges by improving focus, reducing stress, and enhancing overall well-being.

    What is Mindfulness?
    Mindfulness is the practice of paying attention to the present moment with openness, curiosity, and without judgment. It involves being aware of your thoughts, feelings, bodily sensations, and environment.

    Benefits of Mindfulness for Developers:
    - Improved focus and concentration
    - Enhanced problem-solving abilities
    - Reduced stress and anxiety
    - Better error detection
    - Increased creativity
    - Improved work relationships
    - Better work-life balance

    Mindfulness Practices for Developers:

    1. Mindful Breathing
    Take short breaks throughout your day to focus on your breath:
    - Sit comfortably with your back straight
    - Close your eyes or maintain a soft gaze
    - Breathe naturally and focus on the sensation of your breath
    - When your mind wanders, gently bring your attention back to your breath
    - Practice for 2-5 minutes several times a day

    2. Pomodoro Technique with Mindfulness
    Combine the Pomodoro Technique (25 minutes of focused work followed by a 5-minute break) with mindfulness:
    - Set a timer for 25 minutes
    - Work with full focus on a single task
    - During the 5-minute break, practice mindful breathing or stretching
    - Notice how your body feels and any thoughts that arise without judgment

    3. Mindful Coding
    Bring awareness to the actual process of coding:
    - Notice the sensation of your fingers on the keyboard
    - Pay attention to your posture and adjust if necessary
    - Observe your thoughts and emotions as you solve problems
    - Take a moment to appreciate elegant solutions or interesting challenges

    4. Digital Detox
    Regularly disconnect from technology:
    - Set specific times to check emails and messages
    - Turn off non-essential notifications
    - Take screen-free breaks during the day
    - Establish tech-free zones or times at home

    5. Mindful Walking
    Take short walking breaks:
    - Walk slowly and deliberately
    - Notice the sensation of your feet touching the ground
    - Observe your surroundings with curiosity
    - Use this time to reset your mind between tasks

    6. Gratitude Practice
    End your workday with a gratitude practice:
    - Write down three things that went well
    - Acknowledge your accomplishments, no matter how small
    - Express appreciation for colleagues who helped you

    Implementing Mindfulness in Your Daily Routine:
    - Start small with 2-5 minute practices
    - Use reminders or apps to build consistency
    - Join a community or find an accountability partner
    - Be patient and non-judgmental with yourself

    By incorporating these mindfulness practices into your daily routine, you can improve your focus, reduce stress, and enhance your overall well-being as a developer. Remember, mindfulness is a skill that improves with practice, so be patient with yourself as you develop this valuable habit.`
  }
]
</script>