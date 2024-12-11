# ClearMind

## Introduction

ClearMind is a React Native application that provides free resources on Acceptance and Commitment Therapy (ACT) to help users overcome procrastination. Originally developed as an Android application, this project has been migrated to React Native to support both mobile platforms and web using React Native Web.

## Frameworks and Technologies

This project utilizes the following frameworks and technologies:

- **Expo**: A set of tools and services built around React Native that helps you build, deploy, and quickly iterate on iOS, Android, and web apps from the same JavaScript codebase.
  - [Expo Documentation](https://docs.expo.dev/)
- **React Native**: A framework for building native applications using React.
  - [React Native Documentation](https://reactnative.dev/docs/getting-started)
- **React Native Web**: Enables you to build web applications using React Native components.
  - [React Native Web Documentation](https://github.com/necolas/react-native-web)
- **Firebase**: A platform developed by Google for creating mobile and web applications, used here for authentication and real-time database.
  - [Firebase Documentation](https://firebase.google.com/docs)
- **React Navigation**: Routing and navigation for your React Native apps.
  - [React Navigation Documentation](https://reactnavigation.org/)
- **Jest**: A delightful JavaScript Testing Framework with a focus on simplicity.
  - [Jest Documentation](https://jestjs.io/)

## Project Structure

Project/ ├── App.js ├── package.json ├── assets/ │ ├── images/ │ │ ├── design_photoroom.png │ │ ├── dark_green.png │ │ ├── medium_green.png │ │ └── light_green.png │ └── fonts/ │ └── DeliusSwashCaps-Regular.ttf ├── components/ │ └── MainScreen.js ├── firebaseConfig.js ├── react-native.config.js └── other necessary files...

## Setup and Installation

### Prerequisites

- **Node.js and npm**: Ensure you have Node.js and npm installed. [Download Node.js](https://nodejs.org/en/download/)
- **Expo CLI**: Install Expo CLI globally.

  ```bash
  git clone https://github.com/yourusername/clearmind.git
  cd clearmind
  npm install
  npm install -g expo-cli
  ```
