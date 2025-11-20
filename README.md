# Next.js Project Setup and Basics

## 📌 Project Description
This project is a comprehensive introduction to setting up and working with **Next.js**, **TypeScript**, and **Tailwind CSS**. It guides you through creating a modern web application with reusable components, routing, API integration, and proper project structure.  
You will build interactive UI elements, fetch external data, and follow best practices for structuring a scalable project.

---

## 🎯 Learning Objectives

By completing this project, you will learn to:

- Scaffold a Next.js app with TypeScript and Tailwind CSS  
- Implement routing using the Pages Router  
- Build reusable components with TypeScript interfaces  
- Work with component props and state management  
- Create interactive components like modals and buttons  
- Fetch and render data from external APIs  
- Structure a project using best practices  
- Build responsive layouts with navigation  

---

## 🛠 Requirements

- Node.js v16 or later  
- npm or yarn  
- Basic React + TypeScript knowledge  
- HTML/CSS familiarity  
- Git & GitHub  
- Code editor (VS Code recommended)  

---

## 📁 Project Structure

alx-project-0x02/
├── components/
│ ├── common/
│ │ ├── Button.tsx
│ │ ├── Card.tsx
│ │ ├── PostCard.tsx
│ │ ├── PostModal.tsx
│ │ └── UserCard.tsx
│ └── layout/
│ └── Header.tsx
├── interfaces/
│ └── index.ts
├── pages/
│ ├── _app.tsx
│ ├── _document.tsx
│ ├── about.tsx
│ ├── home.tsx
│ ├── index.tsx
│ ├── posts.tsx
│ └── users.tsx
├── public/
│ └── assets/
│ └── images/
├── styles/
│ └── globals.css
├── .eslintrc.json
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json


---

## 🧩 Best Practices

### **Project Structure**
- Organize components by domain (`common`, `layout`, etc.)  
- Store interfaces in a dedicated folder  
- Separate pages according to routes  

### **Component Design**
- Reusable and modular  
- TypeScript interfaces for props  
- Follow the Single Responsibility Principle  

### **Code Quality**
- Use ESLint  
- Maintain consistent code style  
- Add meaningful comments  

### **Performance**
- Optimize API calls  
- Use lazy loading  
- Tailwind CSS for fast styling  

### **Documentation**
- Maintain a clear README  
- Document component props  
- Write descriptive commit messages  

---

## 🚀 Implementation Guide

1. Set up the Next.js project with TypeScript & Tailwind  
2. Implement basic routing using Pages Router  
3. Build reusable components (Button, Card, Modal, etc.)  
4. Add a Header for navigation  
5. Fetch data from JSONPlaceholder  
6. Display posts and users using PostCard & UserCard  
7. Test each page and component  

---

## ✅ Expected Outcomes

You will produce:

- A fully functional Next.js application  
- Reusable, typed components  
- Clean routing between pages  
- API integration  
- Responsive UI with Tailwind CSS  
- A well-structured codebase  

---

# 📝 Project Assessment (Hybrid)

Your work will be evaluated through:

### ✔ Manual review  
### ✔ Auto-check for required files  

To get full credit:

- Submit before the deadline  
- Include all required files  
- Generate your review link  
- Request peer reviews  

⚠ **If the deadline passes, you cannot generate a review link.**

---

# 📚 Tasks

---

## **0. Create the GitHub Repository and Initial Setup**  
**Repo:** `alx-project-0x02-setup`

- Create repo with README.md  
- Add title: _“Next.js Project Setup and Basics.”_  
- Write a brief introduction  

---

## **1. Set Up a Next.js Project**

- Run:  
  ```bash
  npx create-next-app@latest alx-project-2
