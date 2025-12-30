#  Tea Plantation Dashboard

A comprehensive **React Native** mobile application built with **Android Studio** for monitoring and managing tea farm operations. This app provides real-time monitoring of critical agricultural parameters essential for optimal tea cultivation.

##  Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

##  Overview

The **Tea Plantation Dashboard** is a mobile application designed to help tea farmers and plantation managers monitor critical environmental and soil parameters in real-time. Built using React Native and developed with Android Studio, this app provides an intuitive interface for tracking key metrics that influence tea quality and yield.

### Built With

- **Platform**: React Native (v0.78.1)
- **Development Environment**: Android Studio
- **Language**: TypeScript
- **Backend**: Firebase Realtime Database
- **Navigation**: React Navigation with Drawer

##  Features

### Core Functionality

-  **Real-Time Environmental Monitoring**
  - Temperature tracking (C)
  - Humidity levels (%)
  - Soil moisture percentage

-  **Soil Nutrient Analysis**
  - Nitrogen content (mg/kg)
  - Phosphorus levels (mg/kg)
  - Potassium measurements (mg/kg)
  - pH level monitoring

-  **User Authentication**
  - Email and password login system
  - Secure access control

-  **Intuitive Navigation**
  - Drawer navigation menu
  - Multiple sections:
    - Home Dashboard
    - About
    - E-Learning Resources
    - Chat Support
    - E-Commerce Integration

-  **Visual Experience**
  - Tea garden imagery
  - Clean, modern UI design
  - Real-time data updates (3-second intervals)

##  Tech Stack

### Frontend
- **React**: 19.0.0
- **React Native**: 0.78.1
- **TypeScript**: 5.0.4
- **React Navigation**: 7.1.6
- **React Native Gesture Handler**: 2.25.0
- **React Native Reanimated**: 3.17.5

### Backend & Database
- **Firebase Realtime Database**: 21.12.2

### Development Tools
- **Metro Bundler**: JavaScript build tool
- **Android Studio**: Primary development IDE
- **Babel**: JavaScript compiler
- **ESLint**: Code linting
- **Jest**: Testing framework

##  Prerequisites

Before you begin, ensure you have the following installed:

### Required Software

1. **Node.js** (>= 18.x)
   `sh
   node --version
   `

2. **npm** or **Yarn** package manager
   `sh
   npm --version
   `

3. **Android Studio** (Latest stable version)
   - Android SDK
   - Android SDK Platform Tools
   - Android Emulator (or physical device)

4. **Java Development Kit (JDK)** (>= 17)
   `sh
   java -version
   `

5. **Git** (for version control)
   `sh
   git --version
   `

### Environment Setup

Follow the official [React Native Environment Setup](https://reactnative.dev/docs/set-up-your-environment) guide for detailed instructions on configuring:
- Android Studio
- Android SDK
- Environment variables (ANDROID_HOME, PATH)

##  Installation

### 1. Clone the Repository

`sh
git clone <repository-url>
cd tea_farm
`

### 2. Install Dependencies

Using npm:
`sh
npm install
`

Or using Yarn:
`sh
yarn install
`

### 3. Firebase Configuration

Ensure Firebase credentials are properly configured:
- Add your google-services.json to ndroid/app/
- Verify Firebase project settings in the Firebase Console

##  Running the Application

### Step 1: Start Metro Bundler

Metro is the JavaScript bundler for React Native. Start it first:

`sh
npm start
`

Or:
`sh
yarn start
`

### Step 2: Launch the App

#### For Android

**Option A: Using Command Line**

Make sure you have:
- An Android emulator running, OR
- A physical Android device connected with USB debugging enabled

`sh
npm run android
`

Or:
`sh
yarn android
`

**Option B: Using Android Studio**

1. Open the ndroid folder in Android Studio
2. Select your target device/emulator
3. Click the **Run** button (green play icon)
4. The app will build and launch automatically

#### For iOS (macOS only)

**Install CocoaPods dependencies:**

`sh
cd ios
bundle install
bundle exec pod install
cd ..
`

**Run the app:**

`sh
npm run ios
`

Or:
`sh
yarn ios
`

##  Project Structure

`
tea_farm/
 android/              # Android native code and configuration
    app/
    gradle/
 ios/                  # iOS native code (for future iOS builds)
    tea_farm/
 __tests__/            # Test files
    App.test.tsx
 App.tsx               # Main application component
 index.js              # Entry point
 package.json          # Dependencies and scripts
 tsconfig.json         # TypeScript configuration
 babel.config.js       # Babel configuration
 metro.config.js       # Metro bundler configuration
 jest.config.js        # Jest testing configuration
 README.md             # Documentation (this file)
`

##  Available Scripts

In the project directory, you can run:

| Script | Command | Description |
|--------|---------|-------------|
| **Start** | 
pm start | Starts Metro bundler |
| **Android** | 
pm run android | Builds and runs Android app |
| **iOS** | 
pm run ios | Builds and runs iOS app (macOS only) |
| **Test** | 
pm test | Runs Jest test suite |
| **Lint** | 
pm run lint | Runs ESLint code analysis |

##  Development

### Hot Reloading

The app supports **Fast Refresh** - save your changes in App.tsx and see them reflected immediately.

### Manual Reload

- **Android**: Press R twice or Ctrl + M (Windows/Linux) / Cmd + M (macOS) to open Dev Menu
- **iOS**: Press Cmd + R in iOS Simulator

### Debugging

1. Open Dev Menu (as described above)
2. Select "Debug" option
3. Use Chrome DevTools or React Native Debugger

### Code Editing

The main application logic is in:
- App.tsx - Main component with dashboard and monitoring logic

##  Building for Production

### Android APK/AAB

**Generate Debug APK:**
`sh
cd android
./gradlew assembleDebug
`

**Generate Release APK:**
`sh
cd android
./gradlew assembleRelease
`

**Generate Release AAB (for Play Store):**
`sh
cd android
./gradlew bundleRelease
`

The generated files will be in:
- APK: ndroid/app/build/outputs/apk/release/
- AAB: ndroid/app/build/outputs/bundle/release/

### Signing Configuration

For production builds, configure signing in ndroid/app/build.gradle:
1. Generate a keystore
2. Add signing configuration
3. Reference in build types

##  Troubleshooting

### Common Issues

**1. Metro Bundler Issues**
`sh
npm start -- --reset-cache
`

**2. Android Build Failures**
`sh
cd android
./gradlew clean
cd ..
npm run android
`

**3. Dependencies Issues**
`sh
rm -rf node_modules
npm install
`

**4. Android Gradle Issues**
- Ensure ANDROID_HOME environment variable is set
- Verify Android SDK installation in Android Studio

**5. Port Already in Use**
`sh
npx react-native start --port 8082
`

### Additional Resources

- [React Native Troubleshooting](https://reactnative.dev/docs/troubleshooting)
- [Android Studio Documentation](https://developer.android.com/studio/intro)
- [Firebase Documentation](https://firebase.google.com/docs)

##  Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

##  License

This project is private and proprietary.

##  Support

For issues and questions:
- Check the [Troubleshooting](#troubleshooting) section
- Review [React Native Documentation](https://reactnative.dev/docs/getting-started)
- Contact the development team

---

**Built with  using React Native and Android Studio**
