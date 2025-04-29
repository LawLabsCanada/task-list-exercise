# Task List Exercise

## Overview

A simple task list application built with Angular, NGXS for state management, and TailwindCSS for styling. This project demonstrates a clean implementation of a task management system with in-memory state management.

## Tech Stack

- Angular
- NGXS for state management
- TailwindCSS (utility-first CSS framework)
- No backend required - all state managed in memory

## Features

- Add new tasks with a title
- Mark tasks as complete/incomplete
- Delete tasks
- Display tasks in a list format
- Show task creation date
- Form validation
- Responsive design

## Getting Started

1. Clone the repository
2. Run `yarn` to install dependencies
3. Run `yarn start` to start the development server
4. Navigate to `http://localhost:4200` to view the application

## Project Structure

- `src/app/state` - NGXS state management
- `src/app/components` - Reusable UI components
- `src/app/pages` - Main application pages
- `src/app/models` - TypeScript interfaces and types

## Development Notes

- All styling is done using TailwindCSS utility classes
- No SCSS files are used in this project
- State management is handled through NGXS
- The application is fully responsive and mobile-friendly

## Evaluation Criteria

- Code organization and structure
- Component design and reusability
- State management implementation with NGXS
- UI/UX implementation with TailwindCSS
- Code cleanliness and best practices

## Bonus Points

- Add task categories or priority levels
- Implement task filtering
- Add animations for task completion/deletion
- Implement task editing
