# AnalyticsPro Dashboard

A professional, responsive React dashboard with authentication, charts, and analytics features.

## Features

- **Authentication**: Custom Login page with beautiful UI and mock authentication.
- **Protected Routes**: Secure access to dashboard pages (redirects to login if not authenticated).
- **Dashboard**: Interactive charts (Area, Pie) using Recharts and key statistics.
- **Project Management**: 
  - List view of projects with progress tracking.
  - **Create Project Modal**: extensive form with text inputs, standard selects, date pickers, and file upload simulation.
- **Global Layout**:
  - **Sidebar**: Fixed positioning (configured left as per standard/mockup).
  - **Navbar**: Top fixed navigation with search and user profile.
- **Styling**:
  - Tailwind CSS with custom forest green color palette (refined gradients and shades).
  - Glassmorphism effects.
  - Smooth animations (slide-in, hover effects).
  - Responsive design.

## Project Structure

- `src/components/layout/MainLayout.jsx`: Application shell (Sidebar + Navbar).
- `src/components/common/Sidebar.jsx`: Navigation menu.
- `src/components/common/Navbar.jsx`: Top bar.
- `src/pages/auth/Login.jsx`: Login page.
- `src/pages/dashboard/Dashboard.jsx`: Main dashboard with charts.
- `src/pages/projects/Projects.jsx`: Project management with Modal Form.
- `src/context/AuthContext.jsx`: Auth state management.

## Getting Started

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Run the development server:
    ```bash
    npm run dev
    ```
3.  Open browser at `http://localhost:5173`.
4.  **Login**: Use any email/password (e.g., `admin@example.com` / `password`).

## Customization

- **Colors**: Edit `tailwind.config.js` to change `primary` and `secondary` colors.
- **Sidebar**: Edit `src/components/common/Sidebar.jsx`.

## Notes on Requirements

- **Fixed Sidebar**: Implementation uses a fixed sidebar layout.
- **Charts**: Includes Area and Pie charts to visualize data.
- **Reusable Form**: Projects page demonstrates a reusable Modal and Form components.
- **Aesthetics**: Premium forest green theme with refined gradients, multiple green shades, and modern shadows.
