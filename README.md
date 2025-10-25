A responsive user management dashboard built with React, Material UI, and React Router featuring CRUD functionality and search filtering.

This project demonstrates frontend best practices, component reusability, responsive UI design, and state management.

Frontend Framework: React (Vite setup)
UI Library:	Material UI (MUI v5)
Routing:	React Router DOM
Styling:	Tailwind CSS + Custom CSS
State Management:	React Hooks (useState, useEffect, Context API)
Theme Management:	MUI ThemeProvider + Custom Context
Data Storage:	LocalStorage (for add/delete persistence)
API:	JSONPlaceholder (for mock user data via Axios)

My Approach -

Setup and Structure:
Started with Vite + React setup for fast development and modular folder structure.

UI & Layout:
Implemented a clean, minimal dashboard layout using Material UI and Tailwind.
Sidebar navigation handles routing to key pages like Dashboard, User List, and Add User.

Data Handling:
Integrated mock API using axios for fetching initial users.
Added localStorage persistence for user creation and deletion without backend setup.

Routing & Dynamic Pages:
Used React Router for nested routes and dynamic user detail pages.

Responsive Design:
Applied Material UI’s Grid and Box system with CSS media queries to ensure full responsiveness across screen sizes.
