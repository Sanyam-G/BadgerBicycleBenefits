***

# BadgerBicycleBenefits 🦡🚴

**Live Demo:** [https://badgerbicycle.sanyamgarg.com](https://badgerbicycle.sanyamgarg.com)

A streamlined, mobile-first companion app for the **Bicycle Benefits** program in Madison, WI.

Built during **Anthropic ClaudeHacks 2025**, this application modernizes how cyclists discover the 150+ local businesses offering rewards for riding.

## 💡 The Mission
Madison is a platinum-level biking city with a thriving **Bicycle Benefits** community. While the program is fantastic, finding participating businesses while on a ride can be tricky.

**BadgerBicycle** bridges that gap. It takes the existing network of businesses and puts them into a fast, location-aware PWA (Progressive Web App) designed specifically for use on the handlebars.

## ✨ Key Features

- **🗺️ Interactive Open Maps:** A clean, distraction-free map interface built with **Leaflet & OpenStreetMap**. Fast, free, and privacy-focused.
- **📍 Instant Proximity:** Automatically sorts businesses by distance from your current location, helping you find the closest coffee, beer, or grocery discount instantly.
- **📱 Native Feel:** Installed as a PWA, it works seamlessly on iOS and Android with a touch-optimized interface.
- **🌗 Dark Mode:** Automatic dark mode support using Tailwind CSS v4, perfect for evening commutes.
- **⚡ High Performance:** Delivered as a lightweight static site for near-instant load times, even on spotty cellular connections.

## 🏗 Tech Stack

- **Frontend:** React 18, Vite
- **Styling:** Tailwind CSS v4
- **Mapping:** Leaflet, React-Leaflet, OpenStreetMap Tiles
- **Infrastructure:** Docker, Nginx (Self-Hosted)
- **Data:** Powered by the [Bicycle Benefits](https://bicyclebenefits.org) program

## 🚀 Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sanyamgarg/badgerbike-rewards.git
   cd badgerbike-rewards
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run locally:**
   ```bash
   npm run dev
   ```

## 🐳 Deployment

This project is containerized for easy self-hosting.

1. **Build the assets:**
   ```bash
   npm run build
   ```

2. **Run with Docker Compose:**
   ```yaml
   services:
     web:
       image: nginx:alpine
       volumes:
         - ./dist:/usr/share/nginx/html:ro
         - ./nginx.conf:/etc/nginx/conf.d/default.conf:ro
       ports:
         - "80:80"
   ```

## 🤝 Credits

- Built for **Anthropic ClaudeHacks 2025** @ University of Wisconsin - Madison.
- All business data and discounts provided by the incredible [Bicycle Benefits](https://bicyclebenefits.org) program. Buy a sticker and support them!