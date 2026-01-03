PatternWidget

PatternWidget is a small educational Next.js application created to demonstrate core Software Design Patterns and UML relationships in a practical, interactive way.
The project focuses on clarity, simplicity, and real-world usage rather than scale.

🚀 Technologies Used

Next.js (App Router)

React

TypeScript

Tailwind CSS

Git & GitHub

🎯 Design Patterns Implemented

Singleton Pattern
Used for global application configuration (theme management).

Observer Pattern
Used to notify components when tasks are added or updated.

Strategy Pattern
Different task-adding behaviors (simple vs validated strategies).

Decorator Pattern
Enhances widgets visually by adding borders and styles without modifying core logic.

Adapter Pattern
Adapts external or different interfaces to fit the application structure.

📐 UML Relationships Demonstrated

Association

Dependency

Generalization

Realization

These relationships are reflected in the project’s structure and TypeScript interfaces.

🧩 Application Features

Interactive Todo Widget

Light / Dark theme toggle

Responsive layout (mobile & desktop)

Clean and modular folder structure

Clear separation between UI and logic

📁 Project Structure
app/            → Pages and layout (Next.js App Router)
components/     → UI components
decorators/     → Decorator pattern
strategies/     → Strategy pattern implementations
observers/      → Observer pattern
lib/            → Singleton & Adapter logic
hooks/          → Custom hooks
interfaces/     → TypeScript interfaces

▶️ Getting Started
npm install
npm run dev


Open http://localhost:3000 in your browser.

🎓 Purpose

This project was built for academic learning to apply theoretical design patterns in a real Next.js application, while also serving as a portfolio-ready GitHub project.
