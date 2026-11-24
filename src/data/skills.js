export const skillCategories = [
  { id: "all", name: "All Skills" },
  { id: "backend", name: "Backend" },
  { id: "frontend", name: "Frontend" },
  { id: "database", name: "Database" },
  { id: "tools", name: "Tools & DevOps" }
];

export const skillsData = [
  // Backend
  {
    name: "Java",
    category: "backend",
    level: "Core Language",
    description: "OOP, Collections Framework, Multithreading, Streams & Functional Programming.",
    featured: true
  },
  {
    name: "Spring Boot",
    category: "backend",
    level: "Proficient",
    description: "Dependency Injection, Spring MVC, Spring Data JPA, Hibernate, Actuator.",
    featured: true
  },
  {
    name: "Spring Security",
    category: "backend",
    level: "Practical",
    description: "Authentication & Authorization, Stateless JWT tokens, Role-Based Access Control (RBAC).",
    featured: true
  },
  {
    name: "REST API",
    category: "backend",
    level: "Proficient",
    description: "API design principles, HTTP status codes, pagination, filtering, input validation.",
    featured: true
  },
  {
    name: "Spring Cloud",
    category: "backend",
    level: "Familiar / Exploration",
    description: "Eureka Service Discovery, Spring Cloud API Gateway, Microservice configuration.",
    featured: false
  },

  // Frontend
  {
    name: "React",
    category: "frontend",
    level: "Proficient",
    description: "Hooks (useState, useEffect, useMemo), Component architecture, Context API, Vite.",
    featured: true
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    level: "Proficient",
    description: "Async/Await, Promises, Closures, DOM manipulation, Array methods.",
    featured: true
  },
  {
    name: "HTML5 & CSS3",
    category: "frontend",
    level: "Proficient",
    description: "Semantic HTML, Flexbox, CSS Grid, Responsive web design.",
    featured: false
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    level: "Proficient",
    description: "Utility-first design, custom themes, responsive breakpoints, dark mode.",
    featured: false
  },

  // Database
  {
    name: "MySQL",
    category: "database",
    level: "Proficient",
    description: "Relational database schema modeling, indexing, joins, transactions, ACID properties.",
    featured: true
  },
  {
    name: "SQL",
    category: "database",
    level: "Proficient",
    description: "Complex queries, aggregations, foreign keys, constraints, query optimization.",
    featured: false
  },

  // Tools
  {
    name: "Git",
    category: "tools",
    level: "Proficient",
    description: "Branching strategies, merge, rebase, resolving conflicts, commit conventions.",
    featured: false
  },
  {
    name: "GitHub",
    category: "tools",
    level: "Proficient",
    description: "Pull Requests, Code Reviews, Issue tracking, GitHub Actions basic CI.",
    featured: false
  },
  {
    name: "Maven",
    category: "tools",
    level: "Proficient",
    description: "Project lifecycle, dependency management, plugins, multi-module builds.",
    featured: false
  },
  {
    name: "Docker",
    category: "tools",
    level: "Practical",
    description: "Containerization, Dockerfile, docker-compose for multi-container development.",
    featured: true
  },
  {
    name: "Postman",
    category: "tools",
    level: "Proficient",
    description: "API testing, automated request collections, environment variables, documentation.",
    featured: false
  }
];

