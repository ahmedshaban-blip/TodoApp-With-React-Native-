<div align="center">

# ✅ TodoApp with React Native

[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/ahmedshaban-blip/TodoApp-With-React-Native-)

A simple and elegant To-Do app for registering users and managing daily tasks with local persistence.

[![React Native](https://img.shields.io/badge/React%20Native--61DAFB?logo=react&logoColor=white&labelColor=20232a)](https://reactnative.dev)
[![Expo](https://img.shields.io/badge/Expo--000020?logo=expo&logoColor=white&labelColor=151515)](https://expo.dev)
[![Navigation](https://img.shields.io/badge/React%20Navigation--CA4245?logo=reactrouter&logoColor=white&labelColor=2b2b2b)](https://reactnavigation.org)
[![Storage](https://img.shields.io/badge/AsyncStorage--6DB33F?logo=databricks&logoColor=white&labelColor=1f2937)](https://react-native-async-storage.github.io/async-storage/)
[![Forms](https://img.shields.io/badge/React%20Hook%20Form--EC5990?logo=reacthookform&logoColor=white&labelColor=1f2937)](https://react-hook-form.com)
[![Platforms](https://img.shields.io/badge/Platforms-iOS%20%7C%20Android-5865F2?labelColor=1f2937)](#-features)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-10B981?labelColor=1f2937)](#-contributing)

<br />

[Overview](#-overview) • [Features](#-features) • [Tech Stack](#-tech-stack) • [Structure](#-folder-structure) • [Getting Started](#-getting-started) • [Scripts](#-available-scripts)

---

</div>

## 🔎 Overview

A cross-platform Todo app built with React Native and Expo featuring a validated registration flow, robust task CRUD (add/view/delete), and offline persistence via AsyncStorage for a seamless experience on iOS and Android.

## ✨ Features

- 📝 **User Registration** — Validated form for name, email, password, and phone
- ➕ **Add Tasks** — Quickly capture tasks into a personal list
- 👀 **View Tasks** — Clean list UI to review what matters today
- 🗑️ **Delete Tasks** — Remove completed items with a tap
- 💾 **Local Persistence** — Offline-first storage backed by AsyncStorage
- 📱 **Cross-Platform** — Works smoothly on both iOS and Android

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React Native | Native mobile UI framework |
| Expo | Toolchain and dev runtime |
| React Navigation | Screen routing and navigation |
| AsyncStorage | Local device persistence |
| React Hook Form | Lightweight form and validation |

## 🗂️ Folder Structure

```
TodoApp-With-React-Native-/
├─ app/                   # App source
├─ components/            # Reusable UI components
├─ screens/               # Registration, Tasks list, etc.
├─ navigation/            # Navigation setup
├─ hooks/                 # Custom hooks (forms, storage)
├─ assets/                # Images, fonts, icons
└─ package.json           # Scripts and dependencies
```

## 🚀 Getting Started

### 📋 Prerequisites

- Node.js (LTS) and npm or Yarn
- Expo Go app or Android/iOS emulator
- Expo CLI (optional, `npx expo` works too)

### 📥 Installation

1) **Clone the repository**
```bash
git clone https://github.com/ahmedshaban-blip/TodoApp-With-React-Native-.git
cd TodoApp-With-React-Native-
```

2) **Install dependencies**
```bash
npm install
# or
yarn
```

3) **Start the development server**
```bash
npm start
# or
npx expo start
```

4) **Run on a specific platform**
```bash
npm run android   # Android device/emulator
npm run ios       # iOS simulator/device (macOS)
npm run web       # Run in a web browser
```

## 💻 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start the Expo development server |
| `npm run android` | Build and run on Android device/emulator |
| `npm run ios` | Build and run on iOS simulator/device |
| `npm run web` | Run the app in a web browser |

---

<div align="center">

Built with ❤️ using React Native, Expo, and a focus on clear, accessible UX.

</div>
