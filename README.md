# 🎲 Dice Game

A simple, interactive Dice Game built with React and Vite. Test your luck by guessing the dice roll!

## 📝 Description

This is a web-based Dice Game where players select a number and roll a die. If the selected number matches the die roll, the player earns points equal to the die number. If the guess is wrong, points are deducted. The application features a clean, responsive design tailored for a great user experience.

## ✨ Features

- **Interactive Gameplay**: Select a number and roll the dice to test your luck.
- **Dynamic Scoring**: Real-time score tracking based on your guesses.
- **Rules Display**: Toggleable "How to Play" section to guide new players.
- **Reset Functionality**: Reset the game score and selection with a single click.
- **Responsive Design**: Optimized for different screen sizes, ensuring the game looks good on mobile and desktop.

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://react.dev/) (v19)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Styling**: CSS / Tailwind CSS

## 🚀 Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your computer.

### Installation

1.  **Clone the repository** (if you haven't already)

    ```bash
    git clone <repository-url>
    cd Dice-game
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Run the development server**

    ```bash
    npm run dev
    ```

4.  **Play the Game**
    Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`).

## 🎮 How to Play

1.  **Start Game**: Click the "Play Now" button on the home screen.
2.  **Select a Number**: Click on any number from 1 to 6 on the top right.
3.  **Roll the Dice**: Click on the large dice image to roll it.
4.  **Score**:
    - **Correct Guess**: If the dice lands on your number, you earn those points.
    - **Wrong Guess**: If the dice lands on a different number, points are deducted.
5.  **Tools**: Use the "Show Rules" button to see specific rules or "Reset Score" to start fresh.

## 📂 Project Structure

```
src/
├── assets/          # Game assets (Dice images)
├── componets/       # React Components
│   ├── HeroSection.jsx  # Core game logic and UI
│   ├── MainDesign.jsx   # Landing Page
│   └── Number.jsx       # Reusable number selection component
├── App.jsx          # Main application and routing setup
└── main.jsx         # Entry point
```

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the game (e.g., add animations, sounds, or new modes), feel free to fork the repo and submit a pull request.

---

_Created with React + Vite_
